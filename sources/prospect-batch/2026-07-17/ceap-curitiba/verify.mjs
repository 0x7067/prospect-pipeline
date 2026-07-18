import { chromium } from 'playwright';
import fs from 'node:fs';
const base='http://127.0.0.1:4179';
const browser=await chromium.launch({headless:true});
const report={run:new Date().toISOString(),viewports:{},checks:{},errors:[]};
async function inspect(page,label,url,viewport){
 const consoleErrors=[],failed=[];
 page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text())});
 page.on('pageerror',e=>consoleErrors.push(e.message));
 page.on('requestfailed',r=>failed.push(`${r.url()} :: ${r.failure()?.errorText}`));
 const response=await page.goto(url,{waitUntil:'networkidle'});
 await page.waitForTimeout(300);
 const data=await page.evaluate(()=>{
   const anchors=[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h&&h!=='#');
   const unresolved=anchors.filter(h=>!document.querySelector(h));
   const images=[...document.images].map(i=>({src:i.getAttribute('src'),complete:i.complete,naturalWidth:i.naturalWidth}));
   const badImages=images.filter(i=>!i.complete||!i.naturalWidth);
   const tinyTargets=[...document.querySelectorAll('button, a')].filter(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return s.display!=='none'&&r.width>0&&r.height>0&&r.height<44&&matchMedia('(max-width: 900px)').matches}).map(el=>({text:(el.textContent||'').trim().slice(0,40),w:Math.round(el.getBoundingClientRect().width),h:Math.round(el.getBoundingClientRect().height)}));
   return {title:document.title,scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,scrollHeight:document.documentElement.scrollHeight,unresolved,badImages,tinyTargets,lang:document.documentElement.lang,h1:document.querySelectorAll('h1').length};
 });
 if(!response?.ok()) report.errors.push(`${label}: HTTP ${response?.status()}`);
 if(consoleErrors.length) report.errors.push(`${label}: console ${consoleErrors.join(' | ')}`);
 if(failed.length) report.errors.push(`${label}: requests ${failed.join(' | ')}`);
 if(data.scrollWidth>data.clientWidth) report.errors.push(`${label}: overflow ${data.scrollWidth}/${data.clientWidth}`);
 if(data.unresolved.length) report.errors.push(`${label}: anchors ${data.unresolved.join(',')}`);
 if(data.badImages.length) report.errors.push(`${label}: images ${JSON.stringify(data.badImages)}`);
 report.viewports[label]={viewport,...data,consoleErrors,failed};
 return data;
}
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height}});
 await inspect(page,`index-${name}`,`${base}/index.html`,{width,height});
 await page.screenshot({path:`evidence/index-${name}.png`,fullPage:false});
 await page.screenshot({path:`evidence/index-${name}-full.png`,fullPage:true});
 if(name==='desktop') await page.screenshot({path:'assets/proposed-home.png',fullPage:false});
 if(name==='mobile'){
   const toggle=page.locator('.menu-toggle');
   await toggle.click();
   const open=await toggle.getAttribute('aria-expanded');
   const menuVisible=await page.locator('#menu').isVisible();
   await toggle.press('Escape');
   const closed=await toggle.getAttribute('aria-expanded');
   await page.locator('.filter[data-filter="industria"]').click();
   const visibleCards=await page.locator('.course-card:visible').count();
   const wrongCards=await page.locator('.course-card:visible:not([data-area="industria"])').count();
   report.checks.mobileMenu={open,menuVisible,closed};report.checks.filter={visibleCards,wrongCards};
   if(open!=='true'||!menuVisible||closed!=='false')report.errors.push('mobile menu interaction failed');
   if(visibleCards!==2||wrongCards!==0)report.errors.push('course filter failed');
 }
 await page.close();
}
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height}});
 await inspect(page,`proposal-${name}`,`${base}/proposal.html`,{width,height});
 await page.screenshot({path:`evidence/proposal-${name}.png`,fullPage:false});
 await page.screenshot({path:`evidence/proposal-${name}-full.png`,fullPage:true});
 await page.close();
}
const prod=fs.readFileSync('index.html','utf8').toLowerCase();
const forbidden=['proposal','proposta','redesign','redesenho','protótipo','prototype','disclosure','divulgação independente','não solicitado'];
report.checks.productionForbidden=forbidden.filter(x=>prod.includes(x));
if(report.checks.productionForbidden.length)report.errors.push(`production forbidden language: ${report.checks.productionForbidden.join(',')}`);
report.passed=report.errors.length===0;
fs.writeFileSync('evidence/verification.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
await browser.close();
if(!report.passed)process.exit(1);
