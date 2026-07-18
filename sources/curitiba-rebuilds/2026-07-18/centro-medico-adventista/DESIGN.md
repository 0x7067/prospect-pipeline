# Design System: Centro Médico Adventista | Curitiba — care-network concept

## Overview

Creative North Star: This concept can only belong to Centro Médico Adventista Curitiba because it organizes the verified promise of 30+ specialties, 24+ convênios, two Bigorrilho units and lab follow-up into a calm care-network map rather than an interchangeable clinic landing page.

Compositional thesis: the page is built as a literal **route diagram** — two real unit nodes (Alameda Júlia da Costa, 1447 and Alferes Ângelo Sampaio, 2585, both Bigorrilho) connected through one central appointment node. That diagram opens the page, and every later section is a deeper stop on the same route: fit (specialty/convênio) → proof (real editorial imagery) → the two nodes again, now with full address/hours/map detail. Nothing on the page is a generic hero-plus-card-grid; the network IS the layout.

## Colors (computed in OKLCH from the two retained hex brand cues)

Strategy: **Committed**. Adventist blue owns the network/authority moments; sand is reserved exclusively for the patient-guidance ("fit") surface; green is a restrained confirmation accent, never a body-text color at small sizes (fails contrast at its native value).

| Token | Hex | OKLCH | Role |
|---|---|---|---|
| `--blue-900` (ink-deep) | `#001F4E` | oklch(24% 0.110 243.6) | Hero / network / units section background |
| `--blue-800` | `#002A5A` | oklch(28% 0.110 243.6) | Hero gradient floor, secondary panel |
| `--blue-700` (brand, retained) | `#005A8D` | oklch(45% 0.110 243.6) | Primary CTA, links, icon strokes on light bg |
| `--blue-200` | `#8DD6FF` | oklch(85% 0.110 243.6) | Hairline dividers / connector lines on dark bg |
| `--blue-050` | `#EAF7FF` | oklch(97% 0.020 243.6) | Rare tint on white surfaces (badges) |
| `--green-700` (text-safe, derived) | `#345B00` | oklch(42% 0.160 127.6) | Confirmation labels/text needing green identity (7.95:1 on white) |
| `--green-500` (brand, retained) | `#78A22F` | oklch(66% 0.149 127.6) | Large-scale icon fills / graphic accents only (3.0:1 — never body text) |
| `--sand` (proposed, not official) | `#F3EFE7` | oklch(95.3% 0.0115 84.6) | Patient-guidance surface only (specialty/convênio fit section) |
| `--ink` | `#0A131A` | oklch(18% 0.02 243.6) | Body text on sand/white (16.3:1 on sand) |
| `--white` | `#FFFFFF` | — | Editorial photography band background |

Rationale for the evolution: deep blue (arrival/authority) → warm sand (patient decision-making, calm paper surface distinct from utility chrome) → white (let three real editorial photographs carry color) → deep blue again (the two nodes, now fully detailed — the loop closes). Four registers, each earning its background through a different job, not decoration.

Contrast verified (WCAG relative luminance, computed): blue-700 on white 7.38:1; blue-700 on sand 6.43:1; ink on sand 16.34:1; white on blue-900/blue-700 7.38:1+; green-700 on white 7.95:1, on sand 6.93:1. Native green-500 (3.0:1) is used only as a ≥24px icon fill, never as text.

## Typography

Deliberate display/body pairing on the geometric-vs-humanist contrast axis: **Archivo** (900/800, tight tracking) for display headings, and **Libre Franklin** (400/500/600) for body, labels, and UI. Archivo's origin as an American grotesk drawn for headline/signage use gives the display layer a wayfinding character that reinforces the route-map thesis — every `<h1>`/`<h2>`/`<h3>` reads like a directional sign, not a SaaS hero. Libre Franklin stays for everything else (body copy, nav, buttons, form labels) because its warmer humanist letterforms are calmer at reading sizes and it already carries "clear numeric and uppercase forms" (BRAND_SOURCE). Neither face appears on the reflex-reject list. A single modular type scale (ratio 1.25–1.33, six steps: 0.75rem / 1rem / 1.25rem / 1.625rem / clamp 1.75–2.4rem / clamp 2.25–3.6rem) replaces the earlier ad hoc per-component sizes so hierarchy reads at a glance rather than through a dozen near-identical sizes. `text-wrap: balance` on headings, fixed `rem` body at 16px minimum, `font-variant-numeric: tabular-nums` on phone/CEP/hours figures.

## Elevation

Flat. No card shadows anywhere; hierarchy comes from the four background registers, rules (1px hairlines), and the connector lines of the network diagram itself. The only "raised" surface is the sticky nav bar (a 1px bottom hairline, no shadow).

## Concept rules (from prospect brief, binding)

1. **Composition**: care-network map — two unit nodes + one central appointment node, not hero-plus-cards. Implemented as an SVG/CSS route diagram in the hero, revisited literally in the units section.
2. **Typographic idea**: one civic grotesk (Libre Franklin), committed weight contrast, wide letter-spacing on uppercase labels only.
3. **Image-treatment rule**: the three real editorial photographs (vegetarianism/breathing/light wellness pieces already published by the clinic) are cropped to one fixed 4:5 ratio, held in a single accent-blue 1px hairline frame, and desaturated to 82% with a subtle blue-hue overlay at fixed 12% opacity — one consistent rule applied identically to all three, never a shadow-box or gradient vignette.
4. **Color evolution**: deep-blue → sand → white → deep-blue (see Colors above).
5. **Emotional promise**: "Agende aqui suas consultas, exames e procedimentos" (verbatim strongest public language) — calm, coordinated care, not a portal to click through.
6. **Conversion path**: WhatsApp appointment is the one primary action repeated at hero + sticky nav + both unit nodes + footer; convênios/specialties/exam-results/contact are explicit, clearly secondary routes — never competing equally with appointment.

## Quality bar

Three distinct art-directed moments implemented: (1) the network-diagram hero on deep blue, (2) the sand-surface searchable specialty/convênio fit instrument, (3) the white asymmetric editorial photography band. A fourth movement (units + hours, deep blue) closes the loop. No repeated generic card grid; the specialty list is a dense, searchable, alphabetically-grouped scan surface, not a row of icon+heading+text cards. No decorative gradients or glassmorphism. Mobile collapses the network diagram into a vertical route rail (appointment node first, then both units), not a naive stack.

## Components

- Sticky nav: logo + 4 text links + one persistent WhatsApp CTA button. No duplicated nav.
- Route-node card (used for hero units and footer units): name, address, hours teaser, "Como chegar" (real Google Maps link already published by the clinic) + WhatsApp CTA. Same component, two registers (compact hero node vs. full footer node).
- Specialty index: alphabetical list of 28 independently re-verified named specialties (from especialidades + profissionais evidence pages), grouped by first letter, live-filterable by a real client-side search input (no network calls).
- Convênios block: honest aggregate claim only ("mais de 24 convênios") — no invented insurer names, since no literal name list was recoverable from evidence. CTA routes to WhatsApp to confirm a specific plan.
- Editorial photo band: three real images, fixed treatment (see rule 3 above), asymmetric offset grid (not equal-width cards).

## Do's and Don'ts

Do tailor the system to the verified rebuild opportunity. Don't copy proprietary logos/photos/layouts/substantial text beyond what's explicitly sanctioned as reusable evidence, invent claims, fabricate proof, or use a generic AI landing-page template. Don't add a booking form — no evidence supports an online booking capability; WhatsApp/phone/email are the only evidenced channels.

Pinned Impeccable commit: `44c27a72af98394c32691ba79358811bff86bde6`. Provision manifest: `{"claude": {"files": 96, "root": ".claude/skills/impeccable", "sha256": "a0aee9315892f465b4b66327b5f5c1e37208cb1fb14d19b1ebef18b78fe319f8"}, "codex": {"files": 99, "root": ".agents/skills/impeccable", "sha256": "e3ca77ec39e0490702d139744352119572c1f9694821482f420bc488944d8796"}}`.
