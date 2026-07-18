const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const base = `http://127.0.0.1:${process.env.PORT || '4174'}`;
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width, height } });
    const errors = [], failed = [];
    page.on('console', m => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', e => errors.push(String(e)));
    page.on('requestfailed', r => failed.push(`${r.url()} ${r.failure()?.errorText || ''}`));
    await page.goto(`${base}/index.html`, { waitUntil: 'networkidle' });
    const checks = await page.evaluate(() => {
      const local = [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href'));
      return { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, anchors: local, missingAnchors: local.filter(h => h !== '#conteudo' && !document.querySelector(h)) };
    });
    if (name === 'mobile') {
      await page.locator('.menu-toggle').click();
      checks.menuOpen = await page.locator('.main-nav').evaluate(e => e.classList.contains('is-open'));
      checks.menuAria = await page.locator('.menu-toggle').getAttribute('aria-expanded');
      await page.keyboard.press('Escape');
      checks.menuClosed = !(await page.locator('.main-nav').evaluate(e => e.classList.contains('is-open')));
    }
    await page.screenshot({ path: `evidence-proposed-${name}-${width}x${height}.png` });
    await page.screenshot({ path: `evidence-proposed-${name}-full.png`, fullPage: true });
    results.push({ viewport: `${width}x${height}`, checks, errors, failed });
    await page.close();
  }
  const proposal = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await proposal.goto(`${base}/proposal.html`, { waitUntil: 'networkidle' });
  results.push({ proposal: { robots: await proposal.locator('meta[name="robots"]').getAttribute('content'), title: await proposal.title() } });
  await proposal.screenshot({ path: 'evidence-proposal-desktop-1440x900.png' });
  await proposal.screenshot({ path: 'evidence-proposal-full.png', fullPage: true });
  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})().catch(error => { console.error(error); process.exit(1); });
