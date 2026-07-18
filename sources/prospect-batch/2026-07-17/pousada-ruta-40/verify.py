#!/usr/bin/env python3
import os, asyncio, http.server, socketserver, threading
from playwright.async_api import async_playwright

os.environ['PLAYWRIGHT_BROWSERS_PATH'] = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40/.playwright'
BASE_DIR = '/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40'
OUT = os.path.join(BASE_DIR, 'assets', 'verification')
os.makedirs(OUT, exist_ok=True)

errors = []

def start_server():
    os.chdir(BASE_DIR)
    socketserver.TCPServer.allow_reuse_address = True
    handler = http.server.SimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(('127.0.0.1', 8765), handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd

async def capture(pw, path, name, vp, fullpage=False):
    browser = await pw.chromium.launch(headless=True)
    page = await browser.new_page(viewport={'width': vp['width'], 'height': vp['height'], 'deviceScaleFactor': 1})
    page.on('pageerror', lambda e: errors.append(f'{name} pageerror: {e}'))
    page.on('console', lambda msg: print(f'console [{name}]:', msg.type, msg.text) if msg.type in ('error','warning') else None)
    try:
        await page.goto(f'http://127.0.0.1:8765/{path}', wait_until='networkidle', timeout=30000)
    except Exception as e:
        errors.append(f'{name} goto error: {e}')
    await page.screenshot(path=os.path.join(OUT, name), full_page=fullpage)
    # overflow check
    try:
        body_width = await page.evaluate('() => document.body.scrollWidth')
        dpr = await page.evaluate('() => window.devicePixelRatio')
        vp_width = vp['width']
        css_body_width = body_width / dpr
        if css_body_width > vp_width:
            errors.append(f'{name} overflow: body css width {css_body_width} > viewport {vp_width}')
        else:
            print(f'{name} OK width: {css_body_width} <= {vp_width}')
    except Exception as e:
        errors.append(f'{name} overflow check error: {e}')
    await browser.close()

async def test_menu(pw):
    browser = await pw.chromium.launch(headless=True)
    page = await browser.new_page(viewport={'width': 390, 'height': 844, 'deviceScaleFactor': 1})
    try:
        await page.goto('http://127.0.0.1:8765/index.html', wait_until='networkidle', timeout=30000)
        toggle = await page.query_selector('.menu-toggle')
        if not toggle:
            errors.append('mobile toggle not found')
        else:
            await toggle.click()
            await page.wait_for_timeout(300)
            expanded = await toggle.get_attribute('aria-expanded')
            if expanded != 'true':
                errors.append(f'mobile menu aria-expanded after click is {expanded}, expected true')
            nav = await page.query_selector('#main-menu.open')
            if not nav:
                errors.append('mobile menu #main-menu.open not found after click')
            await toggle.click()
            await page.wait_for_timeout(300)
            expanded2 = await toggle.get_attribute('aria-expanded')
            if expanded2 != 'false':
                errors.append(f'mobile menu aria-expanded after second click is {expanded2}, expected false')
            print('mobile menu test passed')
    except Exception as e:
        errors.append(f'mobile menu test error: {e}')
    await browser.close()

async def check_links(pw):
    browser = await pw.chromium.launch(headless=True)
    page = await browser.new_page(viewport={'width':1440,'height':900})
    try:
        await page.goto('http://127.0.0.1:8765/index.html', wait_until='networkidle', timeout=30000)
        links = await page.eval_on_selector_all('a[href]', 'els => els.map(e => e.href)')
        print('index links:', len(links))
        # internal anchors only
        for href in links:
            if href.startswith('http://127.0.0.1:8765/'):
                try:
                    if '#' in href:
                        # same-document navigation: just evaluate URL to confirm
                        current = await page.evaluate('() => window.location.href')
                        await page.goto(href, wait_until='networkidle', timeout=15000)
                        new = await page.evaluate('() => window.location.href')
                        if new != href:
                            errors.append(f'index internal anchor {href} resolved to {new}')
                    else:
                        r = await page.goto(href, wait_until='networkidle', timeout=15000)
                        if not r or r.status >= 400:
                            errors.append(f'index internal link {href} status {r.status if r else "no response"}')
                except Exception as e:
                    errors.append(f'index internal link {href} error: {e}')
        await page.goto('http://127.0.0.1:8765/proposal.html', wait_until='networkidle', timeout=30000)
        links2 = await page.eval_on_selector_all('a[href]', 'els => els.map(e => e.href)')
        print('proposal links:', len(links2))
    except Exception as e:
        errors.append(f'link check error: {e}')
    await browser.close()

async def main():
    httpd = start_server()
    async with async_playwright() as pw:
        await capture(pw, 'index.html', 'build_home_desktop_1440x900.png', {'width':1440,'height':900}, fullpage=True)
        await capture(pw, 'index.html', 'build_home_mobile_390x844.png', {'width':390,'height':844}, fullpage=True)
        await capture(pw, 'proposal.html', 'build_proposal_desktop_1440x900.png', {'width':1440,'height':900}, fullpage=True)
        await capture(pw, 'proposal.html', 'build_proposal_mobile_390x844.png', {'width':390,'height':844}, fullpage=True)
        await test_menu(pw)
        await check_links(pw)
    httpd.shutdown()
    if errors:
        print('ERRORS:')
        for e in errors:
            print(' -', e)
    else:
        print('All verification checks passed.')

asyncio.run(main())
