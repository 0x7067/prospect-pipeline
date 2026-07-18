# Site review

## Scope

One hybrid-brand static candidate for Clínica Curitiba de Odontologia. This is a **focused repair pass** on the existing site (no rebuild, no variants). Reviewed at 1440×900 and 390×844 with local assets only.

## Intended experience

The homepage leads with the sourced line “Beleza e saúde juntos.” and a treatment chooser, then places science/ethics language, responsible technical dentist, Água Verde address, own parking, and phone in the same narrative. The conversion path is intentionally phone-first and does not submit data or call an external service.

## What changed in this pass

Before starting, the repair re-ran the gate and found it **actually failing** (`gate_exit_code: 2`, 26 unique findings across `index.html`/`proposal.html`/`styles.css`) — the prior copy of this file recorded a PASS that no longer matched the state on disk. This pass fixes the concrete findings without inventing content or breaking the public/proposal separation:

- **Hero eyebrow chips** (`index.html`, `proposal.html`): removed the standalone uppercase kicker sitting directly above each `<h1>`. The location fact ("Água Verde") remains in the hero note; the proposal date now reads as a normal sentence in the lede instead of a chip.
- **Wide letter-spacing**: every declared `letter-spacing` above 0.05em in `styles.css` (brand mark, eyebrow labels, image captions, section labels, dentist label, mobile nav toggle) reduced to 0.04em.
- **Tight line-height**: `.trust-strip p` raised from 1.2 to 1.4; `proposal.html`'s headings and body paragraphs, which previously relied on inherited/implicit line-height, now carry an explicit ≥1.35 (headings) / 1.6 (body) value.
- **Cramped padding**: `.hero-image` and `.clinic-photo` gained a 12px inset so the photo no longer sits flush against its own background on all sides; `.trust-strip`'s divider borders (which produced a flush-right measurement) were replaced with a 38px flex gap — same visual rhythm, no hard boundary; `proposal.html`'s `.treatment-card` divs had **no padding at all** (the shared rule only targeted `<a>` elements, a real bug) — fixed by extending the padding rule to `.treatment-card`.
- **Overused / single font**: base font changed from Arial to a humanist-sans stack (`Verdana, Tahoma, Geneva, sans-serif`, keeping the brand-source direction of "a highly readable humanist sans"); `proposal.html`'s `<h1>` now uses the Georgia serif already established elsewhere in the system (hero italic, trust-strip numerals) as its display pairing, so the page no longer reads as single-font Arial.
- **Numbered section markers / repeated kickers**: removed the "01/02/03…" numbering from the treatment cards (index) and the trust-strip step badges (replaced with a neutral ✦ mark), and removed the repeated "0X / LABEL" kickers from the three proposal treatment cards (their background colors — mist / blush / teal — already differentiate them).

No sourced facts, claims, phone number, address, dentist name, service list, or the phone-first conversion path were changed. `proposal.html` remains unlinked from `index.html`.

## Verification record — results

- `node --check script.js`: **PASS** (exit code 0), before and after.
- Impeccable detector gate (`impeccable_detector_gate.py`):
  - **Before repair (re-verified at session start)**: exit code **2**, status `findings`, 26 unique findings (warnings: hero-eyebrow-chip ×2, wide-tracking ×5, cramped-padding ×5, tight-leading ×2, overused-font ×3, single-font ×1; advisories: numbered-section-markers ×2, repeated-section-kickers ×3).
  - **After repair**: exit code **0**, status `clean`, **0 findings**, build id `7087518f86ff3ff159b7b3469e140108a1b121c0773b438005ab02f95d1c8271`.
- Playwright at 1440×900 (`/opt/data/.venvs/curitiba/bin/python`, browsers at `/opt/data/.cache/ms-playwright`): title `Clínica Curitiba de Odontologia | Beleza e saúde juntos`; H1 `Beleza e / saúde juntos.`; 0 console errors; 0 page errors; `scrollWidth === clientWidth` (1440, no horizontal overflow); desktop nav visible without interaction; 2 CTA buttons found.
- Playwright at 390×844: same title/H1; 0 console errors; 0 page errors; `scrollWidth === clientWidth` (390, no horizontal overflow); nav hidden initially (`aria-expanded=false`), opens on menu tap (`aria-expanded=true`, nav visible), and closes again after tapping a nav link (`aria-expanded=false`); 2 CTA buttons found.

## Known limits

The supplied evidence includes a generic hostinger email, which is deliberately not placed in the primary conversion path. No unsupported claims, testimonials, awards, response-time promises, or clinical outcomes were added or removed. `proposal.html` stays separate from the public experience; `index.html` does not link to it. This was a targeted repair of concrete detector/design findings on the existing single candidate — no rebuild, no additional variants, and the detector's own source was not inspected (only its documented CLI/gate script was run as a black box).
