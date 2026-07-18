#!/usr/bin/env python3
import os, asyncio, http.server, socketserver, threading
from playwright.async_api import async_playwright
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'

class ReusableServer(socketserver.TCPServer):
    allow_reuse_address = True

BASE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40'
PORT = 8770
os.chdir(BASE_DIR)
httpd = ReusableServer(('127.0.0.1', PORT), http.server.SimpleHTTPRequestHandler)
t = threading.Thread(target=httpd.serve_forever, daemon=True)
t.start()

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width':390,'height':844})
        await page.goto(f'http://127.0.0.1:{PORT}/index.html', wait_until='networkidle', timeout=30000)
        print(await page.evaluate('''() => ({
            innerWidth: window.innerWidth,
            dpr: window.devicePixelRatio,
            bodyW: document.body.scrollWidth,
            htmlW: document.documentElement.scrollWidth,
            containerW: document.querySelector('.container')?.getBoundingClientRect().width
        })'''))
        await browser.close()
    httpd.shutdown()

asyncio.run(main())
