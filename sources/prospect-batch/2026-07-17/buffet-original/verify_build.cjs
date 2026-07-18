const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const root = 'http://127.0.0.1:41993';
(async()=>{
 const browser=await chromium.launch({headless:true});
 const results=[];
 for (const target of ['index.html','proposal.html']) {
  for (const [label,width,height] of [['desktop',1440,900],['mobile',390,844]]) {
   const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
   const errors=[]; const failed=[];
   page.on('console',m=>{if(m.type()==='error') errors.push(`console: ${m.text()}`)});
   page.on('pageerror',e=>errors.push(`pageerror: ${e.message}`));
   page.on('requestfailed',r=>failed.push(`${r.url()} :: ${r.failure()?.errorText||'failed'}`));
   await page.goto(`${root}/${target}`,{waitUntil:'networkidle'});
   await page.waitForTimeout(250);
   const metrics=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,bodyHeight:document.body.scrollHeight,viewport:innerWidth}));
   const brokenAnchors=await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h!=='#'&&!document.querySelector(h)));
   const brokenImages=await page.evaluate(()=>[...document.images].filter(img=>!img.complete||img.naturalWidth===0).map(img=>img.getAttribute('src')));
   const localLinks=await page.evaluate(()=>[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>h&&!/^(#|https?:|mailto:|tel:)/i.test(h)));
   const missingLocalLinks=localLinks.filter(h=>!fs.existsSync(path.resolve(h.split(/[?#]/)[0])));
   await page.screenshot({path:`screenshots/${target==='index.html'?'production':'proposal'}/${target.replace('.html','')}-${label}-1440x900.png`,fullPage:false});
   await page.screenshot({path:`screenshots/${target==='index.html'?'production':'proposal'}/${target.replace('.html','')}-${label}-full.png`,fullPage:true});
   if(target==='proposal.html'){
    const evidence=page.locator('.evidence-grid'); await evidence.scrollIntoViewIfNeeded(); await page.waitForTimeout(150); await page.screenshot({path:`screenshots/proposal/proposal-comparison-${label}-1440x900.png`,fullPage:false});
   }
   if(target==='index.html'&&label==='mobile'){
    const toggle=page.locator('.menu-toggle'); await toggle.focus(); const before=await toggle.getAttribute('aria-expanded'); await page.keyboard.press('Enter'); const after=await toggle.getAttribute('aria-expanded'); await page.keyboard.press('Escape'); const afterEscape=await toggle.getAttribute('aria-expanded'); const focused=await page.evaluate(()=>document.activeElement?.className||''); results.push({check:'mobile menu keyboard',before,after,afterEscape,focused});
   }
   results.push({target,label,viewport:`${width}x${height}`,overflow:metrics.scrollWidth>metrics.clientWidth,metrics,errors,failed,brokenAnchors,brokenImages,missingLocalLinks});
   await page.close();
  }
 }
 const index=fs.readFileSync('index.html','utf8');
 results.push({check:'production separation',proposalTerms:['proposta','redesign','protótipo','diagnóstico','evidência','disclosure'].filter(t=>index.toLowerCase().includes(t)),proposalLink:index.includes('proposal.html')});
 const files=['index.html','proposal.html','styles.css','script.js'];
 results.push({check:'required files',files:files.map(f=>({file:f,exists:fs.existsSync(f),bytes:fs.existsSync(f)?fs.statSync(f).size:0}))});
 fs.writeFileSync('screenshots/verification.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2));
 const pageFailures=results.filter(r=>r.target&&(r.overflow||r.errors.length||r.failed.length||r.brokenAnchors.length||r.brokenImages.length||r.missingLocalLinks.length));
 const menu=results.find(r=>r.check==='mobile menu keyboard');
 const separation=results.find(r=>r.check==='production separation');
 const required=results.find(r=>r.check==='required files');
 if(pageFailures.length||!menu||menu.before!=='false'||menu.after!=='true'||menu.afterEscape!=='false'||!String(menu.focused).includes('menu-toggle')||separation.proposalTerms.length||separation.proposalLink||required.files.some(f=>!f.exists||!f.bytes)) throw new Error('Build verification failed; inspect screenshots/verification.json');
 await browser.close();
})();
