import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { chromium } from '/opt/data/lib/node_modules/agent-afk/node_modules/playwright/index.mjs';

const root = '/opt/data/projects/curitiba-rebuilds/2026-07-17/sarnelli-arquitetura/kimi-variant';
const output = path.join(root, 'comparison');
fs.mkdirSync(output, { recursive: true });

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

function safeFilePath(rootDir, requestPath) {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const relative = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const candidate = path.resolve(rootDir, relative);
  if (candidate !== rootDir && !candidate.startsWith(rootDir + path.sep)) return null;
  return candidate;
}

function startServer(rootDir) {
  const server = http.createServer((req, res) => {
    try {
      const file = safeFilePath(rootDir, req.url || '/');
      if (!file || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
      }
      const types = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
      };
      res.writeHead(200, {
        'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-store',
      });
      fs.createReadStream(file).pipe(res);
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Server error');
    }
  });
  return new Promise((resolve, reject) => {
    const fail = (error) => {
      server.removeListener('listening', ready);
      reject(error);
    };
    const ready = () => {
      server.removeListener('error', fail);
      const address = server.address();
      resolve({ server, url: `http://127.0.0.1:${address.port}/` });
    };
    server.once('error', fail);
    server.once('listening', ready);
    server.listen(0, '127.0.0.1');
  });
}

async function settleLazyContent(page) {
  await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const max = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    for (let y = 0; y < max; y += Math.max(300, Math.floor(window.innerHeight * 0.75))) {
      window.scrollTo(0, y);
      await delay(60);
    }
    window.scrollTo(0, 0);
    await delay(150);
  });
}

async function captureOne(browser, pageName, viewportName, url, outputDir) {
  const viewport = VIEWPORTS[viewportName];
  const image = path.join(outputDir, `${pageName}-${viewportName}.png`);
  const fullImage = path.join(outputDir, `${pageName}-${viewportName}-full.png`);
  try { fs.unlinkSync(image); } catch {}
  try { fs.unlinkSync(fullImage); } catch {}
  const result = {
    page: pageName,
    viewport: viewportName,
    url,
    image: path.relative(root, image),
    fullImage: path.relative(root, fullImage),
    success: false,
    httpStatus: null,
    title: null,
    finalUrl: null,
    error: null,
    consoleErrors: [],
    pageErrors: [],
    requestFailures: [],
    horizontalOverflow: null,
  };
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: 1,
    isMobile: viewportName === 'mobile',
    hasTouch: viewportName === 'mobile',
  });
  const page = await context.newPage();
  page.setDefaultNavigationTimeout(15000);
  page.setDefaultTimeout(20000);
  page.on('console', (msg) => {
    if (msg.type() === 'error') result.consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => result.pageErrors.push(String(err)));
  page.on('requestfailed', (req) => {
    result.requestFailures.push({ url: req.url(), error: req.failure()?.errorText || 'request failed' });
  });
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    result.httpStatus = response ? response.status() : null;
    result.finalUrl = page.url();
    result.title = await page.title();
    if (!response || response.status() >= 400) {
      throw new Error(`HTTP ${result.httpStatus ?? 'no response'} loading ${url}`);
    }
    await settleLazyContent(page);
    result.horizontalOverflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    );
    await page.screenshot({ path: image, fullPage: false, timeout: 20000 });
    await page.screenshot({ path: fullImage, fullPage: true, timeout: 20000 });
    if (result.horizontalOverflow) throw new Error('horizontal overflow detected');
    if (result.consoleErrors.length || result.pageErrors.length || result.requestFailures.length) {
      throw new Error('browser errors or failed requests detected');
    }
    result.success = true;
  } catch (error) {
    result.error = String(error);
    try { result.finalUrl = page.url(); } catch {}
  } finally {
    await context.close().catch(() => {});
  }
  return result;
}

async function main() {
  const { server, url } = await startServer(root);
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const pageName of ['index', 'proposal']) {
      const pageUrl = pageName === 'index' ? url : `${url}proposal.html`;
      for (const viewportName of ['desktop', 'mobile']) {
        results.push(await captureOne(browser, pageName, viewportName, pageUrl, output));
      }
    }
  } finally {
    await browser.close().catch(() => {});
    await new Promise((resolve) => server.close(() => resolve()));
  }
  const status = {
    schema: 1,
    generatedAt: new Date().toISOString(),
    success: results.every((r) => r.success),
    results,
  };
  fs.writeFileSync(path.join(output, 'kimi-validation-status.json'), JSON.stringify(status, null, 2) + '\n');
  console.log(JSON.stringify(status, null, 2));
  process.exit(status.success ? 0 : 1);
}

main().catch((error) => {
  console.error(String(error));
  process.exit(1);
});
