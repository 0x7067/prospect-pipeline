#!/usr/bin/env python3
import os, asyncio, http.server, socketserver, threading
from playwright.async_api import async_playwright
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'
class ReusableServer(socketserver.TCPServer): allow_reuse_address = True
BASE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40'
PORT = 8774
os.chdir(BASE_DIR)
httpd = ReusableServer(('127.0.0.1', PORT), http.server.SimpleHTTPRequestHandler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        ctx = await browser.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=1)
        page = await ctx.new_page()
        await page.goto(f'http://127.0.0.1:{PORT}/index.html', wait_until='networkidle', timeout=30000)
        path = os.path.join(BASE_DIR, 'assets', 'verification', 'test_mobile.png')
        await page.screenshot(path=path, full_page=True)
        from PIL import Image
        print('screenshot size', Image.open(path).size)
        print(await page.evaluate('() => ({iw: window.innerWidth, dpr: window.devicePixelRatio, bodyW: document.body.scrollWidth, navW: document.querySelector(".main-nav")?.getBoundingClientRect().width})'))
        await browser.close()
    httpd.shutdown()

asyncio.run(main())
