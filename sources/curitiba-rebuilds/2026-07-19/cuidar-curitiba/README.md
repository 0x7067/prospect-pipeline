# Cuidar Curitiba — Redesign Concept

Evidence-bounded static website redesign for Cuidar Curitiba, a medical coworking and fiscal address service in Curitiba, Brazil.

## Deliverable Tier

**Early Visual Direction** — This is a design concept, not a production-ready implementation. It is not affiliated with, endorsed by, or connected to Cuidar Curitiba.

## Files

- `index.html` — Production-realistic homepage concept (no proposal language)
- `proposal.html` — Independent persuasive sales document
- `rationale.html` — Redirect to proposal.html
- `styles.css` — Complete design system and layout
- `script.js` — Mobile menu and smooth scroll interactions
- `assets/` — Local image assets downloaded from official sources
- `SITE_REVIEW.md` — Anti-template test results and design rationale
- `SOURCE_MANIFEST.md` — Evidence sources and provenance

## Design Decisions

### Compositional Thesis
"Two-door practice hub" — the page splits into two clear conversion routes:
1. **Consultório Pronto** (medical room booking) — warm, immediate, action-oriented
2. **Endereço Fiscal** (fiscal address) — precise, compliance-focused, trust-oriented

### Art-Directed Moments
1. **Hero split** — Content left, portrait image right, with proof metrics below
2. **Trust strip** — Full-width dark band with metric hierarchy
3. **Door sections** — Alternating layouts with distinct color accents per offer

### Typography
- **Display:** Libre Caslon Text (serif, characterful, professional)
- **Body:** Public Sans (clean, readable, modern sans)

### Color
- Primary: Verified brand red sampled from official identity assets (oklch 0.55 0.15 25)
- Secondary: Teal-green for fiscal door differentiation (oklch 0.45 0.12 145)
- Ink: Dark charcoal from identity assets (oklch 0.22 0.02 260)

## Evidence Boundary

All business facts (prices, hours, address, phone numbers, services) are sourced exclusively from the official website observed on 2026-07-19. No claims were invented.

## Running Locally

Serve with any static file server:

```bash
cd /opt/data/projects/curitiba-rebuilds/2026-07-19/cuidar-curitiba
python3 -m http.server 8080
# or
npx serve .
```

Open http://localhost:8080

## Validation

Run the standardized validation:

```bash
/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/cuidar-curitiba
```

## License

Independent design concept. Not for publication without explicit permission from Cuidar Curitiba.
