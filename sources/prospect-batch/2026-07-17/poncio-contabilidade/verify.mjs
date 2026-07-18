import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';

const base = 'http://127.0.0.1:43891';
const browser = await chromium.launch({headless:true});
const results = { runAt:new Date().toISOString(), viewports:[], pages:{}, menu:{}, separation:{}, assets:{}, hashes:{} };

async function audit(path, name, viewport, screenshots=true) {
  const page = await browser.newPage({viewport, deviceScaleFactor:1});
  const consoleErrors=[]; const pageErrors=[]; const failed=[]; const badResponses=[];
  page.on('console', m => { if(m.type()==='error') consoleErrors.push(m.text()); });
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('requestfailed', r => failed.push(`${r.method()} ${r.url()} :: ${r.failure()?.errorText}`));
  page.on('response', r => { if (r.status() >= 400) badResponses.push(`${r.status()} ${r.url()}`); });
  const response = await page.goto(base+path, {waitUntil:'networkidle'});
  await page.waitForTimeout(300);
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) {
      scrollTo(0, y); await new Promise(r => setTimeout(r, 40));
    }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(200);
  const dims = await page.evaluate(() => ({innerWidth,scrollWidth:document.documentElement.scrollWidth,bodyScrollWidth:document.body.scrollWidth,scrollHeight:document.documentElement.scrollHeight,title:document.title,lang:document.documentElement.lang}));
  const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h !== '#' && !document.querySelector(h)));
  const localImages = await page.evaluate(() => [...document.images].map(i=>({src:i.getAttribute('src'),complete:i.complete,width:i.naturalWidth})).filter(i=>i.width===0));
  if(screenshots){
    await page.screenshot({path:`evidence/rebuild/${name}-viewport-${viewport.width}x${viewport.height}.png`,fullPage:false});
    await page.screenshot({path:`evidence/rebuild/${name}-full-${viewport.width}x${viewport.height}.png`,fullPage:true});
  }
  const allHrefs = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')));
  const malformedContacts = allHrefs.filter(h => (h.startsWith('tel:') && !/^tel:\+\d{12,15}$/.test(h)) || (h.includes('wa.me/') && !/^https:\/\/wa\.me\/\d{12,15}(\?|$)/.test(h)));
  const record={status:response?.status(),...dims,overflow:dims.scrollWidth>dims.innerWidth||dims.bodyScrollWidth>dims.innerWidth,consoleErrors,pageErrors,failed,badResponses,brokenAnchors,brokenImages:localImages,malformedContacts};
  await page.close(); return record;
}

results.pages.indexDesktop=await audit('/index.html','rebuild-desktop',{width:1440,height:900});
results.pages.indexMobile=await audit('/index.html','rebuild-mobile',{width:390,height:844});
results.pages.proposalDesktop=await audit('/proposal.html','proposal-desktop',{width:1440,height:900});
results.pages.proposalMobile=await audit('/proposal.html','proposal-mobile',{width:390,height:844});

const menuPage=await browser.newPage({viewport:{width:390,height:844}});
await menuPage.goto(base+'/index.html',{waitUntil:'networkidle'});
const toggle=menuPage.locator('.menu-toggle');
await toggle.click();
results.menu.openByButton=(await toggle.getAttribute('aria-expanded'))==='true' && await menuPage.locator('.site-nav').evaluate(el=>el.classList.contains('open'));
await menuPage.keyboard.press('Escape');
results.menu.closeByEscape=(await toggle.getAttribute('aria-expanded'))==='false' && await toggle.evaluate(el=>el===document.activeElement);
await toggle.click();
await menuPage.locator('.site-nav a[href="#servicos"]').click();
results.menu.closeByLink=(await toggle.getAttribute('aria-expanded'))==='false';
const box=await toggle.boundingBox();
results.menu.tapTarget=box ? {width:box.width,height:box.height,pass:box.width>=44&&box.height>=44}:null;
await menuPage.close();

const indexText=(await fs.readFile('index.html','utf8')).toLowerCase();
const forbidden=['proposal','proposta comercial','redesign','prototype','protótipo','diagnosis','diagnóstico','evidence','evidência','disclosure','divulgação','pitch','não encomendado','sem vínculo'];
results.separation.forbiddenProductionTerms=forbidden.filter(t=>indexText.includes(t));
results.separation.proposalLinkedFromProduction=/proposal\.html/i.test(indexText);
results.separation.productionIdentity=/site-page/.test(indexText);
results.separation.proposalIdentity=/independente/.test(await fs.readFile('proposal.html','utf8'));

const required=['index.html','proposal.html','styles.css','script.js','SOURCE_MANIFEST.md','assets/logo-poncio.png','assets/favicon-poncio.png','assets/hero-office.jpg','assets/team-office.png','assets/brand-detail-wide.png','assets/brand-detail-tall.png'];
for(const f of required){
  const data=await fs.readFile(f); results.hashes[f]=crypto.createHash('sha256').update(data).digest('hex');
}
results.assets.requiredFiles=required;
results.assets.allPresent=true;

const failures=[];
for(const [name,p] of Object.entries(results.pages)){
  if(p.status!==200||p.overflow||p.consoleErrors.length||p.pageErrors.length||p.failed.length||p.badResponses.length||p.brokenAnchors.length||p.brokenImages.length||p.malformedContacts.length) failures.push(name);
}
if(!results.menu.openByButton||!results.menu.closeByEscape||!results.menu.closeByLink||!results.menu.tapTarget?.pass) failures.push('menu');
if(results.separation.forbiddenProductionTerms.length||results.separation.proposalLinkedFromProduction) failures.push('separation');
results.pass=failures.length===0; results.failures=failures;
await fs.writeFile('evidence/verification-results.json',JSON.stringify(results,null,2));
await browser.close();
console.log(JSON.stringify({pass:results.pass,failures,menu:results.menu,pages:Object.fromEntries(Object.entries(results.pages).map(([k,v])=>[k,{status:v.status,overflow:v.overflow,consoleErrors:v.consoleErrors.length,pageErrors:v.pageErrors.length,failed:v.failed.length,badResponses:v.badResponses.length,brokenAnchors:v.brokenAnchors.length,brokenImages:v.brokenImages.length,scrollHeight:v.scrollHeight}]))},null,2));
if(!results.pass) process.exit(1);
