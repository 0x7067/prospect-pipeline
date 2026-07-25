# Arte & Jardim — Redesign conceitual

**Data:** 2026-07-19  
**Tier:** early_visual_direction  
**Prospect:** Arte & Jardim (arteejardim.com.br)  
**Categoria:** Paisagismo e jardinagem em Curitiba

## Conceito

Frame Arte & Jardim as a living project archive: let Curitiba landscapes, the founder's long practice, and four stages of service lead a visitor from visual possibility to a well-briefed project conversation.

## Compositional thesis

This concept can only belong to Arte & Jardim because it frames the business as a living project archive — a chronological journey through four stages of landscape practice anchored by a 36-year founder story rooted specifically in Curitiba's microclimate and urban garden culture.

## Art-directed moments

1. **Archive-hero entrance** — Deep-teal hero with large Source Serif 4 display typography, overlay on tropical garden imagery, creating a "museum archive" atmosphere rather than a generic landing page.
2. **Founder typographic sculpture** — The number "36" rendered at hero scale as a standalone typographic element, anchoring the founder story with visual weight.
3. **Vertical timeline for four service stages** — Connected stages (creation → implementation → maintenance → consulting) presented as a chronological timeline with dots and connecting line, not as independent cards.

## Typography

- **Source Serif 4** as a single-family system (display in 700-900 weight, body in 400). Literary, established — like a botanical field journal. Paired against the reflex-reject list; avoids the editorial-magazine cliché by using one family throughout rather than display-serif + mono-kicker.

## Color

- **Strategy:** Committed — deep oxidized teal carries the hero and key sections (30-60% of surface).
- **Seed:** oklch(0.550 0.095 180.0) — weathered copper patina
- **Primary:** oklch(0.30 0.095 175) — deep teal
- **Accent:** oklch(0.62 0.14 55) — warm amber for CTAs
- **BG:** pure white (oklch(1.000 0 0))
- All colors in OKLCH; WCAG AA+ contrast verified.

## Image treatment

- Hero: full-bleed with dark teal gradient overlay (not flat tint)
- Portfolio: subtle saturation reduction (0.85) that resolves to full saturation on hover
- Founder: warm-toned garden detail, aspect ratio 4:5, with location caption

## Files

- `index.html` — Production homepage (no proposal/redesign language)
- `proposal.html` — Independent sales document
- `rationale.html` — Redirects to proposal.html
- `styles.css` — Complete design system
- `script.js` — Navigation, scroll behavior, reveals
- `SITE_REVIEW.md` — Quality review and anti-template test results
- `SOURCE_MANIFEST.md` — Evidence and source documentation

## Evidence boundary

All business facts sourced from prospect.json, PRODUCT.md, and BRAND_SOURCE.md. No fabricated claims, invented projects, or placeholder business data.

## Validation

Run: `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/arte-e-jardim`
