# Design System: Evidence-bounded hybrid redesign

<!-- Seed scaffold: Impeccable craft replaces inferred choices with an implemented, evidence-compatible system. -->

## Overview

Creative North Star: This concept can only belong to Centro Médico Trinità because it turns the clinic's own verified specialist roster (11 named physicians, real CRM numbers, 15 documented areas of practice) into a direct symptom/specialty-to-physician scheduling path, replacing the two blocking overlays and empty-space defects of the live site with calm clinical wayfinding.

## Colors

Retained exactly from the official site's rendered CSS: `#3C5750` (primary green, `rgba(60,87,80,1)` site-wide) and `#D3D0BF` (sand accent, `rgba(211,208,191,1)`). Section background evolved from the sourced `#F8F8F5` to a warmer `#F8F6F1` paper. A deepened `#24352F` green-900 is introduced as a purposeful evolution for higher-contrast headings and footer, documented as not present verbatim on the source site. All body-text pairs verified ≥ 7:1 contrast; button/label pairs verified ≥ 5:1.

## Typography

The source site's Montserrat use is recorded in `BRAND_SOURCE.md`, but the concept deliberately evolves beyond that generic single-family treatment. Atkinson Hyperlegible carries sustained reading and controls; its differentiated letterforms support the accessibility objective for a clinic whose documented areas include geriatrics. Literata gives headings a calm editorial voice suited to specialist wayfinding. The verified logo, green/sand palette, photography, and language preserve recognizable equity; the type pairing is a documented concept-level evolution, not an inferred business claim.

## Elevation

Flat by default. Photography and specialty wayfinding carry hierarchy; no nested cards, no decorative glass.

## Concept rules

1. **Recognizable composition:** a symptom/specialty rail that behaves like a clinical directory index, not a generic icon grid — the visitor moves from "área de atuação" to "especialista" to "agendar" in one visible path.
2. **Brand-connected typographic idea:** Atkinson Hyperlegible makes sustained reading and controls easier to distinguish, while Literata gives clinical headings an editorial specialist voice; verified logo, color, imagery, and language—not a generic single-family template—carry the source identity.
3. **Image-treatment rule:** official interior photography (waiting room, corridor, consultório) is used uncropped-in-spirit — full-bleed or generously cropped, never squeezed into small decorative thumbnails — because the source site's real assets are the strongest verified equity.
4. **Deliberate color evolution:** the sourced green/sand pair is retained exactly; the only addition is a deepened green-900 for contrast-critical text, documented above.
5. **Verified emotional promise:** "atenção, empatia, profissionalismo e respeito ao paciente" — verbatim from the clinic's own published language — is the single emotional throughline, not an invented tagline.
6. **Conversion path:** Doctoralia scheduling + WhatsApp are the only two calls to action, presented consistently in the header, hero, and contact section, with zero competing overlays on load.

## Components

Semantic HTML, visible focus states, ≥44×44px touch targets, inert demo interactions only (no real form submission), and a separate proposal page never linked from production markup. Physician cards, specialty rail, and location/contact block establish hierarchy through spacing and photography before any decoration.

## Do's and Don'ts

Do tailor the system to the verified rebuild opportunity: symptom/specialty wayfinding, accessibility (pinch-zoom restored, AA+ contrast throughout), no competing overlays, literal counts instead of invented metrics. Don't copy the source site's exact layout/CSS, invent claims, fabricate outcomes/awards/testimonials, or default to a generic blue medical template.

Pinned Impeccable commit: `44c27a72af98394c32691ba79358811bff86bde6`. Provision manifest: files present under `.agents/skills/impeccable` in this project (99 files, codex root).
