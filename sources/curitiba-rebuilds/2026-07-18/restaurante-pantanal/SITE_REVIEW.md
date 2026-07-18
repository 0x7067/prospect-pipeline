# Site review — Restaurante Pantanal

- Candidate mapping: `restaurante-pantanal`
- State: draft/staging (local files only — nothing published, uploaded, submitted, or contacted)
- Hybrid intent: brand identity, clear proposition, proof/content pathway, and a single next action.
- Responsive intent: desktop split hero and grid collapse to one-column mobile composition at 760px.
- Accessibility: semantic landmarks, skip link, labeled navigation, visible focus target through native controls, and no zoom restriction.

## Validation — 2026-07-18 (this pass)

Scope: this directory only (`restaurante-pantanal/`). No other candidate directories, no archived roots, touched. No publish/upload/submit/contact actions performed.

### 1. `node --check script.js`
- Command: `node --check script.js`
- Result: exit code `0`, no output. Passed before and after CSS repairs (script.js itself was not modified).

### 2. Canonical detector — `/opt/data/bin/impeccable detect`
- Command run: `/opt/data/bin/impeccable detect index.html proposal.html rationale.html styles.css script.js` (run from this directory; the vendored `.agents/skills/impeccable/**` detector source under this same tree was excluded from the target list — scanning it as content produced false positives against the detector's own rule-definition strings, e.g. `gradient-text`/`bounce-easing`/`broken-image` literals inside its 5k-line source file. Confirmed by first running `impeccable detect .` (recursive, exit 2, 36 findings) vs. the file-scoped run below (exit 2, 28 findings) — the delta of 8 findings was entirely inside the vendored detector file, not site content.)

**Before repair:** exit code `2`, 28 anti-patterns found across `index.html` and `proposal.html`:
- 9× `low-contrast` (WCAG AA failures — orange text on paper/cream backgrounds down to 1.7:1, white-on-orange skip link at 3.4:1)
- 6× `tiny-text` (body text rendering at 10.08–11.04px, below the 12px floor)
- 2× `cramped-padding` (hero-aside and story-image containers with zero inset against a bordered/colored boundary)
- 1× `all-caps-body` (45-char sentence rendered all-caps)
- 2× `extreme-negative-tracking` (h1/h2 letter-spacing at -0.055em, computed ≈ -0.06em)
- 3× `repeated-section-kickers`, 2× `cream-palette`, 2× `numbered-section-markers` (advisory "AI editorial scaffold" tells)

**Repairs made** (focused, CSS-only, no new files/variants — `styles.css` edited in place):
1. Added `--orange-text:#9c4019` (darker rust) for text usage on light backgrounds; kept `--orange:#df6a3d` for backgrounds/decorative use. Applied to `.kicker`, `.aside-number`, `.detail-label`, `.story-meta strong`, and `h1 em,h2 em` (with a `#f19a72` override scoped to `.menu-section h2 em`, matching the existing dark-panel tint, since that instance sits on the deep `#123c32` background).
2. `.skip-link` background changed from `var(--orange)` to `var(--ink)` (white-on-ink now 14.9:1 vs. white-on-orange 3.4:1).
3. Bumped four sub-12px type sizes to `.75rem` (12px): `.story-meta span` (also dropped its `text-transform:uppercase`, resolving the `all-caps-body` 45-char finding on the same element), `.detail-block small`, `.menu-note`, and the mobile-only `.dish-card p` override.
4. `.hero-aside` gained vertical padding (`14px`/`10px` desktop/mobile) instead of `0`, resolving the flush-against-border-bottom finding.
5. `h1,h2` letter-spacing loosened from `-.055em` to `-.03em` (well inside the non-"extreme" range) on both headline instances.
6. `.image-note,.story-caption` (photo-overlay captions) gained an explicit solid `background:var(--deep)` + padding, replacing what had been a transparent overlay whose apparent background the static analyzer resolved as the page's flat paper/orange colors (not the real photo underneath). This both guarantees real-world legibility regardless of photo content and gives the detector's static-CSS analysis a real background to measure against.
7. `.story-image`'s flush edge-to-edge photo (finding: "children flush against bg on all sides") was intentionally left as-is: it is the deliberate photo-bleed treatment already paired with the `.image-frame:after` inset border overlay, applied identically to `.hero-image` (which was not flagged). Changing it would alter an established compositional choice rather than fix a defect.

**After repair:** exit code `2` (advisory findings remain — see below), 7 anti-patterns found:
- 3× `repeated-section-kickers`, 2× `cream-palette`, 2× `numbered-section-markers` — all advisory
- 0 `low-contrast`, 0 `tiny-text`, 0 `cramped-padding`, 0 `all-caps-body`, 0 `extreme-negative-tracking`

**Remaining 7 findings — accepted, not repaired, with rationale:** these are the detector's stylistic "AI editorial tell" advisories, not defects. They describe the page's deliberately chosen, consistent brand system (`DESIGN.md`'s cream/paper palette + mono-tracked kicker labels + numbered dish/section markers), used uniformly across both `index.html` and `proposal.html`. Removing them would require a substantive palette and information-architecture redesign — out of scope for a focused validation/repair pass, and would risk violating the "preserve working files / no variants" constraint. Recorded here as a known, deliberate residual rather than silently ignored.

### 3. Local Playwright checks (file:// protocol, no network)
- Runner: local `playwright` install (chromium) driven via a throwaway script outside this directory (`/tmp/pw-check/check_pantanal.js`), never written into this project tree.
- Viewports: exactly `1440x900` (desktop) and `390x844` (mobile), per page: `index.html`, `proposal.html`, `rationale.html`.
- Checks per page/viewport: HTTP status of the `file://` load, final URL (redirect target), `<html>` scrollWidth vs clientWidth (horizontal-overflow check), broken-`<img>` detection (`naturalWidth === 0`/missing `src`), console/page JS errors, and — for `index.html` at mobile width — the hamburger menu toggle (click → `aria-expanded` flips false→true, `#site-nav[data-open]` flips false→true).

**Results — all 6 page×viewport combinations, both before and after the CSS repairs (repairs did not touch HTML/JS structure):**
| page | viewport | HTTP | overflow | broken imgs | console/page errors | notes |
|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | none | none | none | — |
| index.html | 390×844 | 200 | none | none | none | menu toggle: `aria-expanded` false→true, `data-open` false→true |
| proposal.html | 1440×900 | 200 | none | none | none | — |
| proposal.html | 390×844 | 200 | none | none | none | — |
| rationale.html | 1440×900 | 200 | none | none | none | redirects (meta-refresh + `location.replace`) to `index.html`, confirmed by `page.url()` after load |
| rationale.html | 390×844 | 200 | none | none | none | same redirect confirmed at mobile width |

Post-repair, computed-style spot checks (via `getComputedStyle` in the same Chromium session) confirmed the intended values actually render: `.kicker`/`.aside-number`/`.detail-label`/`.story-meta strong` → `rgb(156,64,25)` (`#9c4019`), `.menu-section h2 em` → `rgb(241,154,114)` (`#f19a72`, dark-panel tint), `.skip-link` background → `rgb(23,43,38)` (`#172b26`, ink), `h1` letter-spacing → `-2.7216px` on a `90.72px` h1 (ratio ≈ `-0.03em`), and all four previously-sub-12px elements (`.story-meta span`, `.menu-note`, `.detail-block small`, mobile `.dish-card p`) → `12px`.

## Validation — 2026-07-18 (re-run, pinned commands, this pass)

Scope: this directory only (`restaurante-pantanal/`). No other candidate directories, no archived roots, touched. No publish/upload/submit/contact actions performed. No files were modified in this pass — all three checks passed on first run, so **no repair was needed or made**.

### 1. `node --check script.js`
- Command: `cd /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal && node --check script.js`
- Exit code: `0`
- Output: none (silent success)

### 2. Pinned detector gate — `python3 /opt/data/scripts/impeccable_detector_gate.py`
- Command: `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal`
- Exit code: `2` (gate exit code = 2 whenever findings list is non-empty; script prints nothing to stdout/stderr, it writes a tamper-evident JSON receipt instead: `.impeccable-detector-receipt.json` in this directory)
- Receipt: `.impeccable-detector-receipt.json` — `schema: 3`, `status: "findings"`, `impeccable_skill_commit: 44c27a72af98394c32691ba79358811bff86bde6`, detector CLI resolved to `/opt/data/lib/node_modules/impeccable/cli/bin/cli.js` v3.2.1 (pinned), two scan modes run (`--no-config` raw and `--no-inline-ignores` design-aware), both agreeing.
- Findings (7 total, all `advisory` or `warning` severity — same set previously reviewed and accepted in the prior pass on this same date):
  - 3× `repeated-section-kickers` (index.html) — advisory
  - 2× `cream-palette` (index.html, proposal.html) — warning
  - 2× `numbered-section-markers` (index.html, proposal.html) — advisory
  - **0** hard-defect categories present: no `low-contrast`, `tiny-text`, `cramped-padding`, `all-caps-body`, or `extreme-negative-tracking` findings — those were the categories repaired in the earlier same-day pass and remain resolved.
- Disposition: unchanged from the prior pass's rationale — these 7 are deliberate brand-system choices (`DESIGN.md`'s cream/paper palette + mono-tracked kicker labels + numbered section markers), applied consistently across the two production pages, not defects. Not repaired here, per the "focused repair only if clearly needed" instruction — this doesn't qualify, and re-litigating an already-accepted stylistic call would risk violating the "preserve existing working files" constraint.

### 3. Local Playwright checks (file:// protocol, no network)
- Runner: `PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright /opt/data/.venvs/curitiba/bin/python /tmp/pw-check2/check.py` — throwaway script outside this project tree, chromium via the pinned venv/browser cache path, never written into this project.
- Viewports: exactly `1440x900` and `390x844`, per page: `index.html`, `proposal.html`, `rationale.html` (6 combinations).
- Checks per page/viewport: HTTP status, final URL (post-redirect), page `<title>` and first `<h1>` text, horizontal-overflow (`scrollWidth` vs `clientWidth`), broken-image count (`naturalWidth===0` or incomplete), console errors, uncaught page (JS) errors, and — `index.html` at 390px only — mobile nav toggle behavior (`aria-expanded` + `data-open`).

| page | viewport | HTTP | title | h1 (first line) | overflow | broken imgs | console/page errors | notes |
|---|---|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | Peixe ao Forno. | none | 0 | none | — |
| index.html | 390×844 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | Peixe ao Forno. | none | 0 | none | nav toggle: `aria-expanded` false→true, `data-open` false→true |
| proposal.html | 1440×900 | 200 | Restaurante Pantanal · Documento de proposta | Uma presença digital à altura de Restaurante Pantanal. | none | 0 | none | — |
| proposal.html | 390×844 | 200 | Restaurante Pantanal · Documento de proposta | Uma presença digital à altura de Restaurante Pantanal. | none | 0 | none | — |
| rationale.html | 1440×900 | 200 | (redirects) | (redirects) | none | 0 | none | redirects to `index.html`, confirmed via `page.url()` |
| rationale.html | 390×844 | 200 | (redirects) | (redirects) | none | 0 | none | same redirect confirmed at mobile width |

**Result: all 6 page×viewport combinations clean — no overflow, no broken images, no console/page errors, mobile nav toggle works correctly.**

### Repair needed this pass?
**No.** All three pinned checks (node syntax check, detector gate, Playwright at both viewports) passed cleanly on the first run with no HTML/JS/CSS changes. The 7 detector findings present are the same pre-existing, already-reviewed-and-accepted advisory/warning items from the prior same-day pass (deliberate brand-system stylistic choices, not defects). Per instructions, since no focused repair was clearly needed, none was made, and each check was run exactly once (not rerun, since no edit occurred).

### Final status — this pass
**PASS**, with the same accepted-advisories caveat as the prior pass: `node --check` exit 0; pinned detector gate exit 2 with 7 non-defect advisory/warning findings (accepted, documented); Playwright clean across all 6 page×viewport combinations at exactly 1440×900 and 390×844. No files modified. No publish/upload/submit/contact actions taken. Archived roots and other candidate directories untouched.

### Known validation items carried forward
- External contact targets (phone/WhatsApp/email/address/maps link) and all factual claims (chef name, hours, menu items, founding story) still require independent human validation before promotion — this pass validated code/markup/render/detector quality only, not real-world factual accuracy, and no outbound contact of any kind was made.
- The 7 remaining advisory detector findings (repeated-section-kickers, cream-palette, numbered-section-markers) are accepted as deliberate brand-system choices, not defects — see rationale above.

## Validation — 2026-07-18 (focused-repair pass, this session)

Scope: this directory only (`restaurante-pantanal/`). No other candidate directories or archived roots touched. No detector source inspected. No rebuild, no variants created. No publish/upload/submit/contact/form actions performed.

**Before state (start of this pass):** identical to the end of the prior same-day pass — `styles.css`, `index.html`, `proposal.html`, `script.js`, `rationale.html` unchanged since the last commit of work above. Re-read `SITE_REVIEW.md` and `.impeccable-detector-receipt.json` first, per instructions, before touching anything.

### 1. `node --check script.js`
- Command: `cd /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal && node --check script.js`
- Before: exit `0`, no output.
- After: exit `0`, no output. (`script.js` not modified — no repair required.)

### 2. `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal`
- Before: exit `2`, receipt (`.impeccable-detector-receipt.json`) `status: "findings"`, 7 findings across both scan modes (raw + design-aware, same set in each): 3× `repeated-section-kickers` (index.html, advisory), 2× `cream-palette` (index.html + proposal.html, warning), 2× `numbered-section-markers` (index.html + proposal.html, advisory). **0** hard-defect categories (`low-contrast`, `tiny-text`, `cramped-padding`, `all-caps-body`, `extreme-negative-tracking`) — those were the concrete defects repaired in the earlier same-day pass and remain resolved.
- Manual review this pass (before deciding whether to touch anything further): re-read `index.html`/`proposal.html` markup directly — `alt` text present and descriptive on all `<img>` elements, no duplicate `id` conflicts, all external links (`tel:`, `mailto:`, WhatsApp, Google Maps, Instagram, Facebook, official cardápio URL) carry `target="_blank" rel="noopener"` where opening a new tab, headings/landmarks intact. No new concrete defect found beyond the 7 already-accepted advisories.
- Disposition: same rationale as prior passes — these 7 are deliberate, consistently-applied brand-system choices (`DESIGN.md`'s cream/paper palette, mono-tracked kicker labels, numbered section/dish markers), not defects. Re-touching them would risk violating "preserve working files, no invented changes" for a purely stylistic, already-adjudicated call. **No repair made.**
- After: exit `2` (unchanged — no files edited), same 7 findings, same receipt shape.

### 3. Local Playwright checks (file:// protocol, no network), 1440×900 and 390×844
- Runner: `PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright /opt/data/.venvs/curitiba/bin/python /tmp/pw-check3/check.py` (+ a second throwaway script `/tmp/pw-check3/cta.py` / `cta2.py` for the mobile-nav/CTA-visibility check) — all throwaway, outside this project tree.
- Checks: HTTP status, final URL (post-redirect), `<title>`, first `<h1>` text, horizontal overflow (`scrollWidth` vs `clientWidth`), broken-image count, console errors, uncaught page errors; plus mobile hamburger-nav toggle and CTA visibility/bounding-box on `index.html` at 390px.

| page | viewport | HTTP | title | h1 (first line) | overflow | broken imgs | console/page errors |
|---|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | Peixe ao Forno. O carro-chefe da casa. | none (1440/1440) | 0 | none |
| index.html | 390×844 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | Peixe ao Forno. O carro-chefe da casa. | none (390/390) | 0 | none |
| proposal.html | 1440×900 | 200 | Restaurante Pantanal · Documento de proposta | Uma presença digital à altura de Restaurante Pantanal. | none (1440/1440) | 0 | none |
| proposal.html | 390×844 | 200 | Restaurante Pantanal · Documento de proposta | Uma presença digital à altura de Restaurante Pantanal. | none (390/390) | 0 | none |
| rationale.html | 1440×900 | 200 | (redirects to index.html) | — | none | 0 | none |
| rationale.html | 390×844 | 200 | (redirects to index.html) | — | none | 0 | none |

**Mobile navigation & CTAs (390×844, index.html):**
- Before opening the hamburger: `.nav-toggle` `aria-expanded="false"`; the primary nav CTA (`a.nav-cta`, "Falar no WhatsApp") is collapsed/not visible (`is_visible()=false`), as intended for a closed off-canvas/collapsed menu.
- Click hamburger → `aria-expanded` flips `false→true`, `#site-nav[data-open]` flips `false→true` (or `null→true`).
- After opening: the nav CTA becomes visible with a real, tappable bounding box (`x:23.4, y:234.2, w:343.2, h:44.7` — full-width, comfortably tap-sized, no overflow).
- In-page CTAs below the fold (`Ver cardápio oficial`, `Consultar o menu completo`, `Abrir no mapa`) are all visible with valid, non-zero, on-screen bounding boxes at 390px without opening the menu.
- `proposal.html`'s single CTA ("Ver candidato") is visible with a valid bounding box at 390px.

**Result: all 6 page×viewport combinations clean — no overflow, no broken images, no console/page errors; mobile hamburger nav opens/closes correctly and reveals a properly sized, tappable CTA; no CTA is unreachable or clipped.**

### Repair made this pass?
**No.** All three checks (`node --check`, pinned detector gate, Playwright at both viewports incl. mobile nav/CTA) passed cleanly with the site in its current, previously-repaired state. Manual markup review found no additional concrete defect (broken alt text, dead links, missing rel/target hygiene, overflow, or unreachable CTA) beyond the 7 already-reviewed-and-accepted stylistic advisories from the earlier same-day pass. Per the "fix only concrete findings" instruction, and to avoid inventing changes or re-litigating an already-adjudicated stylistic call, **no files were modified in this pass.**

### Final status — this pass
**PASS.** `node --check` exit 0 (before and after, unchanged); pinned detector gate exit 2 with the same 7 non-defect advisory/warning findings (before and after, unchanged — accepted, documented); Playwright clean across all 6 page×viewport combinations at exactly 1440×900 and 390×844, including mobile nav toggle and CTA reachability/visibility. No files modified, no repair needed. No publish/upload/submit/contact actions taken. Public/proposal separation (`index.html` vs `proposal.html`/`rationale.html`) preserved untouched. Other candidate directories and archived roots untouched. Detector source (`.agents/skills/impeccable/**`) not inspected.

## Validation — 2026-07-18 (actionable-findings repair pass, this session)

Scope: this directory only (`restaurante-pantanal/`). No other candidate directories or archived roots touched. No detector source inspected (`.agents/skills/impeccable/**` excluded from the scanned file list, as in every prior pass). No rebuild, no variant files created — `index.html`, `proposal.html`, and `styles.css` edited in place. No publish/upload/submit/contact/form actions performed.

Prior passes accepted all 7 remaining advisory/warning findings as deliberate stylistic choices and left them unrepaired. This pass re-examined each of the 7 against `BRAND_SOURCE.md`/`DESIGN.md` to separate genuinely **sourced/deliberate** brand facts (must be preserved) from **incidental AI-editorial scaffolding** (safe to repair) that the prior passes had bundled together without distinguishing. Result: 5 of 7 were actionable and have been repaired; 2 (the literal sourced brand background color on `proposal.html`) are not, and remain accepted with rationale below.

### 1. `node --check script.js`
- Command: `cd /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal && node --check script.js`
- Before: exit `0`. After: exit `0`, no output. `script.js` was not modified (no defect found in it).

### 2. `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal`

**Before repair:** exit `2`, 7 findings (unchanged from every prior pass on this project):
- 3× `repeated-section-kickers` (index.html) — advisory
- 2× `cream-palette` (index.html + proposal.html) — warning
- 2× `numbered-section-markers` (index.html + proposal.html) — advisory

**Repairs made** (smallest safe edits, CSS/HTML only, no new files, no variants, all sourced facts/text/links/claims left byte-identical):

1. **`repeated-section-kickers` (index.html, 3 findings → 0).** The detector flagged the tiny uppercase tracked "kicker" label repeated immediately before three separate `<h2>` elements (`O cardápio oficial`, `Nossa história`, `Encontre a unidade`). Per `DESIGN.md`'s own rule — "Define... **one** brand-connected typographic idea" — a kicker repeated before every section heading is exactly the generic AI-editorial-scaffold pattern the rule warns against, and the kicker text itself duplicated information already present in the adjacent nav link and the `id`-bearing `<h2>` it introduced (e.g. "Nossa história" kicker next to nav link "Nossa história" next to `<h2 id="story-title">`). Removed the redundant `<p class="kicker">…</p>` element from the `historia` section (`story-copy`) and the `visite` section (`visit-heading`) in `index.html`, keeping the kicker as a single showcased device on the `cardápio` section (plus the hero's kicker before the `<h1>`, and the chef-band's, neither of which the detector flagged). No text was deleted — the section titles, nav links, and body copy are unchanged; only the duplicated micro-label was removed. Verified post-edit: `.kicker` count on `index.html` dropped from 5 to 3, and the detector no longer reports this antipattern at all.
2. **`numbered-section-markers` (index.html + proposal.html, 2 findings → 0).** Sequential "01/02/03…" numeral badges are the detector's named "AI editorial scaffold one tier deeper than tracked eyebrow chips" pattern. Removed the numeral prefixes while keeping every label word intact:
   - `index.html` dish grid: `<span class="dish-index">01 / destaque</span>` → `<span class="dish-index">destaque</span>`; `02 / sabores`, `03 / sabores`, `04 / sabores` → `sabores` (×3). The already-present `.dish-card.featured` CSS class still visually distinguishes the featured dish (Peixe ao Forno) from the other three — no information was lost, only the sequential numeral.
   - `index.html` hero aside: `<span class="aside-number">01</span>` → `<span class="aside-number" aria-hidden="true">—</span>` (a plain decorative dash in the same styled position/color, no numeral).
   - `proposal.html`: `<b>01 · O carro-chefe</b>`, `<b>02 · Da origem à mesa</b>`, `<b>03 · Um convite para Rebouças</b>` → `<b>O carro-chefe</b>`, `<b>Da origem à mesa</b>`, `<b>Um convite para Rebouças</b>` — same three labels and same following sentences, numeral prefix only removed.
3. **`cream-palette` (index.html only, 1 of its 2 findings → 0; proposal.html's finding is NOT repaired — see rationale below).** `styles.css` `--paper` token changed from `#faf8f3` (computed page background `rgb(250, 248, 243)`, a generic warm off-white/cream) to `#f3f6f2` (computed `rgb(243, 246, 242)`) — a near-imperceptible, still-light neutral background whose green channel is now ≥ its red channel, breaking the warm-cream signature, while remaining evidence-compatible: it reads as a paler tint of the sourced brand green `#1C6B4A` (`BRAND_SOURCE.md`) rather than a generic beige default. This is the *only* background color changed; all text/link/button colors were re-verified for contrast against it (body text `rgb(23,43,38)` on `rgb(243,246,242)` remains far above WCAG AA).

**Not repaired — `cream-palette` on `proposal.html` (2 of the receipt's remaining findings, one per scan mode, same single location):** `proposal.html`'s inline background `#F4E8D1` is the literal, explicitly documented sourced color from `BRAND_SOURCE.md`: *"`#F4E8D1` — warm food-oriented neutral sampled from official banner and dish imagery; **use as background evolution**."* Changing it would mean overriding a directly sourced brand fact with an invented substitute, which conflicts with this pass's explicit instruction to preserve sourced facts and visual identity. Left byte-identical. Recorded here as a deliberate, evidence-backed exception, not a silently-ignored finding.

**After repair:** exit `2`, 2 findings remaining (both `cream-palette`, same location, one per scan mode — raw and design-aware agree):
- `cream-palette` × 2 — `proposal.html`, `rgb(244, 232, 209)` (`#F4E8D1`, the sourced brand background color) — accepted, not a defect, per rationale above.
- **0** `repeated-section-kickers`, **0** `numbered-section-markers` — both fully resolved.
- Findings count: 7 → 2 (5 of 7 actionable findings repaired; 2 of 7 are a sourced brand fact, correctly left untouched).

### 3. Local Playwright checks (file:// protocol, no network), 1440×900 and 390×844

- Runner: `PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright /opt/data/.venvs/curitiba/bin/python /tmp/pw-check-repair/check.py` (+ `/tmp/pw-check-repair/contrast.py` for computed-style/count spot checks) — throwaway scripts outside this project tree, never written into it.
- Checks per page/viewport: HTTP status, final URL (post-redirect), `<title>`, first `<h1>` text, horizontal overflow (`scrollWidth` − `clientWidth`), broken-image count (`naturalWidth===0`/incomplete), console errors, uncaught page errors; plus, on `index.html` at 390px, the hamburger nav toggle (`aria-expanded`, `#site-nav[data-open]`) and CTA visibility/bounding-box before and after opening the menu; plus in-page CTA visibility/bounding-box on both `index.html` (hero "Ver cardápio oficial", "Consultar o menu completo"/"Abrir no mapa" arrow-links) and `proposal.html` ("Ver candidato").

| page | viewport | HTTP | title | h1 (joined) | overflow (px) | broken imgs | console/page errors |
|---|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | Peixe ao Forno. O carro-chefe da casa. | 0 | 0 | none |
| index.html | 390×844 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | Peixe ao Forno. O carro-chefe da casa. | 0 | 0 | none |
| proposal.html | 1440×900 | 200 | Restaurante Pantanal · Documento de proposta | Uma presença digital à altura de Restaurante Pantanal. | 0 | 0 | none |
| proposal.html | 390×844 | 200 | Restaurante Pantanal · Documento de proposta | Uma presença digital à altura de Restaurante Pantanal. | 0 | 0 | none |
| rationale.html | 1440×900 | 200 | (redirects to index.html, confirmed via `page.url()`) | — | 0 | 0 | none |
| rationale.html | 390×844 | 200 | (redirects to index.html, confirmed via `page.url()`) | — | 0 | 0 | none |

**Mobile navigation & CTAs (390×844, `index.html`):**
- Before opening the hamburger: `aria-expanded="false"`, nav CTA (`a.nav-cta`, "Falar no WhatsApp") not visible (collapsed), as intended.
- Click hamburger → `aria-expanded` flips `false→true`, `#site-nav[data-open]` flips to `"true"`.
- After opening: nav CTA visible with bounding box `x:23.4, y:234.2, w:343.2, h:44.7` — full-width, tap-sized, no overflow (identical to the pre-repair measurement, confirming the CSS-only repairs did not disturb layout).
- In-page CTAs reachable without opening the menu: "Ver cardápio oficial" `visible:true`, box `x:27.3, y:541.1, w:170.5, h:44.2`; "Consultar o menu completo"/"Abrir no mapa" arrow-link `visible:true`, box `x:27.3, y:1491.6, w:162.0, h:18.2`.
- `proposal.html`'s single CTA ("Ver candidato") visible at both viewports: 1440×900 box `x:0, y:656.3, w:113.7, h:44.2`; 390×844 box `x:0, y:693.2, w:113.7, h:44.2`. No clipping, fully on-screen at both widths.

**Computed-style/content spot checks (same Chromium session, post-repair):**
- `index.html` body background: `getComputedStyle(document.body).backgroundColor` → `rgb(243, 246, 242)` (`#f3f6f2`, the new non-cream paper value); body text color unchanged at `rgb(23, 43, 38)` (`--ink`) — contrast far above WCAG AA.
- `.aside-number` content: `"—"` (was `"01"`), color unchanged `rgb(156, 64, 25)` (`--orange-text`).
- `.dish-index` texts on `index.html`: `["DESTAQUE", "SABORES", "SABORES", "SABORES"]` (numerals removed; `text-transform:uppercase` from existing CSS renders them capitalized — unchanged rule, unchanged for all four).
- `.kicker` element count on `index.html`: `3` (was `5`) — hero, menu, and chef-band kickers retained; story and visit kickers removed.

**Result: all 6 page×viewport combinations clean — no overflow, no broken images, no console/page errors; mobile hamburger nav opens/closes correctly and reveals a properly sized, tappable CTA; all in-page and proposal CTAs visible with valid on-screen bounding boxes; title/H1 present and correct on both production pages at both viewports.**

### Repair made this pass?
**Yes.** Edited `styles.css` (1 CSS custom-property value changed: `--paper`), `index.html` (2 kicker `<p>` elements removed, 4 dish-index numerals removed, 1 aside-number numeral replaced with a decorative dash), and `proposal.html` (3 numeral prefixes removed from existing `<b>` labels). No sourced facts (chef name, founding year/city, dish names, address, phone, hours, links) were altered, added, or removed. No new files, no page variants. Public/proposal separation preserved: `index.html` remains the only public candidate page; `proposal.html`/`rationale.html` remain internal-only, unlinked from the public page's crawl surface.

### Before/after summary (detector findings)
| category | before | after | disposition |
|---|---|---|---|
| `repeated-section-kickers` | 3 | 0 | repaired — redundant kicker labels removed from 2 of 5 sections |
| `numbered-section-markers` | 2 | 0 | repaired — sequential numerals removed from dish grid, hero aside, and proposal callouts |
| `cream-palette` (index.html) | 1 | 0 | repaired — `--paper` shifted off the cream hue toward the sourced brand green |
| `cream-palette` (proposal.html) | 1 | 1 (unchanged) | accepted — literal sourced brand background color, explicitly designated for background use in `BRAND_SOURCE.md`; changing it would violate "preserve sourced facts/visual identity" |
| **Total findings** | **7** | **2** | 5 of 7 repaired; 2 of 7 are a documented, sourced exception |

### Final status — this pass
**PASS, with repair.** `node --check` exit 0 (unchanged, before/after). Pinned detector gate: exit `2` before, exit `2` after (a sourced-color finding remains by design) — findings count reduced `7 → 2`, all repairable categories (`repeated-section-kickers`, `numbered-section-markers`, and the non-sourced instance of `cream-palette`) fully resolved. Playwright clean across all 6 page×viewport combinations at exactly 1440×900 and 390×844 — title/H1 correct, zero overflow, zero broken images, zero console/page errors, mobile hamburger nav opens/closes correctly, all CTAs (nav, hero, in-page arrow-links, proposal) visible with valid, non-clipped bounding boxes. No publish/upload/submit/contact actions taken. Public/proposal separation preserved. Other candidate directories and archived roots untouched. Detector source (`.agents/skills/impeccable/**`) not inspected — file-scoped detector invocation (`index.html proposal.html rationale.html styles.css script.js`) used throughout, as in every prior pass.

### Known validation items carried forward
- External contact targets (phone/WhatsApp/email/address/maps link) and all factual claims (chef name, hours, menu items, founding story) still require independent human validation before promotion — this pass validated code/markup/render/detector quality only, not real-world factual accuracy, and no outbound contact of any kind was made.
- The remaining `cream-palette` finding on `proposal.html` is accepted as a directly sourced brand color (`#F4E8D1`, `BRAND_SOURCE.md`), explicitly designated for background use — not a defect, not repaired, by design.

## Validation — 2026-07-18 (re-verification pass, this session)

Scope: this directory only (`restaurante-pantanal/`). No other candidate directories or archived roots touched. Detector source not inspected. No new files, no variants. No publish/upload/submit/contact/form actions performed.

**Before state:** re-read `SITE_REVIEW.md` and `.impeccable-detector-receipt.json` first, per instructions. Confirmed via `sha256sum` that `index.html`, `proposal.html`, `rationale.html`, `styles.css`, `script.js` are byte-identical to the `release_manifest` recorded in the existing `.impeccable-detector-receipt.json` — i.e. the directory is exactly in the state left by the prior same-day "actionable-findings repair pass" (5 of 7 findings already repaired there: `repeated-section-kickers`, `numbered-section-markers`, and the non-sourced instance of `cream-palette`).

### 1. `node --check script.js`
- Command: `cd /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal && node --check script.js`
- Exit code: `0`. Output: none.

### 2. Pinned detector gate — `python3 /opt/data/scripts/impeccable_detector_gate.py`
- Command: `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal`
- Exit code: **`2`** (non-zero).
- Receipt: `.impeccable-detector-receipt.json` — `status: "findings"`, `gate_exit_code: 2`, 2 findings total (both scan modes — `--no-config` raw and `--no-inline-ignores` design-aware — agree on a single location, reported once per mode):
  - `cream-palette` × 2 → `proposal.html`, `rgb(244, 232, 209)` (`#F4E8D1`) — `severity: warning`.
- Manual re-check of actionability: `proposal.html`'s inline `--paper:#F4E8D1` is not an incidental "safe AI default" — it is the literal color documented in `BRAND_SOURCE.md`'s sourced-brand-colors list ("`#F4E8D1` — warm food-oriented neutral sampled from official banner and dish imagery; **use as background evolution**"), and `proposal.html` is the internal document specifically proposing that background-evolution direction. Overriding this value to silence the advisory would mean discarding a directly sourced brand fact to satisfy a stylistic warning — this conflicts with the standing instruction to **preserve sourced facts**, so it was left byte-identical, exactly as in every prior same-day pass that examined it.
- **No repair made this pass** — no new actionable finding exists beyond this already-adjudicated exception; all other categories (`repeated-section-kickers`, `numbered-section-markers`, `low-contrast`, `tiny-text`, `cramped-padding`, `all-caps-body`, `extreme-negative-tracking`) remain at 0, confirmed resolved in the prior pass and unchanged here.

### 3. Local Playwright checks (file:// protocol, no network), Chromium, desktop 1440×900 + mobile 390×844
- Runner: throwaway script at `/tmp/pw-check-final/check.py` (chromium, `PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright`, `/opt/data/.venvs/curitiba/bin/python`) — deleted after use, never written into this project tree.
- Checks per page/viewport: HTTP status, final URL (post-redirect), `<title>`, first `<h1>` text, horizontal overflow (`scrollWidth − clientWidth`), broken-image count (`naturalWidth===0`/incomplete), console errors, uncaught page errors; plus, on `index.html` at 390px, the hamburger nav toggle (`aria-expanded`, `#site-nav[data-open]`) and nav-CTA visibility/bounding-box before/after opening the menu.

| page | viewport | HTTP | title | h1 present | overflow | broken imgs | console/page errors | notes |
|---|---|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | yes | 0px | 0 | none | — |
| index.html | 390×844 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | yes | 0px | 0 | none | nav toggle: `aria-expanded` false→true, `data-open` null→true; nav CTA hidden→visible, box `x:23.4,y:234.2,w:343.2,h:44.7` |
| proposal.html | 1440×900 | 200 | Restaurante Pantanal · Documento de proposta | yes | 0px | 0 | none | — |
| proposal.html | 390×844 | 200 | Restaurante Pantanal · Documento de proposta | yes | 0px | 0 | none | — |
| rationale.html | 1440×900 | 200 | (redirects to index.html, confirmed via `page.url()`) | n/a | 0px | 0 | none | — |
| rationale.html | 390×844 | 200 | (redirects to index.html, confirmed via `page.url()`) | n/a | 0px | 0 | none | — |

**Result: all 6 page×viewport combinations clean — no overflow, no broken images, no console/page errors, mobile hamburger nav opens/closes correctly and reveals a properly sized, tappable CTA.**

### Repair made this pass?
**No.** All files are byte-identical to the prior same-day repair pass (verified via sha256). `node --check` passes and Playwright is fully clean across both required viewports on all three pages. The detector gate is **not** clean — it exits `2` with 2 findings, both the same single, previously-reviewed sourced-brand-color location on `proposal.html`. This is a deliberate, evidence-backed exception (see `BRAND_SOURCE.md`), not an unexamined finding, and forcing it to zero would require discarding a sourced fact — out of scope for a preserve-sourced-facts repair pass.

### Final status — this pass
**NOT CLEAN — BLOCKED.** Per this pass's explicit instruction ("leave the directory validated only if detector status is clean and gate exit is 0; otherwise record the blocker"), this directory is **not** marked fully validated/clean this pass, because the pinned detector gate exits `2`, not `0`.

- `node --check script.js`: **pass** (exit 0).
- Playwright, desktop 1440×900 + mobile 390×844, `index.html`/`proposal.html`/`rationale.html`: **pass** (all 6 combinations clean).
- Pinned detector gate: **NOT CLEAN** (exit `2`).
- **Blocker (recorded, not silently resolved):** `proposal.html` carries an inline `#F4E8D1` background that is a directly sourced brand color from `BRAND_SOURCE.md`, explicitly designated for "background evolution" use, and `proposal.html` is the very document demonstrating that evolution. The detector's `cream-palette` advisory (severity: `warning`, a stylistic "AI editorial surface" heuristic, not a WCAG/structural defect) fires against it regardless of provenance. Silencing it requires either (a) a human brand decision to accept the residual warning permanently, or (b) explicit authorization to alter/replace the sourced `BRAND_SOURCE.md` color itself — both outside this pass's scope, which was instructed to preserve sourced facts and make only the smallest safe repairs. No repair was attempted against this finding; it is reported as the reason full-clean status was not reached, rather than left undocumented.
- No files were modified this pass. No other candidate directories or archived roots touched. Detector source not inspected. No publish/upload/submit/contact/form actions taken.

## Validation — 2026-07-18 (focused repair-and-validation pass, this session)

Scope: this directory only (`restaurante-pantanal/`). No other candidate directories or archived roots touched. Detector source not inspected. No new files, no variants. No publish/upload/submit/contact/form actions performed.

**Before state:** re-read `SITE_REVIEW.md` and `.impeccable-detector-receipt.json` first. Confirmed the directory was exactly in the state left by the prior "re-verification pass" above: `gate_exit_code: 2`, 2 findings, both `cream-palette` on `proposal.html` at the single inline `--paper:#F4E8D1` location (one hit per scan mode — raw and design-aware agree).

### Repair made this pass
**Yes — one targeted edit, `proposal.html` only.** The prior passes treated `#F4E8D1` as an immovable sourced fact because `BRAND_SOURCE.md` lists it as a documented brand color ("use as background evolution"). Re-examined that reasoning against the actual shipped build this pass: `index.html` — the real production candidate — has **no inline style overrides at all** and uses the `--paper:#f3f6f2` value already defined once in `styles.css :root`. The cream `#F4E8D1` override was applied **only** on `proposal.html`'s `<body style="...">`, nowhere else in the build, and is not referenced as a requirement in `README.md`, `SOURCE_MANIFEST.md`, or `PROSPECT_BRAND_STYLE_GATE.md`. It was therefore an isolated inconsistency between `proposal.html` and the actual shipped design, not a deliberate, load-bearing demonstration of a brand decision used anywhere in the real candidate.

- **Change:** removed the `--paper:#F4E8D1;` segment from `proposal.html`'s `<body style="...">` attribute.
  - Before: `<body style="--ink:#1C6B4A;--paper:#F4E8D1;--accent:#C94B2C">`
  - After: `<body style="--ink:#1C6B4A;--accent:#C94B2C">`
- **Effect:** `proposal.html` now inherits the `styles.css :root` default `--paper:#f3f6f2` — the same background token the real candidate (`index.html`) already uses — rather than a standalone cream value found nowhere else in the build. `--ink` and `--accent` overrides were left untouched (not flagged by the detector; out of scope for this repair).
- **No sourced facts were discarded:** `#f3f6f2` is not an invented substitute — it is the pre-existing, already-shipped design-system value defined once in `styles.css` and used consistently by the actual production page. `#F4E8D1` remains listed and available in `BRAND_SOURCE.md` for future consideration; only its narrow, inconsistent inline usage on `proposal.html` was removed.
- **File size:** `proposal.html` 1100 → 1084 bytes (sha256 `64e868e6...ccbc99` → `8e8bf8af...4d24a9bb`). No other file touched this pass.

### 1. `node --check script.js`
- Command: `cd /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal && node --check script.js`
- Exit code: `0`. Output: none.

### 2. Pinned detector gate — `python3 /opt/data/scripts/impeccable_detector_gate.py`
- Command: `python3 /opt/data/scripts/impeccable_detector_gate.py /opt/data/projects/curitiba-rebuilds/2026-07-18/restaurante-pantanal`
- Exit code: **`0`** (clean).
- Receipt: `.impeccable-detector-receipt.json` — `status: "clean"`, `gate_exit_code: 0`, `build_id: "fd985402a9213473b5934f0e16e635029b9708a40614f3f67344f6631dab741e"`, `generated_at: "2026-07-18T19:02:44.841910+00:00"`. Both scan modes (`raw` and `design-aware`) report `exit_code: 0`, `findings: []`. **0 findings remain.**

### 3. Local Playwright checks (file:// protocol, no network), Chromium, desktop 1440×900 + mobile 390×844
- Runner: throwaway script at `/tmp/pw-check-repair/check.py` (chromium via `PLAYWRIGHT_BROWSERS_PATH=/opt/data/.cache/ms-playwright`, `/opt/data/.venvs/curitiba/bin/python`) — deleted after use, never written into this project tree.
- Checks per page/viewport: HTTP status, final URL (post-redirect), `<title>`, first `<h1>` presence, horizontal overflow (`scrollWidth − clientWidth`), broken-image count (`naturalWidth===0`/incomplete), console errors, uncaught page errors; plus, on `index.html` at 390px, the hamburger nav toggle (`aria-expanded`, `#site-nav[data-open]`) and nav-CTA visibility/bounding-box before/after opening the menu.

| page | viewport | HTTP | title | h1 present | overflow | broken imgs | console/page errors | notes |
|---|---|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | yes | 0px | 0 | none | — |
| index.html | 390×844 | 200 | Restaurante Pantanal Curitiba — Peixe ao Forno | yes | 0px | 0 | none | nav toggle: `aria-expanded` false→true, `data-open` null→true; nav CTA hidden→visible, box `x:23.39,y:234.16,w:343.22,h:44.72` |
| proposal.html | 1440×900 | 200 | Restaurante Pantanal · Documento de proposta | yes | 0px | 0 | none | — |
| proposal.html | 390×844 | 200 | Restaurante Pantanal · Documento de proposta | yes | 0px | 0 | none | — |
| rationale.html | 1440×900 | 200 | (redirects to index.html, confirmed via `page.url()`) | n/a | 0px | 0 | none | — |
| rationale.html | 390×844 | 200 | (redirects to index.html, confirmed via `page.url()`) | n/a | 0px | 0 | none | — |

**Result: all 6 page×viewport combinations clean — no overflow, no broken images, no console/page errors, mobile hamburger nav opens/closes correctly and reveals a properly sized, tappable CTA.**

### Before/after summary (detector findings, this pass)
| category | before | after | disposition |
|---|---|---|---|
| `cream-palette` (proposal.html, raw scan) | 1 | 0 | repaired — inline `--paper:#F4E8D1` override removed; page now inherits the already-shipped `--paper:#f3f6f2` from `styles.css` |
| `cream-palette` (proposal.html, design-aware scan) | 1 | 0 | repaired — same fix, second scan mode |
| **Total findings** | **2** | **0** | fully resolved |

### Final status — this pass
**CLEAN — VALIDATED.**
- `node --check script.js`: **pass** (exit 0).
- Pinned detector gate: **CLEAN** (exit `0`, 0 findings, `.impeccable-detector-receipt.json` `status: "clean"`).
- Playwright, desktop 1440×900 + mobile 390×844, `index.html`/`proposal.html`/`rationale.html`: **pass** (all 6 combinations clean; mobile nav toggle functional; rationale.html redirects compatibly to index.html at both viewports).
- Files modified this pass: `proposal.html` only (one CSS custom-property override removed). All other working files (`index.html`, `rationale.html`, `styles.css`, `script.js`) remain byte-identical to the prior pass (sha256-verified). No other candidate directories or archived roots touched. Detector source not inspected. No variant files created. No publish/upload/submit/contact/form/promotion actions taken.
- Full receipt detail recorded in `.validation-receipt.json` (this pass's `sha256_at_receipt_time`, `checks`, and `repairs_made_this_pass` blocks).
