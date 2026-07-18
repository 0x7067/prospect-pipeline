# Agent AFK build task — Centro Médico Trinità

Build a complete, production-realistic static website concept plus a structurally separate proposal page for the prospect in `prospect.json`.

## Mandatory research first

1. Inspect `prospect.json` and every official/evidence URL it contains.
2. Verify the live official site, contact details, address, specialties, professionals, hours, logo, colors, typography, and image URLs before using them.
3. Download only official public assets into `assets/`. Create `SOURCE_MANIFEST.md` listing each asset, exact source URL, factual copy source, and any uncertainty.
4. Do not fabricate physicians, credentials, specialties, metrics, testimonials, results, awards, patient outcomes, or medical claims. No diagnosis or treatment guarantees.
5. If a claim cannot be verified, omit it. If imagery is insufficient, design a strong limited visual direction rather than using generic stock.

## Deliverables

Create from scratch in this directory:
- `index.html` — the production site the clinic could publish.
- `proposal.html` — separate outreach/sales document; it must not be linked from production navigation or footer.
- `styles.css`
- `script.js`
- `assets/`
- `SOURCE_MANIFEST.md`
- `BUILD_REPORT.md`

No framework, package manager, CMS, fake form submission, or backend. A form may only be present if clearly non-submitting; prefer direct verified scheduling/contact links.

## Design direction

This must not be a generic blue medical template. Derive the design system from the clinic’s real identity and physical/clinical context. Prioritize calm clinical authority, accessibility, legible typography, deliberate mobile composition, visible verified professionals/specialties, and one dominant appointment pathway. Preserve or outperform the strongest visual/emotional qualities of the current official site while removing demo-template residue and competing overlays.

Avoid card-grid sameness, huge empty space, repeated ruled rows, excessive pills, generic gradients, invented statistics, and stock-photo clichés. Give the hero and every below-fold section independent art direction.

## Production/proposal separation

`index.html` must contain no wording such as proposal, redesign, concept, prototype, diagnosis, evidence, audit, before/after, non-affiliation, pitch, or limitations. It must look like the real clinic site.

`proposal.html` must be a concise persuasive sales narrative:
1. opportunity/result;
2. visual evidence of the proposed direction;
3. prioritized improvements;
4. deliverables;
5. dependencies;
6. sequence/timeline;
7. one explicit next step;
8. compact factual disclosure at the bottom.

Do not use the clinic’s logo as if the proposal were authored by the clinic.

## Mandatory quality gate

Read and follow `PROSPECT_BRAND_STYLE_GATE.md`. The site must be designed to pass:
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
- proposal is absent from production navigation/footer.

Record real commands/results and any limitations in `BUILD_REPORT.md`. Do not deploy or publish. Finish the actual files and verification, not a plan.