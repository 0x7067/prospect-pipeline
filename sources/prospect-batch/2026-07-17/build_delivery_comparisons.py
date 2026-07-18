from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT=Path('/opt/data/projects/prospect-batch/2026-07-17/comparisons')
slugs=[
('centro-medico-trinita','Centro Médico Trinità'),
('klistocch-moveis','Klistocch Móveis'),
('studio-doc-dental-clinic','Studio DOC Dental Clinic'),
('rosetti-advogados','Rosetti Advogados Associados'),
('da-vinci-veterinaria','Da Vinci Clínica Veterinária 24h'),
('instituto-zetola','Instituto Zétola Odontologia'),
]
font=ImageFont.load_default(size=28)
small=ImageFont.load_default(size=20)
for slug,title in slugs:
    desktop=Image.open(OUT/f'{slug}-desktop-current-vs-proposed.jpg').convert('RGB')
    mobile_path=OUT/f'{slug}-mobile-current-vs-proposed.jpg'
    mobile=Image.open(mobile_path).convert('RGB') if mobile_path.exists() else None
    margin=24; top=70; section=38; gap=28
    width=max(desktop.width, mobile.width if mobile else 0)+margin*2
    height=top+section+desktop.height+(gap+section+mobile.height if mobile else 0)+margin
    page=Image.new('RGB',(width,height),'#ffffff')
    draw=ImageDraw.Draw(page)
    draw.text((margin,18),title,fill='#111111',font=font)
    y=top
    draw.text((margin,y),'DESKTOP — CURRENT vs PROPOSED',fill='#444444',font=small); y+=section
    page.paste(desktop,(margin,y)); y+=desktop.height
    if mobile:
        y+=gap; draw.text((margin,y),'MOBILE — CURRENT vs PROPOSED',fill='#444444',font=small); y+=section
        page.paste(mobile,(margin,y))
    else:
        y+=gap; draw.text((margin,y),'Mobile current capture unavailable: official site timed out in Playwright.',fill='#8a3d2f',font=small)
    page.save(OUT/f'{slug}-comparison.jpg',quality=91,optimize=True)
    print(OUT/f'{slug}-comparison.jpg', page.size)
