# Centro Médico Adventista | Curitiba — care-network static rebuild

An evidence-bounded, unsolicited static redesign concept for the qualified prospect **Centro Médico Adventista | Curitiba** (`https://curitiba.clinicaadventista.org.br/`). Built entirely from publicly verifiable evidence; see `SOURCE_MANIFEST.md` for the full citation trail.

## Files

| File | Purpose |
|---|---|
| `index.html` | The production-realistic redesign concept. No proposal/redesign/prototype language, no link to `proposal.html`. |
| `proposal.html` | The separate, independent, persuasive sales document. Explicitly non-affiliated, `noindex,nofollow`. |
| `rationale.html` | Compatibility redirect to `proposal.html` only. |
| `styles.css` | Complete design system (tokens, layout, components). |
| `script.js` | Specialty search/index, mobile nav, footer year, sticky-nav shadow. No network calls, no tracking. |
| `assets/brand/logo-principal.png` | Official logo, downloaded unmodified from the clinic's own asset path. |
| `assets/site/*.jpg` | Three official editorial photographs, downloaded unmodified from the clinic's own asset paths. |
| `comparison/capture-status.json` | Truthful fallback for the proposal comparison grid; states that captures are unavailable until generated. |
| `SOURCE_MANIFEST.md` | Full evidence citation trail — every business-specific claim traced to a source. |
| `SITE_REVIEW.md` | Recorded verification evidence (detector runs, browser checks, anti-template tests). |
| `DESIGN.md` | Design system rationale: compositional thesis, palette computation, typography, image-treatment rule. |
| `BRAND_SOURCE.md` | Original verified brand-source JSON supplied with the prospect brief. |
| `prospect.json` | The qualified-prospect brief this build was generated from. |

## Design summary

**Compositional thesis:** the page is a literal route diagram — two real unit nodes (Alameda Júlia da Costa, 1447 and Alferes Ângelo Sampaio, 2585, both Bigorrilho) connected through one central appointment node. The hero renders this as an SVG/CSS network map (desktop) or a vertical route rail (mobile); the units section revisits it with full address/hours detail, closing the loop.

**Color evolution:** deep blue (arrival/authority, hero) → warm sand (patient decision-making, the specialty/convênio "fit" instrument) → white (editorial photography, let the three real images carry color) → deep blue again (units + hours). Palette computed in OKLCH from the two retained brand hex cues (`#005A8D`, `#78A22F`) plus one proposed sand surface (`#F3EFE7`, explicitly not claimed as an official color). Contrast ratios computed and recorded in `DESIGN.md`.

**Typography:** deliberate display/body pairing on the geometric-vs-humanist contrast axis: **Archivo** (800/700) for display headings, and **Libre Franklin** (400/500/600/700) for body, labels, and UI. Archivo's wayfinding sign character reinforces the route-map thesis. A six-step modular type scale (ratio 1.25–1.33: 0.75rem / 1rem / 1.25rem / 1.625rem / clamp 1.75–2.4rem / clamp 2.25–3.6rem) replaces the earlier ad hoc per-component sizes so hierarchy reads at a glance.

**Image-treatment rule:** the three real editorial photographs are held to a fixed 4:5 crop, a 1px blue-700 hairline frame, `saturate(0.82)`, and a fixed 12%-opacity blue overlay — one rule applied identically to all three.

**Conversion path:** WhatsApp appointment (`https://api.whatsapp.com/send?phone=554132402900`) is the single primary action, repeated in the sticky nav, hero, both unit cards, and footer. Convênios/specialties/exam-results/contact are explicit, clearly secondary routes.

## How to view

```bash
cd /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-adventista
python3 -m http.server 8000 --bind 127.0.0.1
# then open http://127.0.0.1:8000/index.html
```

`proposal.html` and `rationale.html` are reachable directly (`/proposal.html`) but are not linked from `index.html`.

## Verification

See `SITE_REVIEW.md` for the full record: pinned-detector gate output, desktop/mobile browser passes, anti-template test observations (logo-removal, competitor-swap, squint, five-second, below-fold, mobile-native), and the final receipt status.

## Non-affiliation

This is an unsolicited, independently prepared static redesign concept. It is not published, not requested, and not endorsed by Centro Médico Adventista | Curitiba. `index.html` is designed to be production-realistic in tone but is not a live or deployed site. No forms submit data anywhere in this build; no external service is called besides the Google Fonts stylesheet and the clinic's own already-public WhatsApp/email/map links.
