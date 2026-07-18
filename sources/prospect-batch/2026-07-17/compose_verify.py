from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageStat

ROOT = Path('/opt/data/projects/prospect-batch/2026-07-17')
OUT = ROOT / 'comparisons'
font = ImageFont.load_default(size=24)
small = ImageFont.load_default(size=18)

# Use the verified same-day desktop capture already stored with the Instituto Zétola build.
a = Image.open(ROOT / 'instituto-zetola/assets/proposal/current-desktop-viewport.png').convert('RGB')
b = Image.open(OUT / 'instituto-zetola-desktop-proposed.png').convert('RGB')
a = a.resize((1440, 900)) if a.size != (1440, 900) else a
b = b.resize((1440, 900)) if b.size != (1440, 900) else b
gap, header = 24, 86
c = Image.new('RGB', (a.width+b.width+gap, 900+header), '#f4f1eb')
d = ImageDraw.Draw(c)
d.text((16,12), 'Instituto Zétola Odontologia', fill='#171717', font=font)
d.text((16,48), 'CURRENT', fill='#5e5e5e', font=small)
d.text((a.width+gap+16,48), 'PROPOSED', fill='#176b4d', font=small)
c.paste(a,(0,header)); c.paste(b,(a.width+gap,header))
c.save(OUT / 'instituto-zetola-desktop-current-vs-proposed.jpg', quality=90, optimize=True)

# Make a compact proof sheet for visual QA.
files = sorted(OUT.glob('*-current-vs-proposed.jpg'))
thumbs=[]
for f in files:
    im=Image.open(f).convert('RGB')
    im.thumbnail((900, 330))
    thumbs.append((f.name,im.copy(),ImageStat.Stat(im).stddev))
row_h=370
sheet=Image.new('RGB',(920,row_h*len(thumbs)),'white')
d=ImageDraw.Draw(sheet)
for i,(name,im,stddev) in enumerate(thumbs):
    y=i*row_h
    d.text((10,y+5),name,fill='black',font=small)
    sheet.paste(im,(10,y+35))
sheet.save(OUT/'comparison-proof-sheet.jpg',quality=85,optimize=True)
for name, im, stddev in thumbs:
    print(name, im.size, [round(v,2) for v in stddev])
