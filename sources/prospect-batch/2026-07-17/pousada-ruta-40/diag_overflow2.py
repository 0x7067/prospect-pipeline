#!/usr/bin/env python3
import os, asyncio, http.server, socketserver, threading
from playwright.async_api import async_playwright
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'

class ReusableServer(socketserver.TCPServer):
    allow_reuse_address = True

BASE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40'
PORT = 8771
os.chdir(BASE_DIR)
httpd = ReusableServer(('127.0.0.1', PORT), http.server.SimpleHTTPRequestHandler)
t = threading.Thread(target=httpd.serve_forever, daemon=True)
t.start()

async def main():
    async with async_playwright() as pw:
        # Test with a context where we can set DPR
        context = await pw.chromium.launch(headless=True)
        browser = await context.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1)
        page = await browser.new_page()
        await page.goto(f'http://127.0.0.1:{PORT}/index.html', wait_until='networkidle', timeout=30000)
        await page.screenshot(path=os.path.join(BASE_DIR, 'assets', 'verification', 'diag_mobile.png'), full_page=True)
        info = await page.evaluate('''() => {
            const widths = [];
            document.querySelectorAll('body *').forEach(el => {
                if (el.scrollWidth > 390) widths.push([el.tagName, el.id, el.className, el.scrollWidth]);
            });
            widths.sort((a,b)=>b[3]-a[3]);
            return {
                innerWidth: window.innerWidth,
                dpr: window.devicePixelRatio,
                bodyScrollW: document.body.scrollWidth,
                htmlScrollW: document.documentElement.scrollWidth,
                top: widths.slice(0, 10)
            };
        }''')
        print(info)
        await browser.close()
    httpd.shutdown()

asyncio.run(main())
