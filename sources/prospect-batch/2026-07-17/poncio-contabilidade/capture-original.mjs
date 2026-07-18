import { chromium } from 'playwright';
const browser = await chromium.launch({headless:true});
for (const cfg of [
  {name:'desktop', width:1440, height:900},
  {name:'mobile', width:390, height:844},
]) {
  const page = await browser.newPage({viewport:{width:cfg.width,height:cfg.height}, deviceScaleFactor:1});
  await page.goto('https://ponciocontabilidade.com.br/', {waitUntil:'networkidle', timeout:60000});
  await page.waitForTimeout(2500);
  await page.screenshot({path:`evidence/original/original-${cfg.name}-${cfg.width}x${cfg.height}.png`, fullPage:true});
  await page.screenshot({path:`evidence/original/original-${cfg.name}-viewport-${cfg.width}x${cfg.height}.png`, fullPage:false});
  console.log(cfg.name, await page.title(), await page.evaluate(() => ({scrollWidth:document.documentElement.scrollWidth, innerWidth})), page.url());
  await page.close();
}
await browser.close();
