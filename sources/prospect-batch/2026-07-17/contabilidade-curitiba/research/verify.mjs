import { chromium } from 'playwright';
import fs from 'node:fs';

const base = 'http://127.0.0.1:4173';
const browser = await chromium.launch({ headless: true });
const results = [];

async function checkPage(file, label, width, height, shotPrefix) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const errors = [];
  const failed = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(e.message));
  page.on('requestfailed', r => failed.push(`${r.url()} :: ${r.failure()?.errorText}`));
  const response = await page.goto(`${base}/${file}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `screenshots/${shotPrefix}-viewport.png`, fullPage: false });
  await page.screenshot({ path: `screenshots/${shotPrefix}-full.png`, fullPage: true });
  const metrics = await page.evaluate(() => ({
    title: document.title,
    lang: document.documentElement.lang,
    width: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    height: document.documentElement.scrollHeight,
    images: [...document.images].map(i => ({src:i.getAttribute('src'), complete:i.complete, width:i.naturalWidth})),
    emptyH1: [...document.querySelectorAll('h1')].some(h => !h.textContent.trim()),
    localLinks: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')).filter(h => h && !/^(https?:|mailto:|tel:)/.test(h))
  }));
  for (const href of metrics.localLinks) {
    if (href.startsWith('#')) {
      if (!await page.locator(href).count()) errors.push(`Unresolved anchor ${href}`);
    } else {
      const target = new URL(href, page.url());
      const r = await page.request.get(target.href);
      if (!r.ok()) errors.push(`Broken local link ${href}: ${r.status()}`);
    }
  }
  if (metrics.images.some(i => !i.complete || i.width === 0)) errors.push('Broken image found');
  if (metrics.width !== metrics.clientWidth) errors.push(`Horizontal overflow ${metrics.width} > ${metrics.clientWidth}`);
  if (!metrics.lang) errors.push('Missing language');
  if (metrics.emptyH1) errors.push('Empty H1');
  results.push({label,status:response?.status(),...metrics,errors,failed});
  await page.close();
}

await checkPage('index.html','production desktop',1440,900,'built-desktop');
await checkPage('index.html','production mobile',390,844,'built-mobile');

const keyboardPage = await browser.newPage({viewport:{width:390,height:844}});
await keyboardPage.goto(`${base}/index.html`, {waitUntil:'networkidle'});
await keyboardPage.locator('.menu-button').focus();
await keyboardPage.keyboard.press('Enter');
const opened = await keyboardPage.locator('.menu-button').getAttribute('aria-expanded');
const displayed = await keyboardPage.locator('.main-nav').evaluate(el => getComputedStyle(el).display !== 'none');
await keyboardPage.screenshot({path:'screenshots/built-mobile-menu-open.png'});
await keyboardPage.keyboard.press('Escape');
const closed = await keyboardPage.locator('.menu-button').getAttribute('aria-expanded');
const focusReturned = await keyboardPage.locator('.menu-button').evaluate(el => document.activeElement === el);
results.push({label:'mobile menu keyboard',opened,displayed,closed,focusReturned,errors:(opened==='true'&&displayed&&closed==='false'&&focusReturned)?[]:['Menu keyboard/state failure']});
await keyboardPage.close();

await checkPage('proposal.html','proposal desktop',1440,900,'proposal-desktop');
await checkPage('proposal.html','proposal mobile',390,844,'proposal-mobile');

await browser.close();
fs.writeFileSync('research/verification-results.json', JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
if (results.some(r => r.status && r.status !== 200 || r.errors?.length || r.failed?.length)) process.exit(1);
