import { chromium } from 'playwright';
const browser = await chromium.launch({headless:true});
for (const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]) {
  const page = await browser.newPage({viewport:{width,height}});
  await page.goto('https://www.ceappr.com.br/', {waitUntil:'networkidle', timeout:90000});
  await page.waitForTimeout(2500);
  await page.screenshot({path:`evidence/original-${name}.png`, fullPage:false});
  await page.screenshot({path:`evidence/original-${name}-full.png`, fullPage:true});
  console.log(name, await page.title(), await page.evaluate(()=>({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight,viewport:innerWidth})));
  await page.close();
}
const p=await browser.newPage();
await p.goto('file://' + process.cwd() + '/assets/logo.png');
console.log('logo',await p.locator('img').evaluate(i=>({w:i.naturalWidth,h:i.naturalHeight})));
await browser.close();
