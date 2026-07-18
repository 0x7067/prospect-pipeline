from pathlib import Path
from html.parser import HTMLParser
from playwright.sync_api import sync_playwright
import json,re
root=Path('.')
index=(root/'index.html').read_text(); proposal=(root/'proposal.html').read_text()
class P(HTMLParser): pass
for f in ('index.html','proposal.html'): P().feed((root/f).read_text())
ids=set(re.findall(r'\bid="([^"]+)"',index)); anchors=set(re.findall(r'href="#([^"]+)"',index)); assert anchors<=ids
assert not re.search(r'propost|redesign|prot[oó]tip|diagn[oó]st|evid[eê]nc|n[aã]o afili|case study|pitch|antes.?depois|conceito|estudo independente',index,re.I)
for ref in re.findall(r'(?:src|href)="([^"]+)"',index+proposal):
 if ref.startswith(('http','mailto:','tel:','#')): continue
 assert (root/ref).exists(),ref
out=root/'review'; out.mkdir(exist_ok=True)
results={}
with sync_playwright() as p:
 b=p.chromium.launch(headless=True)
 for page_name in ('index','proposal'):
  for mode,w,h in [('desktop',1440,900),('mobile',390,844)]:
   page=b.new_page(viewport={'width':w,'height':h}); ce=[]; pe=[]; rf=[]
   page.on('console',lambda m,bag=ce: bag.append(m.text) if m.type=='error' else None)
   page.on('pageerror',lambda e,bag=pe: bag.append(str(e)))
   page.on('requestfailed',lambda r,bag=rf: bag.append(r.url))
   r=page.goto(f'http://127.0.0.1:4183/{page_name}.html',wait_until='networkidle')
   page.screenshot(path=str(out/f'{page_name}-{mode}.png'),full_page=False)
   page.screenshot(path=str(out/f'{page_name}-{mode}-full.png'),full_page=True)
   sw=page.evaluate('document.documentElement.scrollWidth'); imgs=page.evaluate("[...document.images].map(i=>({src:i.getAttribute('src'),ok:i.complete&&i.naturalWidth>0,nw:i.naturalWidth,cw:Math.round(i.getBoundingClientRect().width)}))")
   res={'status':r.status,'scrollWidth':sw,'innerWidth':w,'height':page.evaluate('document.documentElement.scrollHeight'),'consoleErrors':ce,'pageErrors':pe,'requestFailures':rf,'images':imgs}
   if page_name=='index' and mode=='mobile':
    page.locator('.menu-toggle').click(); res['menuOpen']=page.locator('.main-nav').evaluate("e=>e.classList.contains('is-open')"); res['menuLabel']=page.locator('.menu-label').inner_text(); page.screenshot(path=str(out/'index-mobile-menu.png'),full_page=False); page.locator('.menu-toggle').click(); res['menuClosedLabel']=page.locator('.menu-label').inner_text()
   results[f'{page_name}-{mode}']=res
   print(page_name,mode,json.dumps(res,ensure_ascii=False))
   assert r.status==200 and sw==w and not ce and not pe and not rf and all(i['ok'] for i in imgs)
   if page_name=='index': assert all(i['cw']<=470 for i in imgs if i['src']=='assets/residencial-fachada.jpg')
   page.close()
 b.close()
(root/'review/results.json').write_text(json.dumps(results,indent=2,ensure_ascii=False))
print(json.dumps(results,indent=2,ensure_ascii=False))
