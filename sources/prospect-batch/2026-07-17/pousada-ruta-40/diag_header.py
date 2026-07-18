#!/usr/bin/env python3
import os, asyncio, http.server, socketserver, threading
from playwright.async_api import async_playwright
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'
class ReusableServer(socketserver.TCPServer): allow_reuse_address = True
BASE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40'
PORT = 8773
os.chdir(BASE_DIR)
httpd = ReusableServer(('127.0.0.1', PORT), http.server.SimpleHTTPRequestHandler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        context = await browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1)
        page = await context.new_page()
        await page.goto(f'http://127.0.0.1:{PORT}/index.html', wait_until='networkidle', timeout=30000)
        info = await page.evaluate('''() => {
            const header = document.querySelector('.site-header');
            const all = header.querySelectorAll('*');
            let max = 0, elName = '';
            all.forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.right > max) { max = r.right; elName = el.tagName + '.' + el.className; }
            });
            return {maxRight: max, element: elName, headerRect: header.getBoundingClientRect()};
        }''')
        print(info)
        await browser.close()
    httpd.shutdown()

asyncio.run(main())
