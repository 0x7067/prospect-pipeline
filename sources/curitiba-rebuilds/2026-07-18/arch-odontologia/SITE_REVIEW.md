# Site review — recorded evidence

All commands below were run directly in `/opt/data/projects/curitiba-rebuilds/2026-07-18/arch-odontologia` on 2026-07-18. Output is reproduced verbatim (trimmed only where noted).

## 1. `node --check`

```
$ node --check script.js
(no output)
$ echo $?
0
```
Result: **PASS** — `script.js` is syntactically valid.

## 2. Public-page boundary check (no proposal/redesign/prototype/disclosure references)

```
$ grep -in "proposal\|redesign\|prototype\|disclosure" index.html
(no matches, exit code 1)
```
Result: **PASS** — `index.html` contains zero occurrences of "proposal", "redesign", "prototype", or "disclosure" (case-insensitive), and has no `<a href="proposal.html">` or `<a href="rationale.html">` link anywhere in the file.

## 3. No forms / uploads / network calls in shipped site files

```
$ grep -in "form\|upload\|<input\|action=\"" index.html proposal.html rationale.html
(only prose matches: "formulário"/"formulários" describing the *official site's* problem, and
 "Formação" in a bio sentence — no <form>, <input>, or action= attribute anywhere)
$ grep -in "fetch(\|XMLHttpRequest\|WebSocket" script.js
(no matches)
$ grep -in "fonts.googleapis\|cdn\.\|jsdelivr\|unpkg" index.html proposal.html styles.css
(no matches)
```
Result: **PASS** — no `<form>`, `<input>`, file upload, fetch/XHR/WebSocket call, or CDN/web-font dependency anywhere in the shipped site. The only external reference in either page is a plain `<a href="https://api.whatsapp.com/send?phone=...">` link using the sourced, single canonical contact number required by `PRODUCT.md`; there is no form submission, upload, or script-initiated network call.

## 4. Impeccable anti-pattern detector (canonical CLI, `/opt/data/bin/impeccable`, v3.2.1)

Initial run (before fixes) found 13 anti-patterns across `index.html` and `proposal.html`:
- `cramped-padding` ×6 (`section-alt` ×2, `track-card` ×2, `gallery-note`, `contact-panel`) — root cause: `clamp()`-based padding was not resolved by the static CSS analyzer, reading as near-zero inset.
- `all-caps-body` ×4 — `text-transform: uppercase` applied to long team-role strings (32–50 chars) and a long proposal-banner sentence (72 chars).
- `clipped-overflow-container` ×1 — `overflow-x: hidden` on `body` clipped the absolutely-positioned `.skip-link`.
- `flat-type-hierarchy` ×1 (proposal.html) — font sizes 13.6px / 16px / 20.8px, ratio 1.5:1, insufficient step contrast at the low end.

Fixes applied:
- Replaced `clamp()` padding with static rem values on `section`, `.track-card`, `.gallery-note`, `.contact-panel`.
- Removed `text-transform: uppercase` from `.team-card .team-role` and `.proposal-banner`.
- Moved `overflow-x: hidden` from `body` to `html` (removes the clip on the skip-link, a child of `body`), then confirmed via Playwright that no horizontal scroll is reintroduced at either reviewed viewport, and ultimately removed the rule entirely since no overflow occurs.
- Increased `.proposal-shell h2` to 1.6rem and reduced `.proposal-banner` to 0.75rem, producing font-size steps 12px / 16px / 25.6px (ratios 1.33 and 1.6, both ≥1.25).
- Removed numbered "01/02/03/04" step markers from the care-model section (an advisory `numbered-section-markers` finding caught in an earlier pass) in favor of the existing hairline-border + heading treatment already specified by `DESIGN.md`.

Final run:

```
$ /opt/data/bin/impeccable detect index.html proposal.html rationale.html styles.css script.js
$ echo $?
0
```
Result: **PASS** — 0 anti-patterns found across all shipped site files, exit code 0.

## 5. Local Playwright checks (via a locally available Playwright install, headless Chromium; no network calls, no external services)

Ran against `file://` paths for `index.html` and `proposal.html` at two viewports: **1440×900 (desktop)** and **390×844 (mobile)**.

### index.html

| Check | 1440×900 | 390×844 |
|---|---|---|
| `document.title` | `"Arch Odontologia | Odontologia e Estética Facial em Curitiba"` | same |
| H1 text | `"Odontologia e estética facial, estruturadas do acolhimento ao acompanhamento."` | same |
| H1 count | 1 | 1 |
| Console errors | `[]` | `[]` |
| Page (uncaught) errors | `[]` | `[]` |
| Horizontal overflow (`scrollWidth` vs `clientWidth`) | 1440 vs 1440 → **no overflow** | 390 vs 390 → **no overflow** |
| `.nav-toggle` (hamburger) visible | `false` (desktop nav shown inline, as designed) | `true` |
| Mobile nav toggle functional (`data-open` false→true on click) | n/a | `true` |
| Primary CTA (`a.btn-primary`) count | 2 | 2 |
| Primary CTA visible | `true` | `true` |

### proposal.html

| Check | 1440×900 | 390×844 |
|---|---|---|
| `document.title` | `"Conceito de redesign independente — Arch Odontologia"` | same |
| H1 text | `"Proposta de redesign — Arch Odontologia"` | same |
| H1 count | 1 | 1 |
| Console errors | `[]` | `[]` |
| Page (uncaught) errors | `[]` | `[]` |
| Horizontal overflow | 1440 vs 1440 → **no overflow** | 390 vs 390 → **no overflow** |

### rationale.html (redirect-only stub)

```
Navigated to file://.../rationale.html, waited 500ms.
page.url() after wait: file://.../proposal.html
```
Result: **PASS** — the `meta http-equiv="refresh" content="0; url=proposal.html"` redirect fires correctly and lands on `proposal.html`.

### Screenshots captured (visual confirmation, not shipped in repo)

- `/tmp/arch-screens/index-desktop.png` (1440×900, full page)
- `/tmp/arch-screens/index-mobile.png` (390×844, full page)

Both rendered without visible layout breakage, overlapping text, or empty gaps at the point of capture.

## 6. Post-review consistency checks (2026-07-18)

These checks were rerun after the public homepage team roster was reconciled with the supplied source brief:

```
$ node --check script.js
(no output; exit code 0)
$ python3 - <<'PY'
... required-file check ...
index.html: True; proposal.html: True; rationale.html: True; styles.css: True
script.js: True; README.md: True; SITE_REVIEW.md: True; SOURCE_MANIFEST.md: True
... public-boundary and roster check ...
proposal/redesign/prototype/disclosure: 0 each
<form>/<input>/fetch/XMLHttpRequest/WebSocket: 0 each
team cards: 7
canonical WhatsApp links: 2 (contact link + appointment CTA)
```

Result: **PASS** — all required files exist; the homepage has seven clinical team cards matching the seven named clinical professionals in the source brief; and the public page remains free of proposal material, forms, and script-driven network calls.

## 7. Responsive Playwright validation (2026-07-18)

A fresh headless Chromium run used the locally available Playwright package at exactly **1440×900** and **390×844**. It loaded the public homepage and the separate proposal page from local `file://` URLs, captured full-page screenshots, recorded console/page errors, checked document geometry, and exercised the mobile menu toggle. No external link was opened and no form/contact action was submitted.

### Verified runtime results

| Check | 1440×900 | 390×844 |
|---|---|---|
| `index.html` title and singular H1 | PASS | PASS |
| Console errors / uncaught page errors | `[]` / `[]` | `[]` / `[]` |
| Horizontal overflow (`scrollWidth` vs `clientWidth`) | 1440 vs 1440 — none | 390 vs 390 — none |
| Primary CTA visibility | 2 visible | 2 visible |
| Navigation presentation | Desktop navigation visible; toggle hidden | Toggle visible; menu opened and `aria-expanded` changed `false` → `true` |
| `proposal.html` title/H1 and overflow | PASS; 1440 vs 1440 — none | PASS; 390 vs 390 — none |

The redirect-only `rationale.html` was also loaded and, after 500 ms, resolved to local `proposal.html` as intended.

### Visual inspection

The full-page screenshots were inspected at both target sizes. The homepage and proposal page showed no visible overlap, clipped content, unreadable text, missing assets, or broken layout. The mobile homepage stacked content, treatment cards, team cards, stats, CTA, and footer within the viewport width; the open navigation panel remained usable and did not introduce horizontal overflow. No local corrective changes were necessary.

Screenshots (temporary evidence, not shipped): `/tmp/arch-screens/index-desktop.png`, `/tmp/arch-screens/index-mobile.png`, `/tmp/arch-screens/proposal-desktop.png`, `/tmp/arch-screens/proposal-mobile.png`.

## Summary

| Check | Result |
|---|---|
| `node --check script.js` | PASS (exit 0) |
| Public homepage free of proposal/redesign/prototype/disclosure mentions/links | PASS |
| No forms, uploads, or network-calling code | PASS |
| Homepage roster reconciled with sourced seven-person clinical team | PASS |
| Impeccable detector (canonical CLI v3.2.1) on all shipped site files | PASS — 0 findings, exit 0 |
| Playwright — title/H1 present and singular, no console/page errors, no horizontal overflow, mobile nav functional, CTAs visible (1440×900 and 390×844) | PASS |
| `rationale.html` redirects to `proposal.html` | PASS |
