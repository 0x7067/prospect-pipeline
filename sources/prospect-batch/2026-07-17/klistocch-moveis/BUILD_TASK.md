# Kimi Code build task — Klistocch Móveis

Build a complete, production-realistic static website concept plus a structurally separate proposal page for the prospect in `prospect.json`.

## Mandatory research first

1. Inspect `prospect.json` and every official/evidence URL it contains.
2. Verify the official site, contacts, factory/address, brand identity, current imagery, service/product categories, public proof, and exact copy before using them.
3. Download only official public assets into `assets/`. Create `SOURCE_MANIFEST.md` listing each asset, exact source URL, factual copy source, and uncertainty.
4. Do not fabricate projects, materials, warranties, years, metrics, testimonials, clients, processes, awards, lead times, guarantees, or service areas.
5. If verified visual material is limited, create a deliberately limited visual direction rather than using generic stock or pretending there is a complete portfolio.

## Deliverables

Create from scratch in this directory:
- `index.html` — the production website Klistocch could publish.
- `proposal.html` — separate outreach/sales document, never linked from production navigation/footer.
- `styles.css`
- `script.js`
- `assets/`
- `SOURCE_MANIFEST.md`
- `BUILD_REPORT.md`

No framework, package manager, CMS, fake form, or backend. Use verified direct contact links.

## Design direction

This must stand on style and be recognizably Klistocch—not an interchangeable beige luxury-interiors template. Derive palette, typography, logo use, crops, geometry, and material rhythm from the real brand and official photography. Treat furniture as spatial composition: details, joins, surfaces, negative space, and room-scale views. Make the entire homepage image-led, not only the hero.

Avoid generic serif luxury styling unless the real identity supports it; avoid card grids, repetitive rows, giant empty sections, random rounded pills, invented social proof, and uniformly dark image overlays. Mobile must have deliberate alternate crops and section rhythm rather than mechanical stacking.

## Production/proposal separation

`index.html` must contain no wording such as proposal, redesign, concept, prototype, diagnosis, evidence, audit, before/after, non-affiliation, pitch, or limitations. It must look like the real furniture business site.

`proposal.html` must be a concise persuasive sales narrative:
1. opportunity/result;
2. visual evidence of the proposed direction;
3. prioritized improvements;
4. deliverables;
5. dependencies;
6. sequence/timeline;
7. one explicit next step;
8. compact factual disclosure at the bottom.

Do not use the prospect’s logo as if the proposal were authored by the business.

## Mandatory quality gate

Read and follow `PROSPECT_BRAND_STYLE_GATE.md`. Design to pass:
- average visual score >= 4.0/5;
- no dimension below 3.0;
- brand fidelity, distinctiveness, hero, below-fold, mobile, and proposal each >= 4.0.

## Verification before completion

Serve locally and verify at 1440x900 and 390x844 using real browser rendering if available. Check:
- no horizontal overflow;
- no console/page errors;
- no broken local assets;
- semantic headings and keyboard/focus behavior;
- mobile menu opens, closes, closes on Escape, and updates its accessible label;
- tap targets and readable body sizes;
- production contains zero forbidden proposal language;
- proposal is absent from production navigation/footer;
- no raster image is enlarged beyond a defensible intrinsic size.

Record actual commands/results and limitations in `BUILD_REPORT.md`. Do not deploy or publish. Finish the actual files and verification, not a plan.