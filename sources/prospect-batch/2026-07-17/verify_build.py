#!/usr/bin/env python3
from pathlib import Path
from playwright.sync_api import sync_playwright
import argparse, json, re, socket, subprocess, sys, time

ap=argparse.ArgumentParser()
ap.add_argument('site')
ap.add_argument('--port',type=int,required=True)
a=ap.parse_args()
root=Path(a.site).resolve()
required=['index.html','proposal.html','styles.css']
missing=[x for x in required if not (root/x).exists()]
if missing: raise SystemExit(f'missing required: {missing}')
index=(root/'index.html').read_text(errors='ignore')
forbidden=re.compile(r'\b(?:propost(?:a|o|as|os)?|redesign|prot[oó]tip(?:o|os|a|as)?|estudo\s+independente|n[aã]o\s+publicad[oa]s?|sem\s+v[ií]nculo|case[ -]?study)\b',re.I)
text=re.sub(r'<script\b[^>]*>.*?</script>|<style\b[^>]*>.*?</style>|<[^>]+>',' ',index,flags=re.S|re.I)
hits=sorted(set(m.group(0) for m in forbidden.finditer(text)))
if hits: raise SystemExit(f'forbidden production language: {hits}')
if re.search(r'href=["\'][^"\']*proposal\.html',index,re.I): raise SystemExit('proposal linked from production')
out=root/'review'; out.mkdir(exist_ok=True)
proc=subprocess.Popen([sys.executable,'-m','http.server',str(a.port),'--bind','127.0.0.1'],cwd=root,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
  for _ in range(60):
    try:
      with socket.create_connection(('127.0.0.1',a.port),timeout=.2): break
    except OSError: time.sleep(.1)
  else: raise RuntimeError('server did not start')
  results={}
  with sync_playwright() as p:
    b=p.chromium.launch(headless=True)
    for name in ('index','proposal'):
      for mode,w,h in [('desktop',1440,900),('mobile',390,844)]:
        pg=b.new_page(viewport={'width':w,'height':h})
        ce=[]; pe=[]; rf=[]
        pg.on('console',lambda m,bag=ce: bag.append(m.text) if m.type=='error' else None)
        pg.on('pageerror',lambda e,bag=pe: bag.append(str(e)))
        pg.on('requestfailed',lambda r,bag=rf: bag.append({'url':r.url,'error':r.failure}))
        resp=pg.goto(f'http://127.0.0.1:{a.port}/{name}.html',wait_until='networkidle')
        # Trigger native lazy-loaded images deterministically before validating them.
        pg.evaluate("""async () => {
          const step = Math.max(400, Math.floor(innerHeight * 0.8));
          for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            scrollTo(0, y);
            await new Promise(r => setTimeout(r, 35));
          }
          scrollTo(0, 0);
          await new Promise(r => setTimeout(r, 150));
        }""")
        for image in pg.locator('img:visible').all():
          image.scroll_into_view_if_needed()
          pg.wait_for_timeout(35)
        pg.wait_for_timeout(250)
        pg.evaluate("""() => {
          for (const e of document.querySelectorAll('*')) {
            if (e.scrollWidth > e.clientWidth) e.scrollLeft = 0;
          }
          scrollTo(0, 0);
        }""")
        sw=pg.evaluate('document.documentElement.scrollWidth'); iw=pg.evaluate('innerWidth')
        imgs=pg.evaluate("[...document.images].map(i=>({src:i.getAttribute('src'),complete:i.complete,naturalWidth:i.naturalWidth,clientWidth:Math.round(i.getBoundingClientRect().width),clientHeight:Math.round(i.getBoundingClientRect().height)}))")
        bad=[i for i in imgs if i['clientWidth']>0 and i['clientHeight']>0 and (not i['complete'] or i['naturalWidth']==0)]
        res={'status':resp.status if resp else None,'scrollWidth':sw,'innerWidth':iw,'consoleErrors':ce,'pageErrors':pe,'requestFailures':rf,'badImages':bad,'images':imgs}
        pg.screenshot(path=str(out/f'{name}-{mode}-viewport.png'), full_page=False, animations='disabled')
        if name=='index' and mode=='mobile':
          toggle=pg.locator('.menu-toggle, .nav-toggle, .mobile-menu-toggle').first
          if toggle.count():
            before=toggle.get_attribute('aria-label') or toggle.inner_text()
            toggle.click(); pg.wait_for_timeout(100)
            opened=toggle.get_attribute('aria-expanded')
            after=toggle.get_attribute('aria-label') or toggle.inner_text()
            pg.keyboard.press('Escape'); pg.wait_for_timeout(100)
            closed=toggle.get_attribute('aria-expanded')
            res['menu']={'before':before,'opened':opened,'after':after,'closedAfterEscape':closed}
            if opened!='true' or closed!='false' or before==after: raise AssertionError(f'menu behavior failed: {res["menu"]}')
        if mode == 'mobile':
          pg.add_style_tag(content='.mobile-menu,.primary-nav,.nav-drawer,.menu-overlay,.menu-backdrop{display:none!important;animation:none!important;transition:none!important}')
        pg.screenshot(path=str(out/f'{name}-{mode}-full.png'), full_page=True, animations='disabled')
        if res['status']!=200 or sw!=iw or ce or pe or rf or bad: raise AssertionError(f'{name}-{mode}: {res}')
        results[f'{name}-{mode}']=res
        pg.close()
    b.close()
  (out/'technical-results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
  print(json.dumps({'site':str(root),'status':'technical-pass','captures':list(results)},ensure_ascii=False))
finally:
  proc.terminate()
  try: proc.wait(timeout=5)
  except subprocess.TimeoutExpired: proc.kill()
