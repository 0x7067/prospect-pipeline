#!/usr/bin/env python3
import os, asyncio, sys
from playwright.async_api import async_playwright
os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'
OUT = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/assets/original_evidence'
BASE = 'https://pousadaruta40.com.br/'

async def snap(pw, url, name, vp, fullpage=False):
    browser = await pw.chromium.launch(headless=True)
    page = await browser.new_page(viewport=vp)
    try:
        await page.goto(url, wait_until='networkidle', timeout=30000)
    except Exception as e:
        print(f'goto warn {name}: {e}')
    await page.screenshot(path=os.path.join(OUT, name), full_page=fullpage)
    await browser.close()
    print('saved', name)

async def main():
    async with async_playwright() as pw:
        await snap(pw, BASE, 'original_home_desktop_1440x900.png', {'width':1440,'height':900}, fullpage=True)
        await snap(pw, BASE, 'original_home_mobile_390x844.png', {'width':390,'height':844}, fullpage=True)
        await snap(pw, BASE + 'contato', 'original_contato_desktop_1440x900.png', {'width':1440,'height':900}, fullpage=True)

asyncio.run(main())
