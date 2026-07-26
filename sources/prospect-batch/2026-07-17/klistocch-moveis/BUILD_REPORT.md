# Build Report — Klistocch Móveis

## Result

Complete static production homepage and separate proposal produced in the isolated Klistocch workspace. The implementation was created through the designated Kimi Code lane; the parent acceptance pass corrected the proposal evidence panel and independently re-ran verification.

## Deliverables

- `index.html` — production-facing homepage
- `proposal.html` — separate sales/proposal document; not linked from production navigation or footer
- `styles.css` — responsive visual system
- `script.js` — accessible mobile navigation and interface behavior
- `assets/images/` — official Klistocch imagery and marks
- `assets/proposal/` — current-site and proposed-site viewport evidence
- `SOURCE_MANIFEST.md` — factual and asset provenance

## Independent verification

Command:

```bash
PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright \
uv run --with playwright python ../verify_build.py . --port 4205
```

Result:

```text
status: technical-pass
captures: index-desktop, index-mobile, proposal-desktop, proposal-mobile
```

Verified at 1440×900 and 390×844:

- HTTP 200 for production and proposal routes
- no horizontal overflow
- no console errors or page errors
- no failed requests
- all reviewed images decoded
- mobile menu opens and closes with an updated accessible label and closes with Escape
- proposal/redesign language absent from the production homepage
- proposal remains structurally separate

## Acceptance repair

The interrupted Kimi run had embedded `assets/downloads/original-home.html` as an `<img>` in the proposal. Chromium correctly reported a zero-width decoded image. The acceptance pass replaced it with:

- `assets/proposal/current-home-desktop.png` — real 1440×900 capture of `https://www.klistocch.com.br/` (HTTP 200 on 2026-07-17)
- `assets/proposal/proposed-home-desktop.png` — real 1440×900 capture of the local concept

The full technical suite then passed.

## Factual controls

Facts and imagery are bounded by `prospect.json` and `SOURCE_MANIFEST.md`. No invented projects, awards, metrics, warranty terms, testimonials, or service areas were added. Official testimonials retained in the page are documented in the manifest.

## Publication

Not deployed by the implementation agent. Publication remains conditional on independent adversarial visual review and final acceptance.

## Improvement pass — 2026-07-26

Updated `index.html`, `styles.css` and `script.js`. The homepage now exposes verified proof points directly in the hero and adds a room-led project starter with direct, pre-contextualized commercial WhatsApp routes. Unsupported `priceRange` and `areaServed` structured-data fields were removed; the verified email was retained. Mobile navigation now locks background scrolling while open.

Rendered validation passed at 1440×900 and 390×844: zero horizontal overflow, missing anchors, broken images, runtime exceptions or failed requests. The mobile menu opened and closed with correct ARIA state/labels and Escape behavior. Static local-asset/alt checks, `node --check script.js`, unresolved CSS-variable detection, forbidden production-language search and `git diff --check` also passed.
