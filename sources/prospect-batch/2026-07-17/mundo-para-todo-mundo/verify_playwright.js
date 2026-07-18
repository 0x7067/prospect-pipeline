const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const base = process.env.BASE_URL || 'http://127.0.0.1:4173';
const root = __dirname;
const results = { testedAt: new Date().toISOString(), base, viewports: {}, separation: {}, files: {} };
let browser;
function assert(condition, message) { if (!condition) throw new Error(message); }
async function inspect(name, url, viewport) {
  const page = await browser.newPage({ viewport });
  const errors = { console: [], page: [], requests: [] };
  page.on('console', m => { if (m.type() === 'error') errors.console.push(m.text()); });
  page.on('pageerror', e => errors.page.push(String(e)));
  page.on('requestfailed', r => errors.requests.push(`${r.url()} :: ${r.failure()?.errorText || 'failed'}`));
  const response = await page.goto(`${base}${url}`, { waitUntil: 'networkidle' });
  assert(response && response.ok(), `${name}: HTTP ${response?.status()}`);
  const overflow = await page.evaluate(() => ({ innerWidth: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
  assert(overflow.scrollWidth <= overflow.innerWidth + 1, `${name}: horizontal overflow ${JSON.stringify(overflow)}`);
  const anchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => ({ href: a.getAttribute('href'), exists: a.getAttribute('href') === '#' || !!document.querySelector(a.getAttribute('href')) })));
  assert(anchors.every(a => a.exists), `${name}: broken anchor ${JSON.stringify(anchors)}`);
  const locals = await page.locator('img[src],link[href^="assets/"],script[src^="assets/"]').evaluateAll(els => els.map(e => e.getAttribute('src') || e.getAttribute('href')));
  for (const asset of locals) { const r = await page.request.get(`${base}/${asset}`); assert(r.ok(), `${name}: local asset ${asset} returned ${r.status()}`); }
  if (name === 'home-mobile') {
    const toggle = page.locator('.menu-toggle');
    await toggle.focus();
    await page.keyboard.press('Enter');
    assert(await toggle.getAttribute('aria-expanded') === 'true', 'menu did not open via keyboard');
    assert(await page.locator('#primary-nav').getAttribute('class').then(c => c.includes('is-open')), 'menu has no open state');
    await page.keyboard.press('Escape');
    assert(await toggle.getAttribute('aria-expanded') === 'false', 'menu did not close with Escape');
    await toggle.focus();
    assert(await page.evaluate(() => document.activeElement?.classList.contains('menu-toggle')), 'menu toggle is not focusable');
  }
  const screenshot = `evidence/proposed/${name}.png`;
  await page.screenshot({ path: path.join(root, screenshot), fullPage: true });
  results.viewports[name] = { viewport, status: response.status(), overflow, anchors: anchors.length, localAssets: locals.length, errors, screenshot };
  assert(!errors.console.length && !errors.page.length && !errors.requests.length, `${name}: runtime errors ${JSON.stringify(errors)}`);
  await page.close();
}
(async () => {
  browser = await chromium.launch({ headless: true });
  await inspect('home-desktop', '/', { width: 1440, height: 900 });
  await inspect('home-mobile', '/', { width: 390, height: 844 });
  const proposal = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const proposalErrors = { console: [], page: [], requests: [] };
  proposal.on('console', m => { if (m.type() === 'error') proposalErrors.console.push(m.text()); });
  proposal.on('pageerror', e => proposalErrors.page.push(String(e)));
  proposal.on('requestfailed', r => proposalErrors.requests.push(`${r.url()} :: ${r.failure()?.errorText || 'failed'}`));
  const pResponse = await proposal.goto(`${base}/proposal.html`, { waitUntil: 'networkidle' });
  assert(pResponse && pResponse.ok(), `proposal: HTTP ${pResponse?.status()}`);
  const proposalOverflow = await proposal.evaluate(() => ({ innerWidth: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
  assert(proposalOverflow.scrollWidth <= proposalOverflow.innerWidth + 1, `proposal: horizontal overflow ${JSON.stringify(proposalOverflow)}`);
  const proposalLocals = await proposal.locator('img[src],link[href^="assets/"],script[src^="assets/"]').evaluateAll(els => els.map(e => e.getAttribute('src') || e.getAttribute('href')));
  for (const asset of proposalLocals) { const r = await proposal.request.get(`${base}/${asset}`); assert(r.ok(), `proposal: local asset ${asset} returned ${r.status()}`); }
  assert(await proposal.locator('meta[name="robots"]').getAttribute('content') === 'noindex, nofollow', 'proposal missing strict noindex');
  assert(!proposalErrors.console.length && !proposalErrors.page.length && !proposalErrors.requests.length, `proposal: runtime errors ${JSON.stringify(proposalErrors)}`);
  results.separation.proposalNoindex = true;
  results.separation.proposal = { status: pResponse.status(), overflow: proposalOverflow, localAssets: proposalLocals.length, errors: proposalErrors };
  await proposal.close();
  const production = fs.readFileSync(path.join(root, 'index.html'), 'utf8').toLowerCase();
  const forbidden = ['proposal.html', 'redesign', 'conceito independente', 'não é um canal oficial', 'não é um canal'];
  results.separation.forbiddenProductionStrings = forbidden.filter(x => production.includes(x));
  assert(!results.separation.forbiddenProductionStrings.length, `production leaks proposal language: ${results.separation.forbiddenProductionStrings}`);
  assert(!production.includes('proposal.html'), 'production links to proposal');
  for (const file of ['index.html', 'proposal.html', 'styles.css', 'script.js', 'SOURCE_MANIFEST.md', 'BUILD_REPORT.md', 'verify_playwright.js']) {
    const full = path.join(root, file); assert(fs.existsSync(full), `missing required file ${file}`); results.files[file] = fs.statSync(full).size;
  }
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch(async err => { console.error(err.stack || err); if (browser) await browser.close(); process.exit(1); });
