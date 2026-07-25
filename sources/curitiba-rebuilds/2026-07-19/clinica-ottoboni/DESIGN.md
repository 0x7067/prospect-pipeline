# Design System: Evidence-bounded redesign seed

## Overview

Creative North Star: Design the clinic as a guided consultation atlas: patients enter through a need, understand the relevant specialty and clinician, then reach a calm, specific appointment invitation without the current broken proof or generic detours.

This concept can only belong to Clínica Ottoboni because its three documented disciplines are treated as one connected consultation route: need → specialty → credential context → direct contact, preserving the clinic's integrated-care equity while removing the live site's generic detours.

Physical scene: a patient reviews a precise, quietly reassuring consultation map in a bright Curitiba treatment room, with clear bearings and no sales pressure.

## Colors

The supplied sources do not assert exact canonical tokens. The direction therefore uses an accessible, restrained palette anchored to the provisioned Impeccable seed rather than claiming official brand colors: pure clinical white; blue `oklch(0.55 0.105 230)` for the atlas route and actions; deep blue ink `oklch(0.22 0.035 235)`; pale blue surface `oklch(0.96 0.012 230)`; and a selective plum `oklch(0.40 0.10 330)` for specialty transitions. Strategy: committed restraint, with blue carrying the route and plum appearing only at key handoffs.

## Typography

Display voice: a humanist serif with open counters and measured contrast, used for short, emotionally calm headings. Body/navigation voice: a practical humanist sans with explicit numerals and compact labels. The pairing should feel like a well-made clinical atlas, not a luxury editorial spread. Body copy must remain WCAG AA and comfortable on mobile. Avoid the register's reflex-reject families.

## Elevation

Flat by default. Use elevation only to communicate interaction or hierarchy; avoid nested cards and decorative glass effects.

## Concept rules

Define one recognizable composition, one brand-connected typographic idea, one image-treatment rule, one deliberate color evolution, one verified emotional promise, and one conversion path.

- Composition: a continuous vertical route line connects three asymmetric art-directed moments: the hero compass, the specialty crossing, and the contact destination.
- Typography: humanist display headings set against precise sans-serif route labels, echoing the documented mix of large humanist headlines and structured labels without copying the live site.
- Image treatment: because no reusable local clinical photography is supplied, do not fabricate people, facilities, or results. Use abstract atlas-like CSS/SVG geometry only; if any sourced image is introduced, crop it as a narrow vertical field with unfiltered color and document provenance.
- Color evolution: white/blue orientation → pale-blue specialty field → deep-ink clinician/contact destination, with plum reserved for handoffs.
- Emotional promise: translate the verified language around personalized, integrated, comfortable and secure care into calm orientation rather than unverified outcome claims.
- Conversion path: select a documented need/specialty context, understand how the three disciplines connect, then choose one of the two verified phone contacts.

## Art-directed moments

1. Hero compass: oversized route typography, a single looping path motif, and the three documented specialties visible without a card grid.
2. Specialty crossing: an asymmetric, interactive three-stop atlas that changes supporting context without inventing treatment lists.
3. Integrated handoff: a full-width typographic braid showing how the documented disciplines coexist, followed by a dark contact destination with address and both phones.

## Mobile rhythm

Mobile is not stacked desktop: the route becomes edge-to-edge, specialty stops become a horizontal snap strip with large tap targets, and the contact destination fixes hierarchy around phone choices before the address. The hero keeps identity, offer, and primary action within the first viewport where content length permits.

## Quality bar

Raise the visual bar above category convention. The build must have a prospect-specific compositional thesis, three distinct art-directed moments, a deliberate typographic pairing, an image-treatment rule, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency templates unless evidence and concept require them. Every major section must earn its space through brand, proof, or conversion value.

## Components

## Do's and Don'ts

Do tailor the system to the verified rebuild opportunity. Don't copy proprietary logos/photos/layouts/substantial text, invent claims, fabricate proof, or use a generic AI landing-page template.

Pinned Impeccable commit: `44c27a72af98394c32691ba79358811bff86bde6`. Provision manifest: `{"claude": {"files": 96, "root": ".claude/skills/impeccable", "sha256": "a0aee9315892f465b4b66327b5f5c1e37208cb1fb14d19b1ebef18b78fe319f8"}, "codex": {"files": 99, "root": ".agents/skills/impeccable", "sha256": "e3ca77ec39e0490702d139744352119572c1f9694821482f420bc488944d8796"}}`.
