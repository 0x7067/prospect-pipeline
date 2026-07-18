const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:8099';
const OUT = path.join(__dirname);
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const pages = ['index.html', 'proposal.html'];

function req(page, url) {
  return url.startsWith(BASE) || url.startsWith('data:') || url.startsWith('blob:');
}

(async () => {
  const browser = await chromium.launch();
  const report = { generatedAt: new Date().toISOString(), pages: [], mobileMenu: {}, anchors: {}, tapTargets: {} };

  for (const pg of pages) {
    for (const vp of viewports) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];
      page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
      page.on('pageerror', (err) => pageErrors.push(String(err)));
      page.on('requestfailed', (r) => failedRequests.push({ url: r.url(), failure: r.failure() && r.failure().errorText }));
      page.on('response', (resp) => { if (resp.status() >= 400) failedRequests.push({ url: resp.url(), status: resp.status() }); });

      const resp = await page.goto(`${BASE}/${pg}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      const overflow = scrollWidth > clientWidth + 1; // 1px tolerance

      // viewport screenshot
      const vpShot = path.join(OUT, `${pg.replace('.html','')}-${vp.name}-viewport.png`);
      await page.screenshot({ path: vpShot, fullPage: false });
      // full page screenshot
      const fullShot = path.join(OUT, `${pg.replace('.html','')}-${vp.name}-full.png`);
      await page.screenshot({ path: fullShot, fullPage: true });

      report.pages.push({
        page: pg,
        viewport: vp.name,
        width: vp.width,
        height: vp.height,
        httpStatus: resp && resp.status(),
        scrollWidth,
        clientWidth,
        overflow,
        consoleErrors,
        pageErrors,
        failedRequests,
        viewportScreenshot: vpShot,
        fullPageScreenshot: fullShot,
      });

      await context.close();
    }
  }

  // ---- Mobile menu behavior test on index.html at 390x844 ----
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    await page.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });

    const toggle = page.locator('#menuToggle');
    const initialAriaExpanded = await toggle.getAttribute('aria-expanded');
    const initialAriaLabel = await toggle.getAttribute('aria-label');
    const toggleBox = await toggle.boundingBox();

    // open via button click
    await toggle.click();
    await page.waitForTimeout(200);
    const afterOpenAriaExpanded = await toggle.getAttribute('aria-expanded');
    const afterOpenAriaLabel = await toggle.getAttribute('aria-label');
    const panel = page.locator('#mobileNav .mobile-nav__panel');
    const panelVisible = await panel.isVisible().catch(() => false);

    // tap target sizes for all nav links + toggle
    const navLinks = await page.locator('#mobileNav [data-nav-link]').all();
    const navLinkBoxes = [];
    for (const l of navLinks) {
      const box = await l.boundingBox();
      if (box) navLinkBoxes.push(box);
    }

    // First test Escape close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    const afterEscapeAriaExpanded = await toggle.getAttribute('aria-expanded');
    const afterEscapeAriaLabel = await toggle.getAttribute('aria-label');
    const focusAfterEscape = await page.evaluate(() => document.activeElement && (document.activeElement.id || document.activeElement.className));

    // re-open, then close via clicking a nav link
    await toggle.click();
    await page.waitForTimeout(200);
    const linkToClick = page.locator('#mobileNav [data-nav-link]').first();
    await linkToClick.click();
    await page.waitForTimeout(200);
    const afterLinkClickAriaExpanded = await toggle.getAttribute('aria-expanded');

    // re-open, then close via explicit close button
    await toggle.click();
    await page.waitForTimeout(200);
    const closeBtn = page.locator('#menuClose');
    const hasCloseBtn = await closeBtn.count();
    let closeBox = null;
    if (hasCloseBtn) {
      closeBox = await closeBtn.boundingBox();
      await closeBtn.click();
    } else {
      closeBox = await toggle.boundingBox();
      await toggle.click();
    }
    await page.waitForTimeout(200);
    const afterCloseAriaExpanded = await toggle.getAttribute('aria-expanded');
    const afterCloseAriaLabel = await toggle.getAttribute('aria-label');

    report.mobileMenu = {
      initialAriaExpanded, initialAriaLabel, toggleBox,
      afterOpenAriaExpanded, afterOpenAriaLabel, panelVisible,
      navLinkCount: navLinkBoxes.length, navLinkBoxes,
      afterEscapeAriaExpanded, afterEscapeAriaLabel, focusAfterEscape,
      afterLinkClickAriaExpanded,
      hasDistinctCloseButton: !!hasCloseBtn,
      closeBox,
      afterCloseAriaExpanded, afterCloseAriaLabel,
      consoleErrors,
    };

    // tap target adequacy check (>=44x44)
    const smallTargets = navLinkBoxes.filter(b => b.width < 44 || b.height < 44);
    const toggleAdequate = toggleBox ? (toggleBox.width >= 44 && toggleBox.height >= 44) : null;
    report.tapTargets = { toggleBox, toggleAdequate, smallNavLinkTargets: smallTargets };

    await context.close();
  }

  // ---- anchors + images check on index.html desktop ----
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    const failedImgs = [];
    page.on('response', async (resp) => {
      const req = resp.request();
      if (req.resourceType() === 'image' && resp.status() >= 400) failedImgs.push({ url: resp.url(), status: resp.status() });
    });
    await page.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });

    const hrefs = await page.$$eval('a[href^="#"]', as => as.map(a => a.getAttribute('href')));
    const missing = [];
    for (const h of hrefs) {
      if (h === '#') continue;
      const exists = await page.$(h);
      if (!exists) missing.push(h);
    }
    const imgs = await page.$$eval('img', els => els.map(e => ({ src: e.getAttribute('src'), alt: e.getAttribute('alt'), naturalWidth: e.naturalWidth })));
    const brokenImgs = imgs.filter(i => i.naturalWidth === 0);
    const missingAlt = imgs.filter(i => !i.alt || i.alt.trim() === '');

    report.anchors = { localAnchors: hrefs, missing, imgCount: imgs.length, brokenImgs, missingAlt, failedImgRequests: failedImgs };
    await context.close();
  }

  // ---- proposal.html anchors + images ----
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/proposal.html`, { waitUntil: 'networkidle' });
    const hrefs = await page.$$eval('a[href^="#"]', as => as.map(a => a.getAttribute('href')));
    const missing = [];
    for (const h of hrefs) {
      if (h === '#') continue;
      const exists = await page.$(h);
      if (!exists) missing.push(h);
    }
    const imgs = await page.$$eval('img', els => els.map(e => ({ src: e.getAttribute('src'), alt: e.getAttribute('alt'), naturalWidth: e.naturalWidth })));
    const brokenImgs = imgs.filter(i => i.naturalWidth === 0);
    const missingAlt = imgs.filter(i => !i.alt || i.alt.trim() === '');
    report.proposalAnchors = { localAnchors: hrefs, missing, imgCount: imgs.length, brokenImgs, missingAlt };
    await context.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log('DONE');
  console.log(JSON.stringify({
    overflowAny: report.pages.some(p => p.overflow),
    consoleErrorsAny: report.pages.some(p => p.consoleErrors.length),
    pageErrorsAny: report.pages.some(p => p.pageErrors.length),
    failedRequestsAny: report.pages.some(p => p.failedRequests.length),
  }, null, 2));
})().catch(e => { console.error(e); process.exit(1); });
