import asyncio
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.async_api import async_playwright

OUT = Path('/opt/data/projects/prospect-batch/2026-07-17/comparisons')
URL = 'https://www.institutozetola.com.br/'

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for kind, viewport in [('desktop', {'width': 1440, 'height': 900}), ('mobile', {'width': 390, 'height': 844})]:
            page = await browser.new_page(viewport=viewport, locale='pt-BR')
            try:
                await page.goto(URL, wait_until='commit', timeout=60000)
                try:
                    await page.wait_for_load_state('domcontentloaded', timeout=20000)
                except Exception:
                    pass
                await page.wait_for_timeout(8000)
                await page.evaluate('window.scrollTo(0,0)')
                await page.screenshot(path=str(OUT / f'instituto-zetola-{kind}-current.png'), full_page=False)
                print(kind, page.url, await page.title())
            finally:
                await page.close()
        await browser.close()
    font = ImageFont.load_default(size=24)
    small = ImageFont.load_default(size=18)
    for kind in ('desktop', 'mobile'):
        a = Image.open(OUT / f'instituto-zetola-{kind}-current.png').convert('RGB')
        b = Image.open(OUT / f'instituto-zetola-{kind}-proposed.png').convert('RGB')
        gap, header = 24, 86
        c = Image.new('RGB', (a.width+b.width+gap, max(a.height,b.height)+header), '#f4f1eb')
        d = ImageDraw.Draw(c)
        d.text((16,12), 'Instituto Zétola Odontologia', fill='#171717', font=font)
        d.text((16,48), 'CURRENT', fill='#5e5e5e', font=small)
        d.text((a.width+gap+16,48), 'PROPOSED', fill='#176b4d', font=small)
        c.paste(a,(0,header)); c.paste(b,(a.width+gap,header))
        c.save(OUT / f'instituto-zetola-{kind}-current-vs-proposed.jpg', quality=90, optimize=True)

asyncio.run(main())
