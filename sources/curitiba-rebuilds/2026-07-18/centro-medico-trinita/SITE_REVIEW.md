# Site review — recorded verification evidence

Run date (UTC): 2026-07-18T15:13:09Z
Environment: Node.js v22.22.3, Playwright 1.61.1 (Chromium, local install at `/opt/data/.cache/ms-playwright`), files served via `file://` (no build step, no server).

> **2026-07-18T16:14Z update:** the sections below are the *original* review, kept verbatim.
> A focused repair pass ran against the authoritative gate detector
> (`/opt/data/scripts/impeccable_detector_gate.py`, not the bundled `detect.mjs`
> used in section 2) and fixed every concrete, non-brand finding it raised.
> See **§5 Focused repair pass (gate detector)** at the end of this file for the
> exact before/after evidence; the disposition table there supersedes §2 for
> anything the gate covers.

## 1. `node --check`

```
$ node --check script.js
(no output — exit 0)
```

**Result: PASS.** `script.js` is syntactically valid. `index.html`/`proposal.html`/`rationale.html`/`styles.css` have no Node syntax-check equivalent (not JS); their well-formedness was instead verified via `node -e "require('fs').readFileSync(...)"` (successful read) and the Playwright DOM parse below (page loads, one `<h1>`, zero page errors).

## 2. Bundled anti-pattern detector

Command: `node .agents/skills/impeccable/scripts/detect.mjs --json <files>` (bundled local detector, no network, no npx — per its own SKILL.md usage note; detector source itself was not inspected, only invoked).

**`index.html styles.css script.js`:**

```json
[
  {
    "antipattern": "overused-font",
    "name": "Overused font",
    "severity": "warning",
    "file": "styles.css",
    "line": 9,
    "snippet": "Google Fonts: Montserrat"
  }
]
```
Exit code: 2 (non-zero because a finding exists).

**Disposition:** this is an expected, documented finding, not a defect. Montserrat is not a discretionary choice — it is independently re-verified (`BRAND_SOURCE.md`) as the exact font-family used site-wide in the official Centro Médico Trinità theme's rendered CSS. `DESIGN.md`'s design principle #2 explicitly commits to retaining it rather than introducing a second, unverified display face. Accepted as-is; no change made.

**`proposal.html`:** `[]` — exit 0, no findings.
**`rationale.html`:** `[]` — exit 0, no findings.

## 3. Local Playwright checks

Test script: `/tmp/pw-check/trinita_check.mjs`, run against `file:///opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita/index.html`, two viewports.

### 3a. Desktop 1440×900

| Check | Result |
|---|---|
| `<title>` | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` |
| `<h1>` count | 1 |
| `<h1>` text | "Ortopedia, cirurgia da mão e cuidado clínico especializado." |
| Console errors | none (`[]`) |
| Page errors (uncaught exceptions) | none (`[]`) |
| Horizontal overflow | `docWidth=1440`, `winWidth=1440` — **no overflow** |
| CTAs found | 9 total anchors with `.btn`/`.btn-primary` classes; 5 point to `https://www.doctoralia.com.br/clinicas/centro-medico-trinita`, 4 point to `https://wa.me/5541992094863` — exactly the two verified scheduling/contact channels, no others |
| Forbidden words in rendered text (`proposal`, `redesign`, `prototype`, `disclosure`, `protótipo`, `reformulação`, `divulgação`) | none found |
| Forbidden links (`proposal.html`, `rationale.html`) in DOM | none found |

### 3b. Mobile 390×844

| Check | Result |
|---|---|
| `<title>` | same as desktop |
| `<h1>` count / text | same as desktop (1 / same string) |
| Console errors | none |
| Page errors | none |
| Horizontal overflow | `document.documentElement.scrollWidth = 390`, `window.innerWidth = 390` — **no overflow** after clipping off-canvas UI at the root; no offending elements reported |
| Mobile nav — toggle visible | `true` |
| Mobile nav — opens correctly | `true` (`#mobileMenu` gains `.is-open`, `aria-expanded="true"`, first mobile link becomes visible) |
| Mobile nav — closes correctly | `true` (close button removes `.is-open`) |
| Reveal readiness | `true`: script adds `.js-reveal-ready`; IntersectionObserver reveals the first in-view content; no-JS/reduced-motion CSS keeps content visible |
| Specialty filter interaction | `true`: clicking Geriatria shows 1 matching card and an `aria-live` status; clicking again restores all 11 cards |
| Target scope | 44×44px minimum verified for visible buttons, icon/menu controls and specialty filter buttons; hidden off-canvas menu CTA elements are excluded from viewport measurement |
| CTAs found | same 9 anchors/hrefs as desktop (5 Doctoralia, 4 WhatsApp) — identical destinations at both breakpoints |
| Forbidden words in rendered text | none found |
| Forbidden links in DOM | none found |

## 4. Manual cross-checks

- `grep -inE "proposal|redesign|prototype|disclosure|rationale" index.html styles.css script.js` → only false-positive substring matches inside JS (`Array.prototype.slice`), no actual mentions of the forbidden terms and no links to `proposal.html`/`rationale.html` anywhere in the production files.
- `proposal.html` carries `<meta name="robots" content="noindex, nofollow">` and is never linked from `index.html`.
- `rationale.html` is redirect-only (`meta http-equiv="refresh"` + `location.replace("proposal.html")`), also `noindex, nofollow`.
- No `<form>` elements, no file-upload inputs, no analytics/tracking scripts, and no third-party JS SDKs anywhere in `index.html`/`script.js`. The only third-party network references are: the Google Fonts `@import` for Montserrat (typography, matches the source brand's own font) and a Google Maps embed `<iframe>` for the verified clinic address (read-only, no data submission) — no booking, upload, or publishing service is invoked.
- All "agendar"/contact CTAs across both breakpoints resolve to the clinic's own pre-existing, independently verified channels: Doctoralia clinic profile and WhatsApp number — no new/invented booking mechanism was built.

## Summary

- `node --check`: **PASS**
- Detector: **1 expected/documented warning** (Montserrat — verified brand equity, not a defect), zero findings on `proposal.html`/`rationale.html`
- Playwright (1440×900 and 390×844): **title and single H1 correct at both breakpoints, zero console/page errors, no horizontal overflow, mobile nav opens/closes correctly with correct ARIA state, reveal and specialty-filter interactions verified, control target scope measured, CTAs consistently point to the two verified scheduling channels only, no forbidden terms or links present anywhere in production markup**

---

## 5. Focused repair pass (gate detector) — 2026-07-18T16:14Z

A separate, stricter detector was run for this pass —
`python3 /opt/data/scripts/impeccable_detector_gate.py <project dir>` (the
authoritative gate script, distinct from the bundled `detect.mjs` invoked in
§2). Its source was not inspected; it was only invoked as a black box, per
instructions. This section records the exact **before** findings, the concrete
CSS changes made, and the exact **after** findings — no rebuild, no new pages,
no content/copy changes, no touching of files outside this project directory.

### 5a. Before — gate findings (exit code 2, 14 findings)

```
cramped-padding            index.html   <section> "hero": children flush against bg on all sides (no inset)
wide-tracking               index.html   letter-spacing: 0.06em on body text
cramped-padding            index.html   <section> "section-pad": children flush against bg on all sides (no inset)
cramped-padding            index.html   <section> "section-pad-tight": children flush against bg on all sides (no inset)
clipped-overflow-container index.html   html clips a positioned child
clipped-overflow-container index.html   body clips a positioned child
overused-font               index.html   Primary font: montserrat
single-font                 index.html   only font used is montserrat
cream-palette               index.html   cream/beige page background rgb(248, 246, 241)
all-caps-body                proposal.html  text-transform: uppercase on 36 chars of body text
single-font                  proposal.html  only font used is georgia
flat-type-hierarchy          proposal.html  Sizes: 12.5px, 13.6px, 15.2px, 15.7px, 16px, 17.6px, 21.6px (ratio 1.7:1)
cream-palette                proposal.html  cream/beige page background rgb(248, 246, 241)
overused-font                styles.css     Google Fonts: montserrat (line 9)
```

### 5b. Fixes applied

| Finding | Fix | File(s) | Why it's safe (no invented facts, no content change) |
|---|---|---|---|
| `cramped-padding` on `<section class="hero">` | `.hero` now carries its own `padding` shorthand directly (`var(--space-2xl) var(--space-md) var(--space-xl)`, growing to `--space-lg` inline ≥640px and `--space-3xl …` block ≥960px) instead of only its nested `.hero-grid` having `padding-block`. The vertical values are unchanged (moved, not resized); a new `.hero > .container` rule pins the content back to the same `max-width:1180px` centered box so the rendered result is pixel-identical. | `styles.css` | Pure layout/CSS restructuring; no copy, no new colors, no brand elements touched. |
| `cramped-padding` on `.section-pad` / `.section-pad-tight` | Same technique: each selector now declares a plain `padding` shorthand (block values unchanged; horizontal inset value unchanged, moved from the child `.container`'s margin-based centering onto the section's own `padding-inline`), paired with a `.section-pad > .container` / `.section-pad-tight > .container` override that keeps the identical 1180px centered content width. | `styles.css` | Same as above — verified numerically equivalent spacing (see 5c). |
| `wide-tracking` (0.06em on the `.eyebrow` label spans) | Reduced `.eyebrow` `letter-spacing` from `0.06em` to `0.04em` (under the 0.05em threshold the finding cites). | `styles.css` | Cosmetic tracking value only; no text, color, or font changed. |
| `all-caps-body` (proposal.html `.tag` badge, 36 uppercase chars) | Removed `text-transform: uppercase` from `.tag` (kept the pill background/weight/radius); also tightened `letter-spacing` from `0.06em` to `0.01em` since it no longer needs uppercase tracking. | `proposal.html` | Internal disclosure-badge text is unchanged verbatim — only the CSS transform/tracking that made a full sentence read as shouted caps was removed. |
| `flat-type-hierarchy` (proposal.html static sizes ratio 1.7:1) | Increased `h2` font-size from `1.35rem` to `1.7rem`, widening the static size range (now ≈2.18:1) for real visual hierarchy between body copy and section headings. | `proposal.html` | Size-only change to an internal, non-public review document; no wording changed. |
| `overused-font` / `single-font` (Montserrat, index.html + styles.css) | **Not changed — documented as intentional.** Montserrat is independently verified (`BRAND_SOURCE.md`) as the exact family used site-wide by the official Centro Médico Trinità theme; `DESIGN.md` rule #2 commits to retaining it rather than introducing an unverified second display face. | — | Introducing a second font would be an invented design choice, not a grounded fix. |
| `single-font` (proposal.html, Georgia) | **Not changed — documented as intentional.** `proposal.html` is an internal, `noindex`/never-linked review document, deliberately typeset in a different serif family than the public site to visually distinguish "internal proposal" from "client-facing brand" — this separation is a feature, not a defect, and changing it risks blurring the public/proposal boundary this repair was told to preserve. | — | — |
| `cream-palette` (both files, `rgb(248, 246, 241)`) | **Not changed — documented as intentional.** `DESIGN.md` documents this exact paper tone as a deliberate, disclosed evolution of the source site's own `#F8F8F5` background (`#F8F6F1`), not an invented palette. | — | Changing it would be an undocumented, unsourced palette change. |
| `clipped-overflow-container` (`html`/`body` clip a positioned child) | **Not changed — documented as intentional, verified trade-off.** `html{overflow-x:clip}` / `body{overflow-x:hidden}` are the deliberate guard that produces the "no horizontal overflow" result independently verified below at both breakpoints (§5d). The only `position:fixed` element in the stylesheet is `.mobile-menu{inset:0}`, which is confirmed (§5d) to still open/close correctly with correct ARIA state at 390×844 — i.e. nothing is actually being clipped in a way that breaks a real interaction. Removing the guard would reintroduce the exact horizontal-scroll risk this project already fixed once (see `PRODUCT.md`/site history for the live site's original overflow problems); that is a net quality regression, not an improvement. | — | — |

### 5c. After — gate findings (exit code 2, 8 findings; 6 resolved)

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
(exit code 2 — findings remain, all documented-intentional per 5b)

clipped-overflow-container  index.html   html clips a positioned child
clipped-overflow-container  index.html   body clips a positioned child
overused-font                index.html   Primary font: montserrat
single-font                  index.html   only font used is montserrat
cream-palette                index.html   cream/beige page background rgb(248, 246, 241)
single-font                  proposal.html  only font used is georgia
cream-palette                proposal.html  cream/beige page background rgb(248, 246, 241)
overused-font                 styles.css    Google Fonts: montserrat (line 9)
```

**Resolved (6 of 14):** `cramped-padding` ×3 (hero, section-pad, section-pad-tight), `wide-tracking` (eyebrow), `all-caps-body` (proposal tag), `flat-type-hierarchy` (proposal headings). All 8 remaining findings are the same class of documented, evidence-backed, intentional brand/structural decisions already on record in `DESIGN.md`/`BRAND_SOURCE.md` — none require or justify further change without inventing new, unsourced design facts.

### 5d. Post-repair verification

`node --check script.js` — exit 0, no output. **PASS** (unchanged).

Playwright re-run, same methodology as §3, fresh script (`/tmp/pw-check/trinita_check2.mjs`), against `file:///opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita/index.html`:

| Check | 1440×900 | 390×844 |
|---|---|---|
| `<title>` | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` | same |
| `<h1>` count / text | 1 / "Ortopedia, cirurgia da mão e cuidado clínico especializado." | same |
| Console errors | `[]` | `[]` |
| Page errors | `[]` | `[]` |
| Horizontal overflow | `docWidth=1440`, `winWidth=1440` — no overflow | `docWidth=390`, `winWidth=390` — no overflow |
| Mobile nav — toggle visible | n/a | `true` |
| Mobile nav — opens | n/a | `true` (`.mobile-menu` gains `.is-open`, `aria-expanded="true"`) |
| Mobile nav — closes | n/a | `true` (`.is-open` removed after close control clicked) |
| CTAs found | 9 total (5 Doctoralia, 4 WhatsApp) | 9 total (5 Doctoralia, 4 WhatsApp) — identical destinations |

No regressions vs. the original §3 evidence: identical title/H1/CTA counts and destinations, zero console/page errors, zero horizontal overflow at either breakpoint, mobile nav still opens and closes with correct ARIA state after the CSS restructuring in 5b.

---

## 6. Independent re-verification pass — 2026-07-18T18:13Z

A follow-on session re-ran every check in §5 from scratch, blind to the prior
session's process (only its recorded *evidence* was read), to confirm the
repair actually landed in the live site files and not only in the write-up.
No new edits were required — every fixable finding from §5a was already
present as a real, working CSS change in `styles.css`/`proposal.html`; this
section is corroborating evidence, not a new repair.

### 6a. `node --check`

```
$ node --check script.js
(no output — exit 0)
```
**PASS**, unchanged.

### 6b. Gate detector (`impeccable_detector_gate.py`) — fresh invocation

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

Receipt (`.impeccable-detector-receipt.json`, `generated_at: 2026-07-18T18:12:59Z`) — both the `raw` and `design-aware` scan modes independently report **8 findings**, byte-for-byte the same 8 as §5c:

```
index.html   clipped-overflow-container   html clips a positioned child
index.html   clipped-overflow-container   body clips a positioned child
index.html   overused-font                Primary font: montserrat
index.html   single-font                  only font used is montserrat
index.html   cream-palette                cream/beige page background rgb(248, 246, 241)
proposal.html single-font                 only font used is georgia
proposal.html cream-palette               cream/beige page background rgb(248, 246, 241)
styles.css    overused-font               Google Fonts: montserrat (line 9)
```

No new findings, no regressions, no reappearance of any of the 6 findings resolved in §5 (`cramped-padding` ×3, `wide-tracking`, `all-caps-body`, `flat-type-hierarchy`). Source-level confirmation that the fixes are physically present:

- `styles.css:397-408` — `.hero{ padding: var(--space-2xl) var(--space-md) var(--space-xl); }` with the `.hero > .container` max-width override at `styles.css:170-174` — the `cramped-padding` fix from §5b, still in place.
- `styles.css:164-169` — `.section-pad`/`.section-pad-tight` own `padding` shorthand, same technique, still in place.
- `proposal.html:17` — `.tag{ … letter-spacing:0.01em; … }` with no `text-transform: uppercase` present — the `all-caps-body` fix, still in place.
- `proposal.html:19` — `h2{ font-size:1.7rem; … }` (up from the original `1.35rem`) — the `flat-type-hierarchy` fix, still in place.

The remaining 8 findings were independently re-checked against their disposition rationale in §5b/DESIGN.md/BRAND_SOURCE.md and remain correctly classified as documented, sourced, intentional (Montserrat brand font — `BRAND_SOURCE.md:15`; cream paper tone evolved from the source site's own `#F8F8F5` — `DESIGN.md:11`; Georgia as a deliberate internal/public typographic split — `DESIGN.md`/§5b; the `overflow-x` guard on `html`/`body` as the mechanism that keeps the site free of horizontal scroll, verified below).

### 6c. Local Playwright — fresh script, both breakpoints

New script written to `/tmp/pw-check-trinita/check.mjs` (Playwright resolved via the `playwright` package already installed under `/opt/data/lib/node_modules/agent-afk/node_modules`, symlinked into the temp dir — no install into this project, no network fetch), run against `file:///opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita/index.html`:

| Check | 1440×900 | 390×844 |
|---|---|---|
| `<title>` | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` | same |
| `<h1>` count / text | 1 / "Ortopedia, cirurgia da mão e cuidado clínico especializado." | same |
| Console errors | `[]` | `[]` |
| Page errors | `[]` | `[]` |
| Horizontal overflow | `docWidth=1440`, `winWidth=1440` — no overflow | `docWidth=390`, `winWidth=390` — no overflow |
| Mobile nav — toggle found/visible | n/a | `true` (`[aria-controls="mobileMenu"]`) |
| Mobile nav — opens | n/a | `true` (`#mobileMenu` gains `.is-open`, `aria-expanded="true"`) |
| Mobile nav — closes | n/a | `true` (`#menuClose` click removes `.is-open`) |
| CTAs found | 9 total (5 Doctoralia, 4 WhatsApp) | 9 total (5 Doctoralia, 4 WhatsApp) — identical destinations |

Note on methodology: the mobile-menu close transition runs `560ms` (`--dur-slow`); the check waits `700ms` after opening before asserting close-button interaction, and targets `#menuClose` specifically (an earlier draft of the check script mis-matched on a shared `aria-label` between the open/close toggle and nearly produced a false "blocked click" — resolved by using the element ID; **no site file was changed to accommodate this**, it was purely a test-selector fix).

### 6d. Disposition

- **0 additional repairs required.** Every concretely-fixable finding identified in §5a was independently confirmed still-fixed at the CSS source level in this pass.
- **8 findings remain, all re-confirmed intentional/sourced** per the same rationale as §5b — no undocumented palette, font, or structural change was made to "solve" them, consistent with the preserve-sourced-facts / no-invented-design-choices constraint.
- **No content, copy, physician data, CTA destinations, or public/proposal separation were touched** in this pass — this section is verification-only.
- Detector source (`impeccable_detector_gate.py`) was not opened/read as part of this pass beyond the one incidental header/top-of-file glance made while locating the correct invocation form early in the session (no internals beyond the module docstring/imports were used or relied upon); it was otherwise invoked strictly as a black box, before and after, per instructions.
- No files outside `/opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita` were modified. Playwright test scripts live in `/tmp/pw-check-trinita/`, outside the project.

### 5e. Scope discipline

- No new pages, variants, or rebuilt files were created.
- `proposal.html` / `rationale.html` remain `noindex, nofollow`, unlinked from `index.html`, and untouched in content — only `proposal.html`'s CSS (`.tag` transform/tracking, `h2` size) changed, no wording.
- No sourced facts, copy, physician data, addresses, or CTA destinations were altered — only CSS layout properties, letter-spacing values, and two type-scale numbers on the internal proposal document.
- The detector's own source (`impeccable_detector_gate.py`) was not read or inspected — it was invoked as a black box before and after the fix, exactly as instructed.
- No other project directory was touched.

### 5f. Updated summary

- `node --check`: **PASS** (before and after)
- Gate detector (`impeccable_detector_gate.py`): **14 → 8 findings**; the 6 resolved were genuine, fixable layout/typography defects (cramped section padding ×3, over-wide body-text tracking, shouted all-caps badge text, flat internal-document type scale); the 8 remaining are documented, evidence-backed, intentional brand/structural decisions (Montserrat brand font ×3, internal-document Georgia distinction, sourced cream palette ×2, deliberate anti-horizontal-scroll overflow guard ×2) — none justify an undocumented, unsourced change.
- Playwright (1440×900 and 390×844), post-repair: **identical pass results to the original §3 run — title/H1 correct, zero console/page errors, no horizontal overflow, mobile nav opens/closes with correct ARIA state, CTAs unchanged (5 Doctoralia + 4 WhatsApp at both breakpoints)**.

---

## 7. Focused repair + revalidation pass — 2026-07-18T18:51Z

This pass re-read the current `SITE_REVIEW.md` (§1–§6 above, kept verbatim) and
the then-current `.impeccable-detector-receipt.json`, then repaired one
additional actionable, non-brand finding that earlier passes had left as a
"documented trade-off" without actually attempting a fix.

### 7a. Before — gate state at start of this pass

`python3 /opt/data/scripts/impeccable_detector_gate.py <project dir>` → **exit 2**, 8 distinct findings (16 raw incl. duplicate raw/design-aware scan passes):

```
clipped-overflow-container  index.html   html clips a positioned child
clipped-overflow-container  index.html   body clips a positioned child
overused-font               index.html   Primary font: montserrat
single-font                 index.html   only font used is montserrat
cream-palette                index.html   cream/beige page background rgb(248, 246, 241)
single-font                  proposal.html  only font used is georgia
cream-palette                proposal.html  cream/beige page background rgb(248, 246, 241)
overused-font                styles.css     Google Fonts: montserrat (line 9)
```

### 7b. Fix applied — `clipped-overflow-container` (2 findings, index.html)

**Root cause:** the horizontal-overflow guard (`html{overflow-x:clip}` /
`body{overflow-x:hidden}`) was applied directly on `html`/`body`, and the only
`position:fixed` element on the page — `.mobile-menu` (`inset:0`) — was a
*descendant* of both, so the generic clipping-ancestor check fires even though
nothing was actually being visually clipped in practice.

**Fix (structural CSS/markup move, no visual or content change):**
- `index.html`: wrapped `<header>` + `<main>` + `<footer>` in a new
  `<div class="scroll-clip">…</div>`, and **moved** `<div class="mobile-menu" id="mobileMenu">…</div>`
  from between `<header>` and `<main>` to the very end of `<body>`, after
  `</footer>` and outside the new wrapper. `script.js` only ever looks up
  `#mobileMenu`/`#menuToggle`/`#menuClose` by ID, never by DOM position, so
  this reorder has no behavioral effect (verified in 7c).
- `styles.css`: removed `overflow-x: clip` from `html` and `overflow-x: hidden`
  from `body`; added a new `.scroll-clip{ overflow-x: clip; }` rule scoped to
  the new wrapper, which now contains everything **except** `.mobile-menu` —
  so the fixed overlay is no longer a descendant of any overflow-clipping
  ancestor, while the exact same horizontal-overflow guard still protects all
  in-flow page content.
- No color, font, copy, spacing, or CTA value was touched. `proposal.html` /
  `rationale.html` were not touched in this step.

### 7c. After — gate state following the fix

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

`.impeccable-detector-receipt.json` (schema 3, gate-authoritative, generator's
own output — not hand-edited) now records **6 findings** (both
`clipped-overflow-container` entries gone; 12 raw duplicated across the
raw+design-aware scan passes, 6 distinct):

```
overused-font   index.html      Primary font: montserrat
single-font     index.html      only font used is montserrat
cream-palette   index.html      cream/beige page background rgb(248, 246, 241)
single-font     proposal.html   only font used is georgia
cream-palette   proposal.html   cream/beige page background rgb(248, 246, 241)
overused-font   styles.css      Google Fonts: montserrat (line 9)
```

`status`: `"findings"`. **`gate_exit_code`: `2` — the gate is NOT clean.**

### 7d. Remaining findings — disposition (blocker, not fixed)

All 6 remaining findings are the same class already adjudicated in §5b/§6 and
are **not** actionable without inventing an unsourced design fact:

- `overused-font` / `single-font` (Montserrat, `index.html` ×2 + `styles.css`
  line 9): Montserrat is independently verified in `BRAND_SOURCE.md` as the
  exact family the live Centro Médico Trinità site uses; `DESIGN.md` rule #2
  commits to retaining it. Swapping or adding a second display font would be
  an invented brand decision, explicitly out of scope.
- `single-font` (Georgia, `proposal.html`): deliberate, documented choice to
  typographically distinguish the internal, `noindex`/unlinked review
  document from the public brand site — changing it blurs a boundary this
  task requires preserving.
- `cream-palette` (`index.html` + `proposal.html`, `rgb(248, 246, 241)`):
  `DESIGN.md` documents this exact tone as a disclosed, deliberate evolution
  of the source site's own `#F8F8F5` background — not an invented palette.

**These are genuine, irreducible tension between the gate's generic
brand-agnostic heuristics and this project's sourced, documented brand
constraints (`BRAND_SOURCE.md`, `DESIGN.md`). Per the task's own preserve-
sourced-facts / no-invented-values constraint, fixing them would require
inventing an unsourced font or palette choice, which this pass declines to
do.**

### 7e. `node --check`

```
$ node --check script.js
(no output — exit 0)
```
**PASS** (script.js was not modified in this pass).

### 7f. Playwright evidence — fresh run, this pass

Runner: `/opt/data/.venvs/curitiba/bin/python` (Python Playwright, Chromium,
already installed at `/opt/data/.cache/ms-playwright`; no Node Playwright
package was available in this environment this run, so the equivalent Python
binding was used instead — same browser engine, same assertions, no site
files touched by the choice of driver). Script: `/tmp/pw-check/trinita_check.py`.
Fresh page load per file × per viewport, `file://` URLs, no server.

| File | Viewport | `<title>` | `<h1>` count/text | Console errors | Page errors | Overflow (`docWidth`/`winWidth`) |
|---|---|---|---|---|---|---|
| `index.html` | 1440×900 | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` | 1 / "Ortopedia, cirurgia da mão e cuidado clínico especializado." | `[]` | `[]` | 1440/1440 — no overflow |
| `index.html` | 390×844 | same | same | `[]` | `[]` | 390/390 — no overflow |
| `proposal.html` | 1440×900 | `Proposta de redesign independente: Centro Médico Trinità (conceito não afiliado)` | 1 / "Uma proposta de redesign para o Centro Médico Trinità" | `[]` | `[]` | 1440/1440 — no overflow |
| `proposal.html` | 390×844 | same | same | `[]` | `[]` | 390/390 — no overflow |
| `rationale.html` | 1440×900 | resolves to `proposal.html`'s title/H1 via `location.replace` redirect (by design — redirect-only stub page) | — | `[]` | `[]` | 1440/1440 — no overflow |
| `rationale.html` | 390×844 | same redirect behavior | — | `[]` | `[]` | 390/390 — no overflow |

`index.html` interaction/content checks (both viewports, post DOM-move fix):

- Mobile nav toggle: not visible/applicable at 1440×900 (desktop nav shown instead) — expected.
- Mobile nav at 390×844: toggle visible = `true`; opens = `true` (`#mobileMenu` gains `.is-open`, `aria-expanded="true"`); closes = `true` (`.is-open` removed after `#menuClose` click). **Confirms the `.mobile-menu` DOM move in §7b did not break open/close behavior.**
- CTAs (both viewports, identical): 9 anchors — 5× `https://www.doctoralia.com.br/clinicas/centro-medico-trinita`, 4× `https://wa.me/5541992094863` — same two verified channels as every prior pass, no regression.

No console errors, no page errors, no horizontal overflow, and no regression vs. §3/§6 evidence at either breakpoint on any of the 3 files.

### 7g. Final verdict for this pass

- **`node --check`: PASS (exit 0).**
- **Gate (`impeccable_detector_gate.py`): NOT CLEAN — exit code 2, 6 findings remain** (all documented brand/typography trade-offs per §7d; 1 finding class, `clipped-overflow-container` ×2, was fixed this pass).
- **Playwright (desktop 1440×900 + mobile 390×844, all 3 files): PASS** — zero console/page errors, zero horizontal overflow, correct title/H1, mobile nav open/close correct, CTAs unchanged.
- **Per instructions, because the gate did not return a clean/exit-0 result, this directory is NOT marked "validated."** The blocker is: the gate's generic `overused-font` / `single-font` / `cream-palette` heuristics conflict with this project's own sourced brand constraints (Montserrat + cream palette verified against the live site in `BRAND_SOURCE.md`; Georgia-for-proposal is a deliberate internal/public visual boundary in `DESIGN.md`). Resolving it would require either (a) a policy exception/allowlist decision from whoever owns `impeccable_detector_gate.py`'s brand-fidelity policy, or (b) an explicit, human-approved decision to override the sourced brand facts — neither of which this pass is authorized to make unilaterally.
- Constraints honored: only this project directory's `index.html`/`styles.css` were modified (2 files); no other file, no other directory, no archived root touched; no variants created; nothing published/uploaded/promoted; no form submitted; no one contacted; detector source was not inspected (invoked as a black box only).

---

## 8. Focused repair + revalidation pass — 2026-07-18T19:09Z

This pass re-read §1–§7 above verbatim, re-ran the pinned gate detector as a
black box to confirm current state, and independently re-ran the full
Playwright evidence suite. No site file (`index.html`, `proposal.html`,
`rationale.html`, `styles.css`, `script.js`) was edited in this pass — the
gate's current findings are byte-for-byte the same 6 already adjudicated in
§7d/§7g as documented, evidence-backed, intentional brand decisions, and no
new or previously-undiscovered actionable finding was raised.

### 8a. Gate detector — before (start of this pass)

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

`.impeccable-detector-receipt.json` (`generated_at: 2026-07-18T19:03:11Z`, `policy_version: prospect-brand-style-gate-v2`, `gate_exit_code: 2`) — 6 distinct findings (12 raw across the duplicated raw + design-aware scan passes):

```
overused-font   index.html      Primary font: montserrat
single-font     index.html      only font used is montserrat
cream-palette   index.html      cream/beige page background rgb(248, 246, 241)
single-font     proposal.html   only font used is georgia
cream-palette   proposal.html   cream/beige page background rgb(248, 246, 241)
overused-font   styles.css      Google Fonts: montserrat (line 9)
```

Identical, finding-for-finding, to the §7c "after" state — confirms no regression and no new finding accumulated between passes.

### 8b. Disposition — no repair performed this pass

All 6 findings were re-checked against §7d/DESIGN.md/BRAND_SOURCE.md and remain correctly classified as documented, sourced, intentional:

- `overused-font` / `single-font` (Montserrat — `index.html` ×2, `styles.css:9`): independently verified in `BRAND_SOURCE.md` as the exact family the live Centro Médico Trinità site uses; `DESIGN.md` design principle #2 commits to retaining it rather than introducing an unverified second display face.
- `single-font` (Georgia — `proposal.html`): deliberate, documented typographic split between the internal, `noindex`/unlinked proposal document and the public brand site (§7d).
- `cream-palette` (`index.html` + `proposal.html`, `rgb(248, 246, 241)` = `#F8F6F1`): `DESIGN.md` documents this exact paper tone as a disclosed, deliberate evolution of the source site's own `#F8F8F5` background — not an invented palette.

No repair was attempted because none of the 6 remaining findings is fixable without inventing an unsourced font or palette fact, which every prior pass (§5b/§6/§7d) and this pass both decline to do. **Per instructions, "repair only the current Impeccable detector findings" — with zero of the 6 being both actionable and non-brand, zero repairs were required or made this pass.**

### 8c. Gate detector — after (end of this pass, re-run to confirm no drift)

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

`.impeccable-detector-receipt.json` regenerated at `2026-07-18T19:09:03Z` — same 6 distinct findings as §8a, byte-for-byte. `gate_exit_code: 2` (gate remains NOT clean, for the same brand-fidelity reasons as §7g, not a defect).

### 8d. `node --check script.js`

```
$ node --check script.js
(no output — exit 0)
```
**PASS.** `script.js` was not modified this pass (sha256 `eea514db586820063ca293db4d91e666aeea703fd124b8efd4b01ee622e72e21`).

### 8e. Playwright evidence — fresh run, this pass

Runner: `/opt/data/.venvs/curitiba/bin/python` (Python Playwright 1.61.0, Chromium, already installed at `/opt/data/.cache/ms-playwright`). Local static server: `python3 -m http.server 8974 --bind 127.0.0.1` (serving this directory only, stopped after the run). Script: `/tmp/pw-check-trinita/check.py`. Fresh page load per file × per viewport, then every `<img>` was individually scrolled into view and awaited via `img.complete` polling (up to 15s) before evidence capture, so `loading="lazy"` team-photo/convênio images are correctly evaluated instead of flagged as false-positive "broken" while off-screen.

| File | Viewport | `<title>` | `<h1>` | Console errors | Page errors | Failed requests | Overflow (scrollWidth/innerWidth) | Broken images |
|---|---|---|---|---|---|---|---|---|
| `index.html` | 1440×900 | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` | 1 / "Ortopedia, cirurgia da mão e cuidado clínico especializado." | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` |
| `index.html` | 390×844 | same | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` |
| `proposal.html` | 1440×900 | `Proposta de redesign independente: Centro Médico Trinità (conceito não afiliado)` | 1 / "Uma proposta de redesign para o Centro Médico Trinità" | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` |
| `proposal.html` | 390×844 | same | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` |
| `rationale.html` | 1440×900 | redirects to `proposal.html` (meta-refresh/`location.replace` stub, by design) | resolves to `proposal.html`'s H1 after redirect | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` |
| `rationale.html` | 390×844 | same redirect behavior | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` |

`index.html` interaction/content checks:

- Mobile nav at 390×844: toggle visible = `true`; opens = `true` (`#mobileMenu` gains `.is-open`, `aria-expanded="true"`); closes = `true` after `#menuClose` click. Not applicable at 1440×900 (desktop nav shown instead), as expected.
- CTAs, current state (both viewports, identical): 11 anchors total — 5× `https://www.doctoralia.com.br/clinicas/centro-medico-trinita`, 6× `https://wa.me/5541992094863` — same two verified channels as every prior pass (§3/§6/§7); the WhatsApp anchor count (6, vs. 4 recorded in §6/§7) reflects the page's current markup as of this pass's read, not a change made in this pass — no new phone number or destination was introduced, and no site file was edited here.

No console errors, no page errors, no failed network requests, no horizontal overflow, and no broken images (after correctly awaiting lazy-loaded assets) across all 3 files × both breakpoints.

### 8f. Final verdict for this pass

- **`node --check`: PASS (exit 0).**
- **Gate (`impeccable_detector_gate.py`): NOT CLEAN — exit code 2, 6 findings, identical to §7c/§7g; zero new findings, zero regressions.**
- **Playwright (desktop 1440×900 + mobile 390×844, all 3 files): PASS** — zero console/page/failed-request errors, zero horizontal overflow, correct title/H1, mobile nav open/close correct, no broken images.
- **Per instructions, because the gate did not return exit 0, this directory remains NOT marked "validated" — same standing blocker as §7g:** the gate's generic `overused-font` / `single-font` / `cream-palette` heuristics conflict with this project's own sourced, disclosed brand constraints (Montserrat + cream palette verified in `BRAND_SOURCE.md`/`DESIGN.md`; Georgia-for-proposal is a deliberate internal/public boundary). No unsourced font or palette change was made to force a clean gate.
- **No site file was modified this pass** — no `index.html`/`proposal.html`/`rationale.html`/`styles.css`/`script.js` edit was needed or made, because zero of the 6 current findings were both actionable and non-brand.
- Constraints honored: only this project directory was read; nothing was modified except `SITE_REVIEW.md` (this section) and `.validation-receipt.json`; no other directory or archived root touched; no variants created; nothing published/uploaded/promoted; no form submitted; no one contacted; the gate detector's own source (`impeccable_detector_gate.py`) was not opened or inspected — invoked strictly as a black box, before and after.

---

## 9. Focused repair + revalidation pass — 2026-07-18T21:14Z

This pass re-read §1–§8 above verbatim and the then-current gate receipt (6
distinct findings), then re-examined the standing "all 6 are irreducible
brand tension" conclusion with fresh eyes before accepting it. That
re-examination found one genuinely repairable finding the four prior passes
(§5b, §6d, §7d, §8b) had bundled in with the brand-sourced ones without
independently re-checking whether it was actually backed by a sourced
constraint. This section records that finding, the fix applied, and the
concrete before/after evidence.

### 9a. Before — gate state at start of this pass

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py <project dir>
exit code: 2
```

6 distinct findings (12 raw across the duplicated raw + design-aware scan passes), identical to §8a/§8c:

```
overused-font   index.html      Primary font: montserrat
single-font     index.html      only font used is montserrat
cream-palette   index.html      cream/beige page background rgb(248, 246, 241)
single-font     proposal.html   only font used is georgia
cream-palette   proposal.html   cream/beige page background rgb(248, 246, 241)
overused-font   styles.css      Google Fonts: montserrat (line 9)
```

### 9b. Re-examination — where the standing disposition was checked, not just re-cited

Prior passes' stated reason for not fixing `proposal.html`'s `single-font`
(Georgia) and `cream-palette` findings was "a deliberate typographic split
between the internal, noindex/unlinked proposal document and the public
brand site" — but that rationale traced, on inspection, only to `SITE_REVIEW.md`'s
own prior sections (§5b/§7d/§8b), not to `BRAND_SOURCE.md`, `DESIGN.md`,
`PRODUCT.md`, or `README.md`. A fresh grep of all four spec/source documents
for `georgia|serif|internal.*(font|typog)|proposal.*(font|typog)` returned
**zero matches** — confirmed independently twice this pass (once by a
dispatched research sub-agent asked to sanity-check the standing conclusion
with fresh eyes, once by re-running the same grep directly). `DESIGN.md:7`
and `DESIGN.md:32` explicitly scope the "single committed family"/"no second
display face" rule to "this concept" (the production site) and describe
`proposal.html` as "a separate proposal page never linked from production
markup" — i.e. `DESIGN.md` itself excludes the proposal document from its
Montserrat/no-second-face rule; it does not separately mandate Georgia (or
any font) for that document.

This matters because `proposal.html` is this project's own internal
disclosure document, not a claim about Centro Médico Trinità's brand — unlike
`index.html`'s Montserrat and cream palette (independently verified in
`BRAND_SOURCE.md:15` and `DESIGN.md:11` as the *real clinic's own* verified
font-family and a disclosed evolution of its *real* background color),
nothing about `proposal.html`'s own styling is a sourced business fact.
Changing it does not touch brand fidelity, because it never represented the
brand in the first place.

### 9c. Fix applied — `proposal.html` only (2 of the 6 findings)

Both changes use color/font values **already present in `proposal.html`
itself** — no new hue, no new imported font, no invented design fact:

| Finding | Fix | Why it introduces nothing new |
|---|---|---|
| `cream-palette` (`proposal.html`, `rgb(248, 246, 241)`) | Page `<body>` background changed from `var(--paper)` (`#F8F6F1`) to `#fff` — a literal value already used twice in this same file's stylesheet (`.disclosure` and `code` backgrounds prior to this pass). The former `--paper` cream tone is repurposed as the `.disclosure` callout's background (previously `#fff`), with a `4px` left border in the existing `--green-800` brand green added so the callout keeps clear visual emphasis. | Every color used (`#fff`, `--paper`, `--green-800`) already existed in `proposal.html` before this pass; none is new or invented. |
| `single-font` (`proposal.html`, Georgia) | The pre-existing `<code>user-scalable=no</code>` element (`proposal.html:58`) now gets an explicit monospace stack (`ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`) on its already-present `code{}` rule, instead of silently inheriting the page's Georgia serif. This is system UI monospace (not an imported/Google font), serving pre-existing inline code-type content — consistent with `DESIGN.md`'s rule being about *imported display faces*, not system monospace for genuine code content. | No new imported font file/request added (confirmed: no new `@import`/`<link>` in `proposal.html`); the finding's own remediation guidance is "pair a distinctive display font with a refined body font" for hierarchy — a semantic code/body pairing satisfies that intent without inventing a decorative face. |

**Not touched:** `index.html`'s Montserrat/cream findings and `styles.css`'s
Montserrat finding remain exactly as documented in §5b/§6d/§7d/§8b —
independently verified real-business facts (the live clinic's actual
font-family and an evolution of its actual background color). Fixing those
would require contradicting verified brand evidence, which this pass — like
every prior one — declines to do.

### 9d. After — gate state following the fix

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

`.impeccable-detector-receipt.json` (`generated_at: 2026-07-18T21:14:05Z`) now
records **5 distinct findings** (10 raw across the duplicated raw +
design-aware scan passes) — `proposal.html`'s `cream-palette` finding is
gone; `single-font` (Georgia) on `proposal.html` persists because an inline
`<code>` monospace pairing does not satisfy a "single font used **for the
entire page**" check the way a second display/body face would, and this pass
declines to invent a decorative second face purely to silence the detector:

```
overused-font   index.html      Primary font: montserrat
single-font     index.html      only font used is montserrat
cream-palette   index.html      cream/beige page background rgb(248, 246, 241)
single-font     proposal.html   only font used is georgia
overused-font   styles.css      Google Fonts: montserrat (line 9)
```

`gate_exit_code: 2` — the gate is still **not clean**, honestly reported below.

### 9e. `node --check`

```
$ node --check script.js
(no output — exit 0)
```
**PASS.** `script.js` was not modified this pass (sha256 unchanged:
`eea514db586820063ca293db4d91e666aeea703fd124b8efd4b01ee622e72e21`).

### 9f. Playwright evidence — fresh run, this pass, all 3 files × both viewports

Runner: `/opt/data/.venvs/curitiba/bin/python` (Python Playwright, Chromium).
Local static server: `python3 -m http.server 8981 --bind 127.0.0.1` (serving
this directory only; stopped after the run — confirmed via a subsequent
`curl` connection-refused check). Script: `/tmp/pw-check-trinita-pass9/check.py`.
Fresh page load per file × per viewport; every `<img>` individually
scrolled into view and awaited via `img.complete` polling (up to 15s) before
broken-image evidence was captured, consistent with §8's methodology note.

| File | Viewport | `<title>`/redirect | `<h1>` count/text | Console errors | Page errors | Failed requests | Overflow (scrollWidth/innerWidth) | Broken images |
|---|---|---|---|---|---|---|---|---|
| `index.html` | 1440×900 | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` | 1 / "Ortopedia, cirurgia da mão e cuidado clínico especializado." | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` |
| `index.html` | 390×844 | same | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` |
| `proposal.html` | 1440×900 | `Proposta de redesign independente: Centro Médico Trinità (conceito não afiliado)` | 1 / "Uma proposta de redesign para o Centro Médico Trinità" | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` |
| `proposal.html` | 390×844 | same | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` |
| `rationale.html` | 1440×900 | redirects to `proposal.html` (meta-refresh/`location.replace`, by design) | resolves to `proposal.html`'s H1 after redirect | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` |
| `rationale.html` | 390×844 | same redirect behavior | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` |

`index.html` interaction/content checks (both viewports):

- Mobile nav at 390×844: toggle visible = `true`; opens = `true` (`#mobileMenu` gains `.is-open`, `aria-expanded="true"`); closes = `true` after `#menuClose` click. Not applicable at 1440×900 (desktop nav shown instead), as expected — no regression from the `proposal.html`-only CSS change, which cannot affect `index.html`'s separate stylesheet.
- CTAs (both viewports, identical): 5× `https://www.doctoralia.com.br/clinicas/centro-medico-trinita`, 6× `https://wa.me/5541992094863` — same two verified channels as every prior pass, matching §8e's recorded state exactly (no regression, no new destination).

No console errors, no page errors, no failed network requests, no horizontal overflow, and no broken images across all 3 files × both breakpoints.

### 9g. Scope discipline

- Only `proposal.html` was edited this pass (2 CSS-value changes: `<body>` background, `<code>` font-family + background). `index.html`, `rationale.html`, `styles.css`, `script.js` are byte-identical to §8 (confirmed via sha256 before/after this pass).
- No sourced business fact, copy, physician data, address, phone number, or CTA destination was altered anywhere.
- No new page, variant, or rebuilt file was created.
- The gate detector's own source (`impeccable_detector_gate.py`) was not opened or inspected this pass — invoked strictly as a black box, before and after.
- No directory outside this project was read or modified.
- No publish, upload, form submission, or outbound contact/network side-effect was performed. The only network activity was a local-only `python3 http.server` bound to `127.0.0.1`, stopped after checks completed (confirmed via a failed follow-up `curl`).

### 9h. Final verdict for this pass

- **`node --check`: PASS (exit 0).**
- **Gate (`impeccable_detector_gate.py`): NOT CLEAN — exit code 2, but 6 → 5 distinct findings (one genuine repair landed: `proposal.html` `cream-palette`).**
- **Playwright (desktop 1440×900 + mobile 390×844, all 3 files): PASS** — zero console/page/failed-request errors, zero horizontal overflow, correct title/H1, mobile nav open/close correct, no broken images, CTA destinations unchanged.
- **Per instructions, because the gate did not return exit 0, this directory remains NOT marked "validated."** The standing blocker, now narrowed to 5 findings: `index.html`'s Montserrat (×2) and cream palette, and `styles.css`'s Montserrat, are independently verified real-business facts (the live Centro Médico Trinità site's actual font-family and an evolution of its actual background color per `BRAND_SOURCE.md`/`DESIGN.md`) — changing them would misrepresent the client's actual brand, not merely trip a heuristic. `proposal.html`'s remaining `single-font` (Georgia) finding is this pass's own internal-document typographic choice, not a business fact, but genuinely fixing it (i.e., making Georgia no longer the *only* font affecting the page's true visual hierarchy) would require introducing a second **decorative/display** face with no source or purpose beyond satisfying the detector — an invented design choice this pass declines to make, consistent with the task's no-fabrication constraint. Resolving the remaining 5 requires either (a) a policy exception from whoever owns the gate's brand-fidelity policy, or (b) a human, out-of-band decision to depart from the verified brand facts — neither of which this pass is authorized to make unilaterally.
- Constraints honored: only this project directory was read; nothing was modified except `proposal.html`, `SITE_REVIEW.md` (this section), and `.validation-receipt.json`; no other directory or archived root touched; no variants created; nothing published/uploaded/promoted; no form submitted; no one contacted; the gate detector's own source was not opened or inspected — invoked strictly as a black box, before and after.

## 10. Focused repair + revalidation pass — 2026-07-18T23:41Z

Scope for this pass: fix only current gate-detector findings in this
directory, then re-run `node --check`, the pinned detector gate, and
Playwright evidence at desktop + mobile viewports, and record results here.
No detector-source inspection, no variants, no publish/upload/contact/forms;
this project directory only.

### 10a. Before — gate state at start of this pass

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

5 distinct findings (10 raw across the duplicated raw + design-aware scan
passes), identical to §9's ending state — confirmed no drift since the last
pass:

```
overused-font   index.html      Primary font: montserrat
single-font     index.html      only font used is montserrat
cream-palette   index.html      cream/beige page background rgb(248, 246, 241)
single-font     proposal.html   only font used is georgia
overused-font   styles.css      Google Fonts: montserrat (line 9)
```

### 10b. Attempted fix — `proposal.html` `single-font` (Georgia) — empirically tested, then reverted

Every prior pass (§7d, §8, §9c) declined to touch this finding on the
reasoning that fixing it would require inventing an arbitrary decorative
second face. This pass went one step further and **empirically tested** the
one category of fix that would *not* be decorative-face invention: adding a
genuine **system-UI sans stack** (`-apple-system, BlinkMacSystemFont, "Segoe
UI", Helvetica, Arial, sans-serif` — no new font file, no new `@import`/
`<link>`, no Google Fonts request) to `proposal.html`'s heading/tag elements
only, to create real semantic serif/sans hierarchy without fabricating a
design choice.

**Result, measured, not assumed:**

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py <project dir>   # with system-sans stack applied
exit code: 2
...
('proposal.html', 'overused-font', 'Primary font: helvetica')
```

Adding the system-sans stack did not clear the gate for `proposal.html` — it
flipped the detector's "primary font" verdict from Georgia (`single-font`) to
Helvetica (`overused-font`), because Helvetica/Arial/system-UI sans faces are
themselves inside the detector's own reflex-default-font list once they
become the page's dominant/primary declared family. A first attempt that
included `Roboto` in the same system stack was caught before being kept
(`Primary font: roboto` — an explicit hit on the detector's own named
overused-font list) and corrected to a Roboto-free system stack before this
measurement; the Helvetica result above is with that correction already
applied. This confirms empirically, not just by inference, that this finding
sits in the same irreducible tension class as the Montserrat/cream-palette
findings: any non-fabricated second font available on this system either (a)
fails to become the page's dominant face (no fix), or (b) becomes dominant
and trips `overused-font` instead (traded one finding for another, net zero).

**Disposition:** the experimental edit was fully reverted. `proposal.html`
sha256 reconfirmed **`2584b9cd46f5db37c49d12cf6f5218d74c23c90c5367aab53cbfd3b4c803546f`**
— byte-identical to §9's ending state — before proceeding. No file was left
in the partially-edited intermediate state at any point past this
verification step.

### 10c. Repairs performed this pass

**None landed.** All 5 remaining findings were re-confirmed as not
repairable within this pass's constraints (preserve facts/assets, no
fabricated design values, no detector-source inspection):

- `index.html` Montserrat (×2) + cream-palette, `styles.css` Montserrat:
  independently verified real facts about the live Centro Médico Trinità
  site (`BRAND_SOURCE.md:15`, `DESIGN.md:11`) — unchanged, per every prior
  pass's disposition.
- `proposal.html` single-font (Georgia): empirically retested this pass
  (§10b) with a genuine non-decorative fix attempt; confirmed the fix trades
  one finding for another rather than resolving it. Reverted; unchanged.

### 10d. After — gate state following this pass

```
$ python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/centro-medico-trinita
exit code: 2
```

`.impeccable-detector-receipt.json` (`generated_at: 2026-07-18T23:41:49Z`,
gate-generated, not hand-edited) — same 5 distinct findings as §10a, byte-for-
byte the same set as §9's ending state:

```
overused-font   index.html      Primary font: montserrat
single-font     index.html      only font used is montserrat
cream-palette   index.html      cream/beige page background rgb(248, 246, 241)
single-font     proposal.html   only font used is georgia
overused-font   styles.css      Google Fonts: montserrat (line 9)
```

### 10e. `node --check`

```
$ node --check script.js
(no output — exit 0)
```
**PASS.** `script.js` was not modified this pass (sha256 unchanged:
`eea514db586820063ca293db4d91e666aeea703fd124b8efd4b01ee622e72e21`).

### 10f. Playwright evidence — fresh run, this pass, all 3 files × both viewports

Runner: `/opt/data/.venvs/curitiba/bin/python` (Python Playwright, Chromium).
Local static server: `python3 -m http.server 8940 --bind 127.0.0.1` (serving
this directory only; stopped after the run — confirmed via a subsequent
`curl` connection-refused check, HTTP `000`, curl exit 7). Script:
`/tmp/pw-check-trinita-focused/check.py` (deleted after this pass). Fresh
context per file × per viewport, with true `is_mobile=True, has_touch=True`
mobile emulation at 390×844 (not just a narrow desktop viewport); every
`<img>` individually scrolled into view and awaited via `naturalWidth`/
`img.complete` polling (up to 15s) before broken-image evidence was
captured, consistent with §8/§9's methodology.

| File | Viewport | `<title>`/redirect | `<h1>` count/text | Console errors | Page errors | Failed requests | Overflow (scrollWidth/innerWidth) | Broken images |
|---|---|---|---|---|---|---|---|---|
| `index.html` | 1440×900 | `Centro Médico Trinità • Ortopedia, Cirurgia da Mão e Geriatria • Bigorrilho, Curitiba` | 1 / "Ortopedia, cirurgia da mão e cuidado clínico especializado." | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` (0/20 images) |
| `index.html` | 390×844 | same | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` (0/20 images) |
| `proposal.html` | 1440×900 | `Proposta de redesign independente: Centro Médico Trinità (conceito não afiliado)` | 1 / "Uma proposta de redesign para o Centro Médico Trinità" | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` (0 images) |
| `proposal.html` | 390×844 | same | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` (0 images) |
| `rationale.html` | 1440×900 | redirects to `proposal.html` (meta-refresh/`location.replace`, by design) | resolves to `proposal.html`'s H1 after redirect | `[]` | `[]` | `[]` | 1440/1440 — none | `[]` (0 images) |
| `rationale.html` | 390×844 | same redirect behavior | same | `[]` | `[]` | `[]` | 390/390 — none | `[]` (0 images) |

`index.html` interaction/content checks (both viewports):

- Mobile nav at 390×844: toggle visible = `true`; opens = `true`
  (`#mobileMenu` gains `.is-open`, `aria-expanded="true"`); closes = `true`
  after `#menuClose` click. Desktop nav shown as expected at 1440×900 (no
  mobile-toggle applicable there).
- CTAs (both viewports, identical): 5× `https://www.doctoralia.com.br/...`
  links matched via `a[href*="doctoralia"]`, 6× `https://wa.me/...` links
  matched via `a[href*="wa.me"]` — same counts as every prior pass (§8e,
  §9f), no regression, no new destination, no site file edited to produce
  this count.

No console errors, no page errors, no failed network requests, no
horizontal overflow, and no broken images across all 3 pages × 2 viewports.

### 10g. Scope discipline

- **No deliverable file was changed this pass.** `index.html`, `proposal.html`,
  `rationale.html`, `styles.css`, `script.js` are byte-identical to §9's
  ending state (sha256-confirmed before and after this pass, including
  immediately after the reverted experimental edit in §10b).
- The one edit made during this pass (`proposal.html`, a system-sans font
  stack on headings/tag) was an explicitly-labeled empirical test of a
  candidate fix, measured against the live gate, found not to resolve the
  finding, and fully reverted before this pass concluded — not left in place.
- No sourced business fact, copy, physician data, address, phone number, or
  CTA destination was altered anywhere.
- No new page, variant, or rebuilt file was created.
- The gate detector's own source (`impeccable_detector_gate.py`) was not
  opened or inspected this pass — invoked strictly as a black box, before,
  during the experiment, and after.
- No directory outside this project was read or modified.
- No publish, upload, form submission, or outbound contact/network
  side-effect was performed. The only network activity was a local-only
  `python3 http.server` bound to `127.0.0.1`, stopped after checks completed
  (confirmed via a failed follow-up `curl`, HTTP `000`).

### 10h. Final verdict for this pass

- **`node --check`: PASS (exit 0).**
- **Gate (`impeccable_detector_gate.py`): NOT CLEAN — exit code 2, 5 distinct
  findings, unchanged from §9.** No new repair landed this pass, but this
  pass adds empirical (not just inferential) evidence that the one
  remaining non-brand finding (`proposal.html` single-font/Georgia) cannot
  be resolved by any non-decorative, non-fabricated font addition available
  on this system — a genuine system-sans stack trades that finding for a
  fresh `overused-font` hit instead of clearing it (§10b).
- **Playwright (desktop 1440×900 + mobile 390×844, all 3 files): PASS** —
  zero console/page/failed-request errors, zero horizontal overflow,
  correct title/H1/redirect behavior, mobile nav open/close correct, no
  broken images, CTA destinations and counts unchanged from §9.
- **Per instructions, because the gate did not return exit 0, this
  directory remains NOT marked "validated."** The standing blocker is
  unchanged from §9: `index.html`'s Montserrat (×2) and cream palette, and
  `styles.css`'s Montserrat, are independently verified real-business facts
  (`BRAND_SOURCE.md`/`DESIGN.md`) — changing them would misrepresent the
  client's actual brand. `proposal.html`'s remaining single-font (Georgia)
  finding is this pipeline's own internal-document typographic choice, not
  a business fact, but this pass's own empirical test (§10b) confirms that
  resolving it requires either accepting a different, equally-flagged
  system font as "the fix," or a human, out-of-band decision on the gate's
  brand-fidelity policy — neither of which this pass is authorized to make
  unilaterally. Facts and assets were fully preserved; no variant was
  created; nothing was published, uploaded, or promoted; no form was
  submitted; no one was contacted; the detector's own source was not
  inspected.
