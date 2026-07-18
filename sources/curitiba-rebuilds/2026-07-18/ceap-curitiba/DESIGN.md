# Design System: Evidence-bounded redesign seed

## Overview

Creative North Star: This concept can only belong to CEAP Curitiba because it turns the school's real course catalog (health and industrial tracks), verified internship agreements, and enrollment requirements into a clear path from "see the courses" to "start a pre-enrollment conversation" — replacing a consent-modal-blocked, CTA-less home with a straightforward one.

## Colors

Preserve the official brand green (`#3db166`, sampled directly from the live site's stylesheet/inline styles) as the primary action color, and the dark navy (`#1e2d49`, also sampled from the live site) as the anchoring ink/heading color. Pair with a clean off-white surface and a restrained slate for secondary text, keeping all body-text pairings at WCAG AA (4.5:1) or better. No colors are invented; both hex values are taken from the official homepage's CSS.

## Typography

A confident, readable grotesque/humanist sans for headings (distinct scale, tight tracking on large sizes) paired with a highly legible text-optimized sans for body copy and curricula lists. Numerals must read clearly for schedules, phone numbers, and course durations. Avoid the decorative badge/seal treatment used for the outdated "20 anos" claim on the original site.

## Elevation

Flat by default. Cards for courses use a 1px hairline border and modest radius, not deep shadows. Elevation is reserved for the sticky mobile CTA bar and hover feedback only.

## Concept rules

- One recognizable composition: a two-column hero (proposition + course-track chooser) that immediately proves depth of catalog instead of hiding it behind a cookie modal.
- One brand-connected typographic idea: large numerals for course duration/shifts (turnos) styled as a quiet "curriculum ledger" motif, echoing the school's real grade curricular structure.
- One image-treatment rule: no invented photography; use flat color blocks, iconography, and typographic texture instead of stock people photos, since no licensable official photography was supplied.
- One deliberate color evolution: shift the brand green from a background-flooding hue (as used broadly on the original) to a disciplined accent limited to CTAs, active states, and the numeral motif — freeing the navy and neutrals to carry hierarchy.
- One verified emotional promise: "formação prática com convênios de estágio reais" — grounded in the named hospital/UPA internship partners on the official Técnico em Enfermagem page.
- One conversion path: every course card and the hero lead to a single, consistent "Fale com a secretaria" WhatsApp path (same official number published on the live site), with no invented forms, uploads, or third-party integrations.

## Components

Semantic HTML5 landmarks (header/nav/main/section/footer), visible keyboard focus rings, 44px+ touch targets, an inert (non-JS-dependent) mobile nav toggle, and a fully separate proposal page. Course cards use `<article>` with a definition-list-style fact row (turno, duração, modalidade) rather than paragraphs of marketing prose.

## Do's and Don'ts

Do: tailor the system to the verified rebuild opportunity (hidden CTA, buried catalog, stale "20 anos" claim, pandemic-era testimonial, broken glyphs, stale footer year — all documented in the sourced audit).
Don't: copy the official logo file, invent enrollment prices, fabricate new testimonials, claim accreditation not evidenced, or reuse the exact original marketing copy verbatim beyond short factual course/curriculum terms.
