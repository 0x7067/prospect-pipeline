import asyncio
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "comparisons"
OUT.mkdir(exist_ok=True)

SITES = [
    ("centro-medico-trinita", "Centro Médico Trinità", "https://trinitacuritiba.com.br/", "https://centro-medico-trinita-preview.azure-purple.workers.dev/"),
    ("klistocch-moveis", "Klistocch Móveis", "https://www.klistocch.com.br/", "https://klistocch-moveis-preview.azure-purple.workers.dev/"),
    ("studio-doc-dental-clinic", "Studio DOC Dental Clinic", "https://studiodoc.com.br/", "https://studio-doc-dental-preview.azure-purple.workers.dev/"),
    ("rosetti-advogados", "Rosetti Advogados Associados", "https://rosettiadvogados.adv.br/", "https://rosetti-advogados-preview.azure-purple.workers.dev/"),
    ("da-vinci-veterinaria", "Da Vinci Clínica Veterinária 24h", "https://www.veterinariadavinci.com.br/", "https://da-vinci-veterinaria-preview.azure-purple.workers.dev/"),
    ("instituto-zetola", "Instituto Zétola Odontologia", "https://www.institutozetola.com.br/", "https://instituto-zetola-preview.azure-purple.workers.dev/"),
]
VIEWPORTS = {
    "desktop": {"width": 1440, "height": 900},
    "mobile": {"width": 390, "height": 844},
}

async def capture(browser, slug, kind, label, url, viewport):
    context = await browser.new_context(viewport=viewport, device_scale_factor=1, locale="pt-BR")
    page = await context.new_page()
    errors = []
    page.on("pageerror", lambda exc: errors.append(f"pageerror: {exc}"))
    try:
        response = await page.goto(url, wait_until="domcontentloaded", timeout=45000)
        try:
            await page.wait_for_load_state("networkidle", timeout=12000)
        except Exception:
            pass
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(1800)
        path = OUT / f"{slug}-{kind}-{label}.png"
        await page.screenshot(path=str(path), full_page=False)
        status = response.status if response else None
        final_url = page.url
        return {"ok": True, "path": str(path), "status": status, "final_url": final_url, "errors": errors}
    except Exception as exc:
        return {"ok": False, "url": url, "error": str(exc), "errors": errors}
    finally:
        await context.close()

def compose(slug, title, kind):
    current_path = OUT / f"{slug}-{kind}-current.png"
    proposed_path = OUT / f"{slug}-{kind}-proposed.png"
    if not current_path.exists() or not proposed_path.exists():
        return None
    current = Image.open(current_path).convert("RGB")
    proposed = Image.open(proposed_path).convert("RGB")
    gap = 24
    header = 86
    width = current.width + proposed.width + gap
    height = max(current.height, proposed.height) + header
    canvas = Image.new("RGB", (width, height), "#f4f1eb")
    draw = ImageDraw.Draw(canvas)
    font = ImageFont.load_default(size=24)
    small = ImageFont.load_default(size=18)
    draw.text((16, 12), title, fill="#171717", font=font)
    draw.text((16, 48), "CURRENT", fill="#5e5e5e", font=small)
    draw.text((current.width + gap + 16, 48), "PROPOSED", fill="#176b4d", font=small)
    canvas.paste(current, (0, header))
    canvas.paste(proposed, (current.width + gap, header))
    out = OUT / f"{slug}-{kind}-current-vs-proposed.jpg"
    canvas.save(out, quality=90, optimize=True)
    return str(out)

async def main():
    report = {}
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        jobs = []
        keys = []
        for slug, title, current, proposed in SITES:
            report[slug] = {"title": title}
            for kind, viewport in VIEWPORTS.items():
                for label, url in (("current", current), ("proposed", proposed)):
                    keys.append((slug, kind, label))
                    jobs.append(capture(browser, slug, kind, label, url, viewport))
        results = await asyncio.gather(*jobs)
        await browser.close()
    for key, result in zip(keys, results):
        slug, kind, label = key
        report[slug].setdefault(kind, {})[label] = result
    for slug, title, *_ in SITES:
        for kind in VIEWPORTS:
            report[slug].setdefault(kind, {})["comparison"] = compose(slug, title, kind)
    import json
    (OUT / "capture-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    asyncio.run(main())
