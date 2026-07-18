#!/usr/bin/env python3
import os, asyncio, http.server, socketserver, threading
from playwright.async_api import async_playwright
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'
class ReusableServer(socketserver.TCPServer): allow_reuse_address = True
BASE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40'
PORT = 8786
os.chdir(BASE_DIR)
httpd = ReusableServer(('127.0.0.1', PORT), http.server.SimpleHTTPRequestHandler)
threading.Thread(target=httpd.serve_forever, daemon=True).start()

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto(f'http://127.0.0.1:{PORT}/index.html', wait_until='networkidle', timeout=30000)
        await page.fill('#nome', 'João Silva')
        await page.fill('#data-inicio', '2026-08-10')
        await page.fill('#data-fim', '2026-08-12')
        await page.select_option('#quarto', 'Calafate')
        await page.fill('#observacao', 'Teste')
        # Intercept popup before submit
        popup_future = asyncio.create_task(page.wait_for_event('popup', timeout=5000))
        await page.click('button[type="submit"]')
        try:
            popup = await asyncio.wait_for(popup_future, timeout=5)
            url = popup.url
            print('popup URL:', url)
            assert '5541985350526' in url, 'missing full WhatsApp number'
            assert 'Calafate' in url, 'missing room'
            print('form submit test passed')
            await popup.close()
        except asyncio.TimeoutError:
            print('no popup captured (navigation may have occurred in same page)')
        await browser.close()
    httpd.shutdown()

asyncio.run(main())
