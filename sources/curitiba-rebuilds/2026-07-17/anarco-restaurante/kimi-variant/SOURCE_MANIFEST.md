# Source Manifest — Anarco Restaurante (Kimi Variant)

## Primary source

- Official site observed on 2026-07-17: https://anarco.com.br/
- Evidence of activity: HTTP 200, two Curitiba units, phone numbers, hours, menu, WhatsApp reservation link.
- Supporting official pages: https://anarco.com.br/historia/, https://anarco.com.br/contato/
- Official WhatsApp: https://wa.me/554133360049

## Local assets

All visual assets are local copies of files referenced on the official site during the source audit and are stored in `assets/`:

- `assets/logo-anarco.png` — logo (official site image observed 2026-07-17)
- `assets/menu-anarco.png` — hero/menu image (official site image, alt context: menu anarco restaurante curitiba)
- `assets/hero-anarco.png` — alternate hero image (official site image observed 2026-07-17)
- `assets/carpaccio.jpg` / `assets/carpaccio-haddock.jpg` — Carpaccio de haddock Anarco
- `assets/risoto.jpg` / `assets/risoto-bacalhau.jpg` — Risoto de Bacalhau Anarco
- `assets/casquinha.jpg` / `assets/casquinha-siri.jpg` — Casquinha de siri com ovas de capelin Anarco

The `index.html` build in use references the renamed asset set (`menu-anarco.png`, `carpaccio-haddock.jpg`, `risoto-bacalhau.jpg`, `casquinha-siri.jpg`). Duplicate legacy filenames remain in `assets/` but are not referenced by the production page.

## Build inputs

- `../prospect.json`
- `../BRAND_SOURCE.md`
- `../PRODUCT.md`
- `../DESIGN.md`
- `../.agents/skills/impeccable` (pinned detector and design craft rules)

## Output files

- `index.html`
- `proposal.html`
- `rationale.html`
- `styles.css`
- `script.js`
- `README.md`
- `SITE_REVIEW.md`
- `SOURCE_MANIFEST.md`

## What was preserved

- Foundation in 1991 by Ilsa Artusi Agottani
- Language of tradition and simpatia
- Published dishes and ingredients
- Two real locations
- Published dish photography
- Brand colors: bordô #5C0709, creme #FFF8E0, verde oliva #566B3D, rosa #CC3366
- WhatsApp reservation path

## What was deliberately avoided

- Injected casino/spam text from the current site
- Overly long single-page mixing
- Inconsistent typographic hierarchy
- Reservation without contextual unit choice
- Logo treated as hero image
- Invented claims, testimonials, awards, or third-party proof
- Approval, critique, visual-verdict, design-review, human-approval, or publication receipts
- External services queried for business evidence
- Modification of the primary project files
- Publishing or contacting the business

## Built by

Kimi independent builder (`kimi-parallel-builder`). Not affiliated with Anarco Restaurante.
