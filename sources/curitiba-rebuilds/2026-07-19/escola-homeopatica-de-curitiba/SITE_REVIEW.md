# Site review

Status: **early visual direction — not production-complete and not ready for publication.**

## Art direction

- Thesis: a “living house of formation” expressed through thresholds, rooms, editorial spreads and a single grounded address.
- Art-directed moments: cobalt opening door; editorial study-table spread; inset deep-blue social clinic field; oversized street-number threshold.
- Typography: Georgia display / Optima–Candara humanist body and UI, all local and legible.
- Image rule: no unverified imagery. CSS-only architectural linework is monochrome, hard-cropped and content-subordinate.
- Color: cool blue-neutral paper and institutional cobalt opening, white study chapter, deep-blue social chapter, quiet blue-neutral close.

## Required tests

- **Logo-removal test:** pass. With the identity block removed, the door, study spread, clinic field and address composition remain recognizably connected to a school where formation and social practice coexist.
- **Competitor-swap test:** pass with caveat. The exact institution name could not be swapped without rewriting the professional audiences, AMHB cue, social clinic/FEMHPR chapter, 40+ year history and Curitiba address. The visual language alone is intentionally restrained; specificity comes from the complete composition and evidence.
- **Squint test:** pass. Four distinct fields remain: narrow cobalt threshold, spacious academic white, dominant deep-blue clinic, quiet address close. Hierarchy does not rely on repeated cards.
- **Five-second test:** pass. The first viewport communicates “Curso de Especialização em Homeopatia,” the school name, audience-oriented formation, and a direct course path.
- **Below-fold test:** pass. The course decision spread, clinic chapter and institutional axes each introduce a new composition and purpose.
- **Mobile-native test:** pass at design/code review. Content order becomes proposition → audiences → course inquiry → institutional proof → clinic path → address; navigation is explicit and controls meet the 44px target.

## Evidence and interaction review

- Business claims trace to `prospect.json`, `PRODUCT.md`, or `BRAND_SOURCE.md`.
- Unsupported operational detail is explicitly requested from the school instead of being fabricated.
- No form, tracker, analytics, remote image, remote font, iframe or background external request is present.
- Index language is institution-facing and contains no proposal or prototype disclosure and no proposal link.
- The proposal is separate, explicit about independent/non-affiliated status, and honest about the early tier.

## Before production

Institutional content approval, exact identity/color sampling, confirmed course intake/calendar/tuition details, verified asset permissions, browser/accessibility QA and legal/privacy review remain required. This review does not constitute human approval.

## Release-bound validation

- Final build `ef896a0b16b6e16bac07029ee27efd333040994776a25818cf9dce2a4e5febfb` passed Node syntax validation.
- Playwright passed all six required page/viewport combinations: index, proposal and rationale at 1440 × 900 and 390 × 844. There were no console errors, failed requests, broken images, missing anchors or horizontal overflow.
- The final detector run passed with no findings after one consolidated correction to type hierarchy, proposal leading and status-region padding.
- Final result for this build: **ready as an early visual direction deliverable.** It is not production-complete, approved, or ready for publication.
