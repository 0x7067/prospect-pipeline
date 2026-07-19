# Site review — Colégio Novo Éden (early visual direction)

Reviewed 2026-07-19. One design/build pass, one consolidated repair pass, one browser-validation pass (desktop + mobile inspection), detector run twice per the speed budget.

## Anti-template tests (recorded after the final build)

### Logo-removal test
The "NE" monogram was removed mentally: the page still reads unmistakably as this concept. The trail device (continuous color-deepening rule with stage dots), the vertical italic "1990" origin rail in the hero, and the dusk-tinted admissions close with the oversized "1327" address numeral are original, prospect-specific devices with no dependence on the identity mark. Pass.

### Competitor-swap test
Swapping the name to a generic school would not survive contact: the copy is bound to the evidence (Sítio Cercado, Rua Mandirituba 1327, since 1990, (41) 3289-9436, 07:20–19:00, the three named stages, "Educando para a vida", "Uma escola, muitos sonhos realizados!"). More importantly the composition itself encodes the prospect's specific fact pattern — three evidenced stages rendered as one color-arc trail, and the observed defect (phone/hours hidden on a contact page) fixed by the first-screen visit strip. A competitor with a different founding year, address, and stage structure could not reuse this page without rewriting both copy and layout anchors. Pass.

### Squint test
At squint distance the page reads as four distinct zones: a light asymmetric hero (dark H1 block + thin right rail), a white trail section with a single left rule and three staggered text blocks, a centered quiet paper-tone values interlude, and a deep dusk closing band with light type. Blue → green → dusk color evolution is legible without reading. No repeated same-size card shapes. Pass.

### Five-second test
Five seconds in, a visitor can answer: which school (header + H1 context), what it offers (Infantil → Médio stated in the first paragraph), and what to do next (Agende uma visita button, hours and phone directly beneath it on the first screen). Pass.

### Below-fold test
Below the fold the page does not collapse into a card grid: the trail section is an editorial alternating list with a continuous rule, the values section is a centered compositional pause with a hairline-separated value strip, and the visit section is a dark chapter with oversized ghost address numeral. Each zone has a different composition and rhythm. Pass.

### Mobile-native test
Mobile (≤860px) is not a shrunk desktop: the hero rail flips from vertical to a horizontal origin strip (year inline, trail node at right), the trail list tightens to a 32px marker column with the rule at 15px, stage indents are removed, visit actions become full-width stacked buttons, and the footer stacks. Inspected at 390px: no horizontal overflow, no overlap, tap targets ≥44px. Pass.

## Art-directed moments (required: ≥3; delivered: 4)
1. The Threshold — asymmetric hero with real semantic H1, vertical italic origin-year rail, and an inline visit strip (hours + phone) on the first screen.
2. The Stage Trail — continuous CSS rule that changes color per stage (blue → green → deep green), staggered editorial list items instead of cards.
3. Founding & Values — centered, quiet paper-tone interlude with hairline value strip; deliberate compositional pause.
4. Dusk / Admissions — deep dusk closing chapter, oversized ghost "1327" address numeral, full contact logistics (address, hours, phone, e-mail) surfaced.

## Image-treatment rule (documented in DESIGN.md)
Zero photography and zero stock substitution: the supplied evidence provides no downloadable logo, photo, or screenshot file (only live URLs), so all visual devices are original CSS-native marks (trail rule, trail dots, year/numeral watermarks). This is the honest choice and is stated in SOURCE_MANIFEST.md.

## Detector history
- Run 1 (initial implementation): 7 findings in proposal.html — 6× cramped-padding advisories plus flat-type-hierarchy (sizes 13.1–18.4px).
- Repair pass (single, consolidated): widened proposal section rhythm (padding 3–4.5rem, margins 3–4.5rem between bordered bands, 2rem inset inside .status-band), and collapsed the proposal type band into three clear steps — flag label 0.8rem, body copy 1.05rem, display type — removing the near-duplicate 13.1/13.6/14.4/14.7px sizes.
- Run 2 (after repair): reported via validate_curitiba_site.py; result recorded in .pipeline-validation.json and .impeccable-detector-receipt.json.

## Honest status
Deliverable tier: early_visual_direction. Not production-complete, not ready for publication: brand palette/typography are concept-level (the official hex sampling caveat in brand_source.colors stands), all facts require institutional validation, and no legal/accessibility review has been performed. No approval or publication receipt is written by this builder.
