# Escola Transformatória — direção visual inicial

Static, evidence-bounded website direction. This deliverable is **early visual direction** and is not production-complete or ready for publication.

## Files

- `index.html`: production-realistic public-facing homepage concept
- `proposal.html`: separate independent sales/proposal document (non-affiliated, `noindex, nofollow`)
- `rationale.html`: compatibility redirect to `proposal.html`
- `styles.css`, `script.js`: shared presentation system and minimal interaction
- `DESIGN.md`: design system and compositional rationale
- `SOURCE_MANIFEST.md`: fact and asset provenance
- `SITE_REVIEW.md`: quality-gate observations, anti-template test results

## Local preview

Run a static server from this directory, for example `python3 -m http.server 8000`, then open `http://localhost:8000/`. No build step, dependency install, remote font, analytics, or third-party asset request is required. The only outbound links are the prospect's own already-public contact route (`transformatoria.com.br/contato/`) and OpenStreetMap for address verification — both open in a new tab; neither is called automatically, and no form is submitted by this build.

## Evidence boundary

Business-specific facts come only from `prospect.json`, `PRODUCT.md`, and `BRAND_SOURCE.md`. The redesign deliberately does not restate the official site's experience-year counters, enrollment totals, NPS figure, award, or outcome multipliers — those are exactly the ambiguous/contradictory claims the brief asked us to remove, and no replacement number is invented in their place. Before any publication workflow, the school would need to validate all copy, identity details, exact brand colors/typography, course/pricing information, contact behavior, and accessibility.

## Concept

"O Diagnóstico do Palco" — the page behaves as a two-audience decision system (diagnose the communicator or team, then reveal one credible route) instead of a scrolling brochure. See `DESIGN.md` for the full compositional thesis, palette, typography, and art-directed moments.
