# Site review — Kimi variant

Validation run: 2026-07-18, against the local static server (`python3 -m http.server 4173`).

## Desktop — 1440 × 900

- `index.html` loaded successfully with title `Pousada Betânia — Conforto, natureza e eventos em Curitiba`.
- `document.documentElement.scrollWidth`: 1440px; viewport client width: 1440px.
- No horizontal overflow detected.
- All local images reported `naturalWidth > 0` when loaded; no page errors were emitted.
- Screenshot: `evidence-desktop.png`.

## Mobile — 390 × 844

- `index.html` loaded successfully at the target mobile width.
- `document.documentElement.scrollWidth`: 390px; viewport client width: 390px.
- No horizontal overflow detected, addressing the supplied 980px scroll-width issue.
- Mobile menu toggle was visible and opened `#main-nav` with `aria-expanded="true"`.
- No page errors were emitted.
- Screenshot: `evidence-mobile.png`.

## Supporting routes

- `proposal.html` loaded at 390px with no horizontal overflow (`scrollWidth`: 390px; client width: 390px).
- `rationale.html` redirected to `proposal.html` via its meta refresh after browser navigation.

## Scope notes

- This is a static, independent concept. Booking, WhatsApp, phone, e-mail, Instagram, official-site, event, and map links remain external destinations; no reservation or contact integration was implemented.
- Local visual assets are the supplied official-site assets, documented in `SOURCE_MANIFEST.md`.
