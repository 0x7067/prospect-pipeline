# Colégio Novo Éden — direção visual inicial

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

Run a static server from this directory, for example `python3 -m http.server 8000`, then open `http://localhost:8000/`. No build step, dependency install, remote font, analytics, or third-party asset request is required. The only outbound links are the prospect's own already-public contact route (`novoeden.com.br/fale-conosco/`) and LinkedIn profile (`prospect.json` evidence_links) — both open in a new tab; neither is called automatically, and no form is submitted by this build.

## Evidence boundary

Business-specific facts come only from `prospect.json`, `PRODUCT.md`, and `BRAND_SOURCE.md`. The redesign does not invent any accreditation body, partnership, enrollment figure, staff name, curriculum specific, or visit-scheduling mechanism beyond phone/email, since none of those is supported by the supplied evidence. Before any publication workflow, the school would need to validate all copy, identity details, exact brand colors/typography sampled from the real logo and rendered site, and accessibility.

## Concept

"A Trilha até a Vida" (The Path to Life) — the three evidenced education stages (Ensino Infantil, Ensino Fundamental I e II, Ensino Médio) become a single literal path the visitor walks, with a continuous trail rule that deepens in color stage by stage. See `DESIGN.md` for the full compositional thesis, palette, typography, and art-directed moments.
