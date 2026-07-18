const { chromium } = require("/opt/data/lib/node_modules/agent-afk/node_modules/playwright-core");
const path = require("path");

const BASE = "http://127.0.0.1:8099";
const OUT = path.join(__dirname, "verification");
const fs = require("fs");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const pages = ["index.html", "proposal.html"];

(async () => {
  const browser = await chromium.launch();
  const report = {};

  for (const pg of pages) {
    report[pg] = {};
    for (const vp of viewports) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();
      const consoleErrors = [];
      const failedRequests = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("requestfailed", (req) => {
        failedRequests.push(req.url() + " :: " + (req.failure()?.errorText || ""));
      });
      page.on("response", (res) => {
        if (res.status() >= 400) {
          failedRequests.push(res.url() + " :: HTTP " + res.status());
        }
      });

      const url = `${BASE}/${pg}`;
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(300);

      // overflow check
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        return { docWidth, winWidth, overflowing: docWidth > winWidth + 1 };
      });

      const shot = path.join(OUT, `${pg.replace(".html", "")}-${vp.name}.png`);
      await page.screenshot({ path: shot, fullPage: true });

      report[pg][vp.name] = {
        url,
        viewport: vp,
        consoleErrors,
        failedRequests,
        overflow,
        screenshot: shot,
      };

      await context.close();
    }
  }

  // --- mobile menu behavior test (index.html, mobile viewport) ---
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/index.html`, { waitUntil: "networkidle" });

    const menuToggle = page.locator("#menu-toggle");
    const beforeLabel = await menuToggle.getAttribute("aria-label");
    const beforeExpanded = await menuToggle.getAttribute("aria-expanded");

    await menuToggle.click();
    await page.waitForTimeout(250);
    const openLabel = await menuToggle.getAttribute("aria-label");
    const openExpanded = await menuToggle.getAttribute("aria-expanded");
    const navOpenAttr = await page.locator("#main-nav").getAttribute("data-open");
    await page.screenshot({ path: path.join(OUT, "index-mobile-menu-open.png"), fullPage: false });

    // tap target size check for a few key controls
    const toggleBox = await menuToggle.boundingBox();

    // Escape closes
    await page.keyboard.press("Escape");
    await page.waitForTimeout(250);
    const afterEscLabel = await menuToggle.getAttribute("aria-label");
    const afterEscExpanded = await menuToggle.getAttribute("aria-expanded");
    const navOpenAfterEsc = await page.locator("#main-nav").getAttribute("data-open");

    // reopen then close via nav link click
    await menuToggle.click();
    await page.waitForTimeout(200);
    await page.locator('#main-nav a[href="#contato"]').click();
    await page.waitForTimeout(250);
    const afterLinkExpanded = await menuToggle.getAttribute("aria-expanded");
    const navOpenAfterLink = await page.locator("#main-nav").getAttribute("data-open");

    // submenu toggle test
    await menuToggle.click(); // reopen
    await page.waitForTimeout(200);
    const subToggle = page.locator("#nav-sobre .submenu-toggle");
    const subBefore = await subToggle.getAttribute("aria-expanded");
    await subToggle.click();
    await page.waitForTimeout(200);
    const subAfter = await subToggle.getAttribute("aria-expanded");
    const subOpenAttr = await page.locator("#nav-sobre").getAttribute("data-sub-open");

    report["mobile-menu-behavior"] = {
      beforeLabel,
      beforeExpanded,
      openLabel,
      openExpanded,
      navOpenAttr,
      toggleBox,
      afterEscLabel,
      afterEscExpanded,
      navOpenAfterEsc,
      afterLinkExpanded,
      navOpenAfterLink,
      subBefore,
      subAfter,
      subOpenAttr,
    };

    await context.close();
  }

  // --- tap target audit (mobile viewport, index.html) ---
  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/index.html`, { waitUntil: "networkidle" });
    const targets = await page.evaluate(() => {
      const sel = 'a.btn, button, .float-whatsapp, .menu-toggle, .submenu-toggle, .main-nav a';
      return Array.from(document.querySelectorAll(sel)).map((el) => {
        const r = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 40),
          w: Math.round(r.width),
          h: Math.round(r.height),
          visible: r.width > 0 && r.height > 0,
        };
      });
    });
    report["tap-targets-mobile"] = targets;
    await context.close();
  }

  // --- link/anchor resolution audit on index.html (desktop) ---
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(`${BASE}/index.html`, { waitUntil: "networkidle" });
    const hrefs = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a[href]")).map((a) => a.getAttribute("href"));
    });
    const localAnchors = hrefs.filter((h) => h && h.startsWith("#"));
    const missing = [];
    for (const h of localAnchors) {
      const id = h.slice(1);
      if (!id) continue;
      const exists = await page.evaluate((id) => !!document.getElementById(id), id);
      if (!exists) missing.push(h);
    }
    report["anchor-audit"] = { totalLocalAnchors: localAnchors.length, missing };
    await context.close();
  }

  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));

  await browser.close();
})().catch((e) => {
  console.error("VERIFY_FAILED", e);
  process.exit(1);
});
