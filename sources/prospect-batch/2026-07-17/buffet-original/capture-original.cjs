const { chromium } = require('playwright');
const fs = require('fs');
(async()=>{
 const browser=await chromium.launch({headless:true});
 for (const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]) {
  const page=await browser.newPage({viewport:{width,height}, deviceScaleFactor:1});
  const errors=[]; page.on('console',m=>{if(m.type()==='error') errors.push('console:'+m.text())}); page.on('pageerror',e=>errors.push('pageerror:'+e.message)); page.on('requestfailed',r=>errors.push('requestfailed:'+r.url()+' '+r.failure()?.errorText));
  await page.goto('https://www.buffetoriginal.com.br/',{waitUntil:'networkidle',timeout:60000}).catch(e=>errors.push('goto:'+e.message));
  await page.waitForTimeout(5000);
  await page.screenshot({path:`screenshots/original/original-${name}-1440x900.png`,fullPage:false});
  await page.screenshot({path:`screenshots/original/original-${name}-full.png`,fullPage:true});
  fs.writeFileSync(`screenshots/original/original-${name}-errors.txt`,errors.join('\n'));
  await page.close();
 }
 await browser.close();
})();
