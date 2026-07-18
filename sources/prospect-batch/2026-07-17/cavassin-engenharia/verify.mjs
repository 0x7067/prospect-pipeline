import { chromium } from 'playwright';
import fs from 'node:fs';

const base = 'http://127.0.0.1:4173';
const cases = [{name:'desktop', width:1440, height:900}, {name:'mobile', width:390, height:844}];
const failures = [];
const browser = await chromium.launch({headless:true});
for (const item of cases) {
  const page = await browser.newPage({viewport:{width:item.width,height:item.height}});
  const consoleErrors=[]; const requestFailures=[];
  page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('requestfailed', r => requestFailures.push(`${r.url()} :: ${r.failure()?.errorText}`));
  await page.goto(`${base}/index.html`, {waitUntil:'networkidle'});
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  const localLinks = await page.locator('a[href]').evaluateAll(as => as.map(a => a.getAttribute('href')).filter(h => h && (h.startsWith('#') || h.endsWith('.html'))));
  for (const href of localLinks) {
    if (href.startsWith('#')) {
      const exists = await page.locator(href).count();
      if (!exists) failures.push(`${item.name}: missing anchor ${href}`);
    } else {
      const response = await page.request.get(`${base}/${href}`);
      if (!response.ok()) failures.push(`${item.name}: ${href} returned ${response.status()}`);
    }
  }
  if (overflow) failures.push(`${item.name}: horizontal overflow`);
  if (consoleErrors.length) failures.push(`${item.name}: console ${consoleErrors.join(' | ')}`);
  if (requestFailures.length) failures.push(`${item.name}: requests ${requestFailures.join(' | ')}`);
  await page.screenshot({path:`verification-${item.name}.png`, fullPage:true});
  if (item.name === 'mobile') {
    const button = page.locator('.menu-toggle');
    await button.click();
    const open = await button.getAttribute('aria-expanded');
    const visible = await page.locator('#site-nav').evaluate(el => getComputedStyle(el).display !== 'none');
    if (open !== 'true' || !visible) failures.push('mobile: menu did not open');
    await page.keyboard.press('Escape');
  }
  await page.close();
}
const proposal = await browser.newPage({viewport:{width:1440,height:900}});
await proposal.goto(`${base}/proposal.html`, {waitUntil:'networkidle'});
const robots = await proposal.locator('meta[name="robots"]').getAttribute('content');
if (!robots?.includes('noindex')) failures.push('proposal: noindex missing');
await proposal.screenshot({path:'verification-proposal.png', fullPage:true});
await proposal.close();
await browser.close();
console.log(JSON.stringify({viewports:cases, proposalRobots:robots, screenshots:['verification-desktop.png','verification-mobile.png','verification-proposal.png'], failures}, null, 2));
if (failures.length) process.exit(1);
