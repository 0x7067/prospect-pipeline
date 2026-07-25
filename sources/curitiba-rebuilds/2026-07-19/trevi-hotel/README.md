# Trevi Hotel &amp; Business — Redesign Concept

**Deliverable tier:** early_visual_direction (not production-complete)
**Run date:** 2026-07-19
**Slug:** trevi-hotel

## Overview

Evidence-bounded static redesign concept for Trevi Hotel &amp; Business (trevihotel.com.br). The concept transforms the site into a confident stay-and-events decision path: a calm arrival sequence that makes the stay, the business event, and the next reservation action equally legible.

## Files

| File | Purpose |
|---|---|
| `index.html` | Production-realistic homepage — no proposal/redesign language |
| `proposal.html` | Independent persuasive sales document |
| `rationale.html` | Redirects to proposal.html |
| `styles.css` | Complete design system and responsive styles |
| `script.js` | Mobile nav, reservation date defaults, smooth scroll |
| `README.md` | This file |
| `SITE_REVIEW.md` | Quality review, anti-template tests, scorecard |
| `SOURCE_MANIFEST.md` | Evidence sources and provenance record |

## Design System

- **Palette:** Burgundy (#7B1E2E), Charcoal (#2C2C2C), Warm off-white (#F7F4F0), Gold accent (#C4A35A)
- **Typography:** Playfair Display (display headings) + Inter (body and UI)
- **Elevation:** Flat by default; box-shadow only on reservation bar
- **Image treatment:** Warm-toned CSS gradient backgrounds with subtle burgundy tint

## Evidence Boundary

All business-specific facts are sourced exclusively from:
- `prospect.json`
- `PRODUCT.md`
- `BRAND_SOURCE.md`
- Live site inspection of trevihotel.com.br (homepage, contato, eventos, informacoes-de-hospedagem pages)

No fabricated claims, invented room categories, or placeholder content.

## Verified Facts

- **Address:** R. Ébano Pereira, 139 - Centro, Curitiba - PR, 80410-240
- **Phone:** (41) 3224-0111
- **Email:** reservas@trevihotel.com.br
- **Event rooms:** 2 (SALA 3, SALA 4)
- **Services:** Accommodation, online reservation, breakfast, Wi-Fi, 24-hour reception, business center, events, WhatsApp contact

## Running Locally

Open `index.html` directly in a browser, or serve via any static file server:

```bash
npx serve .
```

## Validation

Run the standardized validation:
```bash
/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/trevi-hotel
```

## Notes

This is an early visual direction. It is not production-complete and is not ready for publication. Photos, booking integration, and content review are required dependencies before any production deployment.
