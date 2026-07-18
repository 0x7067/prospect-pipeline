# Site review

## Candidate
One hybrid-brand candidate only. Public entry point: `index.html`.

## Content / UX checks
- Emergency orientation appears above elective services.
- Primary CTA opens a keyboard-accessible native contact dialog.
- Conflicting sourced phone numbers are preserved with labels and not silently merged.
- Address and route action are visible in the main page.
- Public `index.html` does not mention proposal, redesign, prototype, or disclosure and does not link `proposal.html`.
- No forms, submissions, publishing, uploads, or background external service calls.

## Verification
- `node --check script.js`: passed with exit code 0.
- Impeccable detector: reran after the focused visual repair pass; returned exit code 0 with 0 findings.
- Playwright reran with `/opt/data/.venvs/curitiba/bin/python` and `PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright` at 1440x900 and 390x844 after the repair pass. Both viewports reported the expected title and H1, visible contact dialog, no page overflow, no dialog overflow, and no console/page errors.
- Focused repair pass: added inset spacing to full-bleed colored sections and the hero art, replaced the rounded-card accent border with an inset shadow, increased quote leading, changed the display font stack, and replaced numbered service markers with descriptive labels. Detector and JavaScript syntax checks were rerun after the edits.

## Known limitation
The requested `BRAND_SOURCE.md` and `PROSPECT_BRAND_STYLE_GATE.md` were not present for this prospect, so the identity uses only the supplied product/design brief and sourced facts in `prospect.json`.
