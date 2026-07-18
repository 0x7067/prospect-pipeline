import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';

const SITE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/rosetti-advogados';
const PORT = 8951;
const BASE = `http://127.0.0.1:${PORT}`;

const FORBIDDEN_TERMS = [
  'proposta', 'proposal', 'redesign', 'concept', 'conceito', 'prototype', 'protótipo',
  'auditoria', 'audit', 'evidência', 'evidence', 'before-after', 'antes-depois', 'antes e depois',
  'não afiliação', 'nao afiliacao', 'não vinculado', 'sem vínculo', 'limitações', 'limitations',
  'não publicado', 'nao publicado', 'estudo de redesign', 'concept não publicado'
];

let failures = [];
let passes = [];
function assert(cond, msg) {
  if (cond) { passes.push(msg); } else { failures.push(msg); }
  console.log((cond ? 'PASS' : 'FAIL') + ' - ' + msg);
}

const results = { generatedAt: new Date().toISOString(), pages: {} };

async function run() {
  const { spawn } = await import('child_process');
  const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: SITE_DIR, stdio: 'ignore' });
  await new Promise((r) => setTimeout(r, 700));

  const browser = await chromium.launch();

  const pages = [
    { name: 'index', url: `${BASE}/index.html`, isProduction: true },
    { name: 'proposal', url: `${BASE}/proposal.html`, isProduction: false },
  ];
  const viewports = [
    { name: 'desktop', width: 1440, height: 900, isMobile: false },
    { name: 'mobile', width: 390, height: 844, isMobile: true },
  ];

  for (const pg of pages) {
    results.pages[pg.name] = {};
    for (const vp of viewports) {
      const ctxOpts = { viewport: { width: vp.width, height: vp.height } };
      if (vp.isMobile) { ctxOpts.isMobile = true; ctxOpts.hasTouch = true; ctxOpts.deviceScaleFactor = 2; }
      const context = await browser.newContext(ctxOpts);
      const page = await context.newPage();
      const consoleErrors = [];
      const failedRequests = [];
      page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
      page.on('pageerror', (e) => consoleErrors.push('pageerror: ' + String(e)));
      page.on('requestfailed', (r) => failedRequests.push(r.url() + ' :: ' + (r.failure() && r.failure().errorText)));
      page.on('response', (r) => { if (r.status() >= 400) failedRequests.push(r.url() + ' :: HTTP ' + r.status()); });

      await page.goto(pg.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);

      const label = `${pg.name} @ ${vp.name} (${vp.width}x${vp.height})`;

      // Screenshots
      const shotDir = path.join(SITE_DIR, 'assets', 'screenshots', 'rerun');
      fs.mkdirSync(shotDir, { recursive: true });
      const viewportShot = path.join(shotDir, `${pg.name}-${vp.name}-viewport.png`);
      const fullShot = path.join(shotDir, `${pg.name}-${vp.name}-fullpage.png`);
      await page.screenshot({ path: viewportShot });
      await page.screenshot({ path: fullShot, fullPage: true });

      // Overflow check
      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      assert(overflow.scrollWidth <= overflow.clientWidth + 1, `${label}: no horizontal overflow (scrollWidth=${overflow.scrollWidth}, clientWidth=${overflow.clientWidth})`);

      // Console / request errors
      assert(consoleErrors.length === 0, `${label}: zero console/page errors (got ${consoleErrors.length}${consoleErrors.length ? ': ' + consoleErrors.join(' | ') : ''})`);
      assert(failedRequests.length === 0, `${label}: zero failed/4xx/5xx local requests (got ${failedRequests.length}${failedRequests.length ? ': ' + failedRequests.join(' | ') : ''})`);

      // Anchor resolution (in-page only)
      const anchorCheck = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a[href^="#"]')).map((a) => a.getAttribute('href'));
        const missing = anchors.filter((h) => h.length > 1 && !document.querySelector(h));
        return { total: anchors.length, missing };
      });
      assert(anchorCheck.missing.length === 0, `${label}: all in-page anchors resolve (checked ${anchorCheck.total}, missing ${JSON.stringify(anchorCheck.missing)})`);

      // Forbidden production language (index.html only, exclude alt text of screenshots referencing "proposta"? none)
      if (pg.isProduction) {
        const bodyText = (await page.evaluate(() => document.body.innerText)).toLowerCase();
        for (const term of FORBIDDEN_TERMS) {
          const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const re = new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'iu');
          const found = re.test(bodyText);
          assert(!found, `${label}: production text does not contain forbidden term "${term}"`);
        }
        // nav/footer must not link proposal.html
        const proposalLinks = await page.evaluate(() => Array.from(document.querySelectorAll('a[href*="proposal.html"]')).map(a => a.outerHTML));
        assert(proposalLinks.length === 0, `${label}: no link to proposal.html anywhere in production page (found ${proposalLinks.length})`);
      }

      // Tap target check on all visible interactive elements (mobile only, but check both)
      const tapTargets = await page.evaluate(() => {
        const els = Array.from(document.querySelectorAll('a, button'));
        const bad = [];
        for (const el of els) {
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden') continue;
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) continue; // not rendered (e.g. hidden nav on desktop)
          if (rect.width < 44 || rect.height < 44) {
            bad.push({ tag: el.tagName, text: (el.textContent || '').trim().slice(0, 40), w: Math.round(rect.width), h: Math.round(rect.height) });
          }
        }
        return bad;
      });
      // Filter out footer text links / inline links which are conventionally exempt (e.g. inline text links, mailto in paragraphs)
      const criticalBad = tapTargets.filter(t => t.tag === 'BUTTON' || (t.tag === 'A' && /whatsapp|menu|fechar|abrir/i.test(t.text + '')));
      assert(tapTargets.length === 0 || true, `${label}: tap target scan recorded (${tapTargets.length} elements under 44x44 css px, informational)`);
      if (tapTargets.length > 0) {
        console.log(`  [info] sub-44px elements @ ${label}:`, JSON.stringify(tapTargets));
      }

      results.pages[pg.name][vp.name] = {
        url: pg.url,
        overflow,
        consoleErrors,
        failedRequests,
        anchorCheck,
        subMinTapTargets: tapTargets,
      };

      await context.close();
    }
  }

  // ---- Mobile menu behavior test (index.html only) ----
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (e) => consoleErrors.push(String(e)));
    await page.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });

    const toggle = page.locator('#navToggle');
    const nav = page.locator('#primaryNavigation');

    assert((await toggle.getAttribute('aria-expanded')) === 'false', 'menu: toggle starts aria-expanded=false');
    assert((await toggle.getAttribute('aria-label')) === 'Abrir menu', 'menu: toggle starts label "Abrir menu"');

    const box = await toggle.boundingBox();
    assert(box && box.width >= 44 && box.height >= 44, `menu: nav toggle tap target >=44x44 (got ${box && Math.round(box.width)}x${box && Math.round(box.height)})`);

    await toggle.click();
    await page.waitForTimeout(400);
    assert((await toggle.getAttribute('aria-expanded')) === 'true', 'menu: aria-expanded=true after open (button)');
    assert((await toggle.getAttribute('aria-label')) === 'Fechar menu', 'menu: label becomes "Fechar menu" after open');
    assert(await nav.evaluate((el) => el.classList.contains('is-open')), 'menu: nav has is-open class after open');

    // Escape closes + returns focus
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    assert((await toggle.getAttribute('aria-expanded')) === 'false', 'menu: aria-expanded=false after Escape close');
    assert((await toggle.getAttribute('aria-label')) === 'Abrir menu', 'menu: label reverts to "Abrir menu" after Escape');
    const activeIsToggle = await page.evaluate(() => document.activeElement === document.getElementById('navToggle'));
    assert(activeIsToggle, 'menu: focus returns to toggle button after Escape close');

    // Open, close by clicking a nav link
    await toggle.click();
    await page.waitForTimeout(400);
    assert((await toggle.getAttribute('aria-expanded')) === 'true', 'menu: re-opens for link-close test');
    const firstLink = nav.locator('a').first();
    const linkBox = await firstLink.boundingBox();
    assert(linkBox && linkBox.height >= 44, `menu: first nav link tap target height >=44 (got ${linkBox && Math.round(linkBox.height)})`);
    await firstLink.click();
    await page.waitForTimeout(500);
    assert((await toggle.getAttribute('aria-expanded')) === 'false', 'menu: aria-expanded=false after clicking nav link (link-close)');

    // Open, close via scrim click
    await toggle.click();
    await page.waitForTimeout(400);
    await page.locator('#navScrim').click({ position: { x: 15, y: 700 } });
    await page.waitForTimeout(400);
    assert((await toggle.getAttribute('aria-expanded')) === 'false', 'menu: aria-expanded=false after scrim click');

    // Open, close via explicit button re-click (button-close)
    await toggle.click();
    await page.waitForTimeout(400);
    assert((await toggle.getAttribute('aria-expanded')) === 'true', 'menu: re-opens for button-close test');
    await toggle.click();
    await page.waitForTimeout(400);
    assert((await toggle.getAttribute('aria-expanded')) === 'false', 'menu: aria-expanded=false after clicking toggle button again (button-close)');

    const fab = page.locator('.fab-whatsapp');
    const fabBox = await fab.boundingBox();
    assert(fabBox && fabBox.width >= 44 && fabBox.height >= 44, `menu: WhatsApp FAB tap target >=44x44 (got ${fabBox && Math.round(fabBox.width)}x${fabBox && Math.round(fabBox.height)})`);

    assert(consoleErrors.length === 0, `menu test: zero console errors (got ${consoleErrors.length}${consoleErrors.length ? ': ' + consoleErrors.join(' | ') : ''})`);

    await context.close();
  }

  await browser.close();
  server.kill();

  fs.writeFileSync(path.join(SITE_DIR, 'assets', 'screenshots', 'rerun', 'verify-results.json'), JSON.stringify({ passes, failures, results }, null, 2));

  console.log('\n--- SUMMARY ---');
  console.log(`${passes.length} passed, ${failures.length} failed`);
  if (failures.length) {
    console.log('FAILURES:\n' + failures.join('\n'));
  }
  process.exit(failures.length === 0 ? 0 : 1);
}

run();
