# Design direction: A Trilha até a Vida

## Overview

Creative North Star: the three evidenced education stages (Ensino Infantil, Ensino Fundamental I e II, Ensino Médio) become a single literal path the visitor walks. A continuous trail rule runs down the page and the color field deepens stage by stage — near-white at the Infantil opening to a deep dusk tone at the Ensino Médio / admissions close — turning the school's own life-preparation promise ("Educando para a vida") into a one-directional color arc instead of a decorative palette swap or a generic timeline-with-icons template.

"This concept can only belong to Colégio Novo Éden because…" it makes the school's own three-stage breadth and 1990 founding the literal shape of the page, not a swappable industry template — a competitor school with different stages or a shorter history could not reuse this structure without rewriting its spine.

## Colors

Retained: the official page's blue link palette (`#0170B9` sampled from CSS) anchors the trail's opening/primary accent, and the official page's "green accents" (per BRAND_SOURCE.md) are introduced at the Fundamental midpoint — both are concept colors pending verification against the rendered logo/hero, as BRAND_SOURCE.md instructs.

- `--paper #eff6fb`, `--white #fff`, `--ink #0d2436`, `--mist #40566b` — the light field (hero, trail body).
- `--sign-blue #0170b9` / `--sign-blue-deep #045c93` — trail opening (Infantil) and primary CTA color, sampled from the official page's link palette.
- `--trail-green #1b6e45` / `--trail-green-deep #145c3a` — trail midpoint (Fundamental) and closing stage (Médio), the official page's secondary "green accents" direction.
- `--dusk #0a2036` / `--dusk-2 #0e2a44` — the admissions/contact close, the trail's destination.

Every pairing actually used was checked analytically (WCAG relative-luminance formula) before implementation and re-verified against the rendered build: body text pairs (ink/paper, ink/white, mist/paper, mist/white) clear 6.9:1+; large-text/UI accent pairs (sign-blue, sign-blue-deep, trail-green, trail-green-deep against paper/white, and their button-reversed forms) clear 4.7:1+; dusk-chapter text (white/paper on dusk) clears 13:1+.

## Typography

Display: `Georgia, "Bitstream Charter", "Liberation Serif", serif` — a sturdy, humanist book-serif voice for headings, the origin-year mark, and the address, distinct from the "bold slogan-led hierarchy" BRAND_SOURCE.md describes on the original but not copying any specific typeface assertion (none was verifiable from the extracted page). Body/UI: `"Segoe UI", Verdana, "Liberation Sans", Arial, sans-serif` — a plain grotesk for body copy, navigation, labels and buttons. This is a genuine serif/sans contrast pair (not two similar geometric or humanist sans faces), and neither face is on the overused-font or brand-register reflex-reject list. Scale uses `clamp()` throughout with ≥1.25 ratio between steps; body remains 18px/1.6 for comfortable mobile reading, all AA.

## Elevation

Flat by default. No cards, no shadows-as-decoration, no glassmorphism. Hierarchy comes from the continuous trail rule, full-bleed color fields (dusk close), and type scale — never nested containers.

## Concept rules

- **Recognizable composition:** a single vertical trail rail that begins at the hero (origin-year node), threads through three alternating editorial stage entries (not a card grid), and ends at a destination node in the dusk admissions chapter.
- **Typographic idea:** the serif display voice carries only origin-anchored and address moments (origin year, address) in italic, echoing a handwritten waypoint marker on a map/trail; body/UI sans carries everything structural.
- **Image-treatment rule:** zero photography. No downloadable logo, photo, or screenshot file exists in the supplied evidence — `brand_source.visual_assets` and `original_screenshots` resolve only to the live page URLs, not files. Stock photography standing in for this specific school's unverified students/campus would misrepresent them, so the honest choice is original CSS-native trail devices only (trail rule, trail dots, origin/destination numeral watermarks), always monochrome-or-single-accent and subordinate to the type they sit behind.
- **Color evolution:** paper/white (Infantil, light) → blue-to-green trail transition (Fundamental, midpoint) → deep dusk (Médio + admissions, the destination). One direction, never reversed, mapped onto age progression.
- **Emotional promise:** "Educando para a vida" — verified public language — restated as a practical, walkable journey rather than a slogan.
- **Conversion path:** "Agende uma visita" appears on the first screen with hours/phone already inline, and again in full (address, hours, phone, email) at the dusk close — fixing the sourced defect of contact details being absent from the homepage.

## Quality bar

Four art-directed moments ship (exceeds the three-moment minimum): (1) the hero threshold with a real H1 and inline visit logistics, (2) the alternating stage trail, (3) a centered founding/values pause, (4) the full-bleed dusk admissions chapter. No hero-plus-card-grid default, no repeated identical cards (the three trail entries alternate indent and stage color rather than repeating one shape four-plus times), no decorative gradients, no glassmorphism, no tiny uppercase tracked eyebrow above the hero H1, no numbered 01/02/03 section markers.

## Components

- `.trail-list` / `.trail-item`: the alternating stage sequence (not `<ul>` cards) with a shared `::before` gradient rail.
- `.button` / `.button-light` / `.button-outline`: three CTA treatments distinguished by field (paper hero, dusk primary, dusk secondary), never a fourth arbitrary variant.
- `.identity` / `.identity-mark`: monogram lockup reused in header and footer, inverted color on the dusk footer.

## Do's and Don'ts

Do tailor the system to the verified rebuild opportunity: three real stages, one real founding year, one real address. Don't copy proprietary logos/photos/layouts/substantial text, invent accreditation/partnership/enrollment claims, fabricate proof, or use a generic AI landing-page template.

Pinned Impeccable commit: `44c27a72af98394c32691ba79358811bff86bde6`. Provision manifest: `{"claude": {"files": 96, "root": ".claude/skills/impeccable", "sha256": "a0aee9315892f465b4b66327b5f5c1e37208cb1fb14d19b1ebef18b78fe319f8"}, "codex": {"files": 99, "root": ".agents/skills/impeccable", "sha256": "e3ca77ec39e0490702d139744352119572c1f9694821482f420bc488944d8796"}}`.

## Deliverable status

Deliverable tier: `early_visual_direction`. This build is not production-complete and not ready for publication.
