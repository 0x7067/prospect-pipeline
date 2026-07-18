# Site review

Status: **ready for independent review**. The repaired static build passes the pinned detector and the required desktop/mobile browser matrix. This status does not claim business approval or publication.

## Direction under review

The page follows a quiet appointment journey: reassurance → published forms of care → official space imagery → concise review proof → visit/contact. The continuous marker path, serif-only reassurance passages, cropped official image windows, and coral-only scheduling action form the identifying system.

## Repair pass

The bounded correction addressed all prior detector families together:

- Removed the eyebrow labels above both hero headlines and integrated the homepage location context into the reading copy.
- Reduced the homepage to a deliberate 12.8px / 16px / 28px text scale before the larger display headings.
- Replaced the proposal's cream document surface with a cool blue clinical surface tied to the retained Oralclin palette.
- Removed the long uppercase proposal badge and revised em-dash-heavy sentences into direct prose.
- Corrected the telephone URI values to the verified numbers supplied in `BRAND_SOURCE.md`.

## Evidence policy

Business facts remain mapped in `SOURCE_MANIFEST.md`. Exact hours and unsupported individual testimonial quotations remain excluded.

## Browser evidence

The standardized validator ran Playwright Chromium for `index.html`, `proposal.html`, and `rationale.html` at 1440×900 and 390×844.

- All required navigations passed.
- All pages had zero horizontal overflow.
- No console errors, page errors, failed local requests, broken images, or unresolved local fragments remained.
- The compatibility page resolved to `proposal.html`.
- Machine-readable evidence is in `.pipeline-validation.json` and captures are in `.pipeline-validation-captures/`.

The comparison capture then completed for the current and proposed pages at both exact viewports and as full-page images. Evidence is in `comparison/capture-status.json`.

## Visual adversarial tests

- **Logo removal:** pass. The curved care path, restricted reassurance serif, official clinic windows, and coral-only scheduling action still communicate a calm, human clinic journey.
- **Competitor swap:** pass. Child and older-patient relevance, published review score, new consultório imagery, and the Seminário visit block tie the composition to supplied Oralclin evidence.
- **Squint:** pass. Hero/image split, sparse reassurance path, teal treatment pause, asymmetric image composition, review proof, and dark visit conclusion remain distinct at thumbnail scale.
- **Five second:** pass. The first viewport states integrated dental care, modern equipment, location, published score, and a Portuguese appointment action.
- **Below fold:** pass. Connected reassurance statements, the teal treatment path, asymmetric official imagery, and the resolved contact conclusion sustain the art direction.
- **Mobile native:** pass. Image leads, headline and CTA remain early, care markers tighten, treatment rows recompose, and contact actions become full-width.

## Visual scorecard

| Dimension | Score / 5 |
|---|---:|
| Brand fidelity | 4 |
| Distinctiveness | 4 |
| Hero impact | 4 |
| Below-fold art direction | 4 |
| Typography | 4 |
| Image quality/treatment | 4 |
| Mobile intentionality | 4 |
| Credibility/proof | 4 |
| Conversion clarity | 4 |
| Proposal persuasiveness | 4 |

Average: 4.0/5. All required thresholds are met for handoff to independent review.

## Detector evidence

- Command: `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/oralclin-odontologia`
- Exit code: `0`
- Schema-3 receipt: `.impeccable-detector-receipt.json`
- Detector build ID: `38d9f95f05e0fddcffb394d137caf5bbb20ea1ccd4bc983d29d0c56a96a82969`
- Remaining findings: none.
