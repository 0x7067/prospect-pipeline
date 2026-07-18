import json, sys, time, subprocess, os, signal
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8767"
PAGES = ["index.html", "proposal.html", "rationale.html"]
VIEWPORTS = [(1440, 900), (390, 844)]

results = {"pages": {}}

with sync_playwright() as p:
    browser = p.chromium.launch()
    for page_name in PAGES:
        results["pages"][page_name] = {}
        for (w, h) in VIEWPORTS:
            key = f"{w}x{h}"
            console_msgs = []
            page_errors = []
            failed_requests = []
            context = browser.new_context(viewport={"width": w, "height": h})
            pg = context.new_page()
            pg.on("console", lambda msg: console_msgs.append({"type": msg.type, "text": msg.text}))
            pg.on("pageerror", lambda exc: page_errors.append(str(exc)))
            pg.on("requestfailed", lambda req: failed_requests.append({"url": req.url, "failure": req.failure}))

            resp = pg.goto(f"{BASE}/{page_name}", wait_until="networkidle")
            status = resp.status if resp else None
            final_url = pg.url

            title = pg.title()
            h1_count = pg.locator("h1").count()
            h1_text = pg.locator("h1").first.text_content() if h1_count > 0 else None

            # overflow check
            overflow = pg.evaluate("""
                () => {
                    const doc = document.documentElement;
                    return {
                        scrollWidth: doc.scrollWidth,
                        clientWidth: doc.clientWidth,
                        overflowing: doc.scrollWidth > doc.clientWidth + 1
                    };
                }
            """)

            # broken images
            broken_images = pg.evaluate("""
                () => {
                    const imgs = Array.from(document.querySelectorAll('img'));
                    return imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
                }
            """)

            nav_result = {}
            if page_name == "index.html" and w == 390:
                toggle = pg.locator(".menu-toggle")
                if toggle.count() > 0:
                    before = toggle.get_attribute("aria-expanded")
                    toggle.click()
                    time.sleep(0.2)
                    after = toggle.get_attribute("aria-expanded")
                    nav_result = {"toggle_found": True, "aria_expanded_before": before, "aria_expanded_after": after}
                else:
                    nav_result = {"toggle_found": False}

            results["pages"][page_name][key] = {
                "status": status,
                "final_url": final_url,
                "title": title,
                "h1_count": h1_count,
                "h1_text": h1_text,
                "overflow": overflow,
                "broken_images": broken_images,
                "console_messages": console_msgs,
                "page_errors": page_errors,
                "failed_requests": failed_requests,
                "mobile_nav": nav_result,
            }

            # screenshot evidence
            shot_name = f".pw-evidence-{w}x{h}-{page_name.replace('.html','')}.png"
            pg.screenshot(path=shot_name, full_page=True)
            context.close()
    browser.close()

with open(".pw_results.json", "w") as f:
    json.dump(results, f, indent=2)

print(json.dumps(results, indent=2))
