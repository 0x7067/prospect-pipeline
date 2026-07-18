import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto('https://contabilidadecuritiba.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: `screenshots/original-${name}-viewport.png`, fullPage: false });
  await page.screenshot({ path: `screenshots/original-${name}-full.png`, fullPage: true });
  console.log(name, await page.title(), await page.evaluate(() => ({width: document.documentElement.scrollWidth, client: document.documentElement.clientWidth, height: document.documentElement.scrollHeight})));
  await page.close();
}
await browser.close();
