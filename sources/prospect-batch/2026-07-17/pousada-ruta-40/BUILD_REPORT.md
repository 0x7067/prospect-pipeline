# Build Report — Pousada Ruta 40

## Summary
Production-ready speculative homepage and separate proposal page built for **Pousada Ruta 40** using only verified official assets, contact details, and published guest proof. The build stays strictly inside `/opt/data/projects/prospect-batch/2026-07-17/pousada-ruta-40` and was not deployed or shared with the prospect.

## Files produced

- `index.html` — production homepage (no proposal/disclosure language)
- `proposal.html` — separate, independent proposal document
- `styles.css` — responsive stylesheet with brand palette and mobile-first menu
- `script.js` — mobile menu, testimonial slider, booking-date guard, WhatsApp form builder
- `assets/images/logo.png` — official logo
- `assets/images/acom_1.png` — hero image / official interior
- `assets/images/acom_2.png`, `acom_4.png`, `acom_6.png` — official accommodation imagery presented with neutral labels
- `assets/original_evidence/*` — original site screenshots at 1440×900 and 390×844
- `assets/verification/*` — build verification screenshots at 1440×900 and 390×844
- `SOURCE_MANIFEST.md` — brand-source prerequisite and asset provenance
- `BUILD_REPORT.md` — this report
- `verify.py` — automated verification harness (Playwright)

## Research basis

- Official homepage: `https://pousadaruta40.com.br/`
- Official contact page: `https://pousadaruta40.com.br/contato`
- Third-party listing: `https://lemeshotel.com.br/hotel/pousada-ruta-40/`
- Verified data: business name, address, phone/WhatsApp, e-mail, CNPJ, Instagram, guest-review excerpts and score.
- The official site was downloaded with `curl -sLk` because the Let’s Encrypt chain is not recognized by the default Python/OpenSSL trust store.

## Brand concept

> “A Patagônia argentina no coração de Curitiba.”

The visual system is built around the official logo’s deep blue and warm sand, the route/road motif of the Ruta 40 brand, and the wood-heavy interior photography. It can only belong to this property because it directly ties the Argentine road-trip name to the guest experience, the host (Ariel), and the Santa Quitéria address.

## Verification results

Run via `verify.py` (Playwright headless Chromium, local HTTP server on 127.0.0.1:8765):

- `build_home_desktop_1440x900.png` — width OK, no overflow
- `build_home_mobile_390x844.png` — width OK, no overflow
- `build_proposal_desktop_1440x900.png` — width OK, no overflow
- `build_proposal_mobile_390x844.png` — width OK, no overflow
- Mobile menu: open/close and `aria-expanded` toggles pass
- Internal links and anchors: all resolve
- No page errors or failed local requests detected during the run

Original evidence captured:

- `original_home_desktop_1440x900.png`
- `original_home_mobile_390x844.png`
- `original_contato_desktop_1440x900.png`

## Responsive design notes

- Desktop: 1440px wide hero with side-aligned text, three-column experience grid, alternating room cards, two-column booking form, three-column footer.
- Mobile (≤720px): hamburger menu, single-column layout, full-width CTAs, 75% aspect-ratio map, 54×54 WhatsApp float, clamp-based typography.
- Overflow is prevented by using `display: none` for the closed mobile nav and `overflow-x: hidden` on `html`/`body` as a safety guard.
- Tap targets are ≥44 px (menu toggle 48×48, slider buttons 40×40, WhatsApp float 54×54).

## Known limitations / trade-offs

- Exact official room names, categories, capacities, services and amenities were not published in the reviewed evidence. The final production copy therefore uses neutral image labels and requires direct confirmation.
- Prices and availability are not shown because they cannot be verified from the public site.
- The map embed uses the official Google Maps embed URL from the contact page.
- The TLS certificate issue noted in the proposal is an objective observation, not a site defect created by this build.

## Gate compliance checklist

- [x] Brand-source prerequisite documented in `SOURCE_MANIFEST.md`
- [x] Concept thesis recorded
- [x] Anti-template tests considered (logo-removal, competitor-swap, squint, five-second, below-fold, mobile-native)
- [x] Visual scorecard dimensions addressed in design decisions
- [x] Hero, typography, color, imagery, page rhythm and mobile art-direction applied
- [x] Proposal is separate, clearly framed as independent, and includes disclosure
- [x] Mechanical checks pass: 1440×900 + 390×844 screenshots, zero overflow, no console errors, menu tested, links verified
- [x] No deployment or prospect contact occurred

## Next step

The deliverable is ready for internal review. If the prospect later approves, the next task would be to validate exact room names/capacities, obtain high-resolution photography, and replace the conceptual room labels with verified data.
