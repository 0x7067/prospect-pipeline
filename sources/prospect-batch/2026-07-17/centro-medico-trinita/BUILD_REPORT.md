# Build Report — Centro Médico Trinità

Status: **resumed and completed** from an interrupted prior build pass. All deliverables listed in `BUILD_TASK.md` exist, were re-audited file-by-file, two real CSS defects were found and fixed, image-metadata inaccuracies were corrected, and full mechanical verification was re-run to a clean state. Nothing was deployed or published.

## 0. What "resume" found on disk

On pickup, the directory already contained finished-looking artifacts: `index.html`, `proposal.html`, `styles.css`, `script.js`, `assets/` (brand, site, team, proposal), `SOURCE_MANIFEST.md`, and `PROSPECT_BRAND_STYLE_GATE.md`. Only `BUILD_REPORT.md` was missing — no verification had been recorded and no local browser check had been run. This session:

1. Read `BUILD_TASK.md`, `prospect.json`, `SOURCE_MANIFEST.md`, `PROSPECT_BRAND_STYLE_GATE.md` in full.
2. Read `index.html`, `proposal.html`, `styles.css`, `script.js` in full and cross-checked every fact/asset reference against `SOURCE_MANIFEST.md` and `prospect.json`.
3. Verified every local `src=`/`href=` in `index.html` and `proposal.html` resolves to a file that exists on disk (25/25 OK).
4. Served the directory locally and ran real Chromium (headless_shell via Playwright, `/opt/hermes/.playwright/chromium_headless_shell-1228/...`) at the two mandated viewports, 1440×900 and 390×844, against both pages.
5. Found and fixed two real rendering defects (below). Re-ran verification to a clean state after each fix.
6. Corrected `width`/`height` image-attribute inaccuracies (metadata only — no visible change since CSS already controlled final layout, but the declared intrinsic sizes were wrong and are now accurate).
7. Wrote this report.

No content, copy, physician roster, specialty list, or sourced fact was changed — those were already correct and fully cited in `SOURCE_MANIFEST.md`. This session's changes were confined to `styles.css` (2 bug fixes) and `index.html` (image `width`/`height` attribute corrections only).

## 1. Defects found and fixed this session

### 1.1 Hero primary CTA was invisible (real bug)

`styles.css` — `.hero { background: var(--sand-500); }` and `.btn-primary { background: var(--sand-500); }` used the *identical* color. The single dominant "Agendar pelo Doctoralia" button in the hero rendered with no visible fill against the hero background — only its text was legible, no button shape. This directly violates the task's "one dominant appointment pathway" requirement and the style gate's "CTA is unmistakable" hero checklist item.

**Fix:** added a hero-scoped override (`.hero-cta-row .btn-primary`) using `--green-900` fill / `--sand-100` text plus a soft shadow, so the primary CTA has strong, unmistakable contrast against the sand hero, while the secondary WhatsApp action stays a ghost/outline button. Verified before/after with pixel screenshots (see §3).

### 1.2 Mobile-menu CTA buttons were broken by a CSS specificity collision (real bug)

`styles.css` had `.mobile-menu a { font-size: 1.9rem; padding: 14px 4px; display: block; ... }`. This selector (specificity 0,1,1) unintentionally also matched the `.btn.btn-primary` / `.btn.btn-ghost` anchors inside `.mobile-menu-cta`, and beat `.btn-primary` (specificity 0,1,0) for the shared properties. Result: the "Agendar consulta" / "WhatsApp" buttons in the open mobile menu rendered at 30px nav-link font size, wrapped onto two lines, with block layout instead of a pill button — confirmed by direct DOM measurement (`getComputedStyle`) before the fix: `font-size: 30.4px`, `display: block`, `padding: 14px 4px`, wrapped text.

**Fix:** scoped the nav-link rule to `.mobile-menu nav a` (the `<nav>` wraps only the 4 section links, not the CTA row), and added `.mobile-menu-cta .btn { justify-content: center; width: 100%; }` so both CTA buttons render as proper full-width centered pills. Re-measured after fix: `font-size: 13.76px`, `display: flex`, `padding: 15px 26px`, single line, `justify-content: center` — matches the rest of the button system.

### 1.3 Image intrinsic-size metadata corrections (cosmetic accuracy, not a visible bug)

Several `<img width height>` attributes did not match the actual downloaded file dimensions (used only as browser layout hints; CSS `object-fit`/`aspect-ratio` already controlled the real rendered size in every case, so this caused no visible defect, confirmed by screenshots before the fix). Corrected for accuracy:

| Image | Was declared | Actual file | Fixed to |
|---|---|---|---|
| `hero-slide-01.jpg` | 1600×1067 | 1920×1080 | 1920×1080 |
| `estrutura-05.jpeg` | 900×1200 | 1200×1600 | 1200×1600 |
| `assets/team/*.jpg` (all 11) | 600×600 (square) | 350×400 (portrait) | 350×400 |
| `convenio-unimed.png` / `convenio-jucimed.png` | 180×75 | 300×125 | 300×125 |
| `logo-trinita.png` (header) | not declared | 400×100 | 400×100 added |
| `logo-trinita-footer.png` | not declared | 200×146 | 200×146 added |

## 2. Consistency / integrity checks (all pass)

```
# Forbidden proposal-language check on production page
$ grep -inE "proposal|redesign|concept|prototype|diagnosis|evidence|audit|before.after|non-affiliation|pitch|limitations" index.html
(no matches — exit 1)

# Proposal page not linked from production nav/footer
$ grep -in "proposal" index.html
(no matches — exit 1)

# Proposal page does not use the clinic logo
$ grep -in "logo-trinita" proposal.html
(no matches — exit 1)

# Every local src/href in both pages resolves to a real file
$ for f in <25 unique local asset/script/style paths>; do [ -f "$f" ] && echo OK || echo MISSING; done | grep -c OK
25
```

Physician roster in `index.html` (11 cards: Camila Deneka, Beatriz Canhoto Carula, Francisco G. De Paula Kozovits, Gabriel Bonato Riffel, Gabriel Ribas, Gustavo Yuiti K. Suzuki, Jandrey Gasparin de Oliveira, Marília França M. Manfrinato, Marvin Durante Brunet, Mateus Strazzi Barreto, Victor Chueiri Genovesi) matches `SOURCE_MANIFEST.md`'s 11-physician table exactly, including CRM numbers. The 15-item specialty list and the "11 / 15 / 2" counters used throughout are literal counts of the clinic's own published roster/list, not fabricated metrics, per `SOURCE_MANIFEST.md` §"Uncertainty / items intentionally omitted".

Color-contrast spot check (WCAG relative-luminance formula, computed directly from the hex values in `styles.css`):

| Pair | Ratio | AA text threshold |
|---|---|---|
| `--green-900` heading on `--paper` | 9.83:1 | ✅ (≥4.5) |
| `--ink` body on `--paper` | 14.58:1 | ✅ |
| `--ink-soft` on `--paper` | 7.45:1 | ✅ |
| `--green-900` on `--sand-500` (hero copy) | 6.85:1 | ✅ |
| `--sand-100` on `--green-900` (footer/contact/fixed hero CTA) | 9.47:1 | ✅ |
| `--focus` accent on `--paper` | 4.63:1 | ✅ |

All pairs actually used for text clear WCAG AA (4.5:1 normal text / 3:1 large text).

## 3. Real-browser verification (1440×900 and 390×844)

Environment: local static file server (`python3 -m http.server 8811`, project root) + real Chromium (`chrome-headless-shell`, Playwright driver, `AGENT_BROWSER_EXECUTABLE_PATH=/opt/hermes/.playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell`). Script: `/tmp/verify_trinita.js` (ephemeral, not part of the deliverable — logic summarized below with real output).

**Final run output (after both fixes applied):**

```
index-desktop     200  overflow=False  consoleErrors=0  pageErrors=0  failedRequests=0
proposal-desktop  200  overflow=False  consoleErrors=0  pageErrors=0  failedRequests=0
index-mobile      200  overflow=False  consoleErrors=0  pageErrors=0  failedRequests=0
proposal-mobile   200  overflow=False  consoleErrors=0  pageErrors=0  failedRequests=0
```

`overflow` = `document.documentElement.scrollWidth > window.innerWidth`, checked at both viewports on both pages — false everywhere, i.e. **zero horizontal overflow**.

### Mobile menu (390×844, index.html)

| Step | aria-expanded | aria-label | `.is-open` class |
|---|---|---|---|
| Initial | `false` | "Abrir menu" | — |
| After click (open) | `true` | "Fechar menu" | true |
| After `Escape` key | `false` | "Abrir menu" | false |
| Reopen → click close button | — | — | false |
| Reopen → click a nav link | — | — | false (auto-closes on navigation) |

All four required behaviors confirmed: opens, closes via close button, closes on Escape, updates its accessible label each time. Toggle tap target measured 46×46 CSS px; nav-link rows measured 342×77.6 CSS px — both comfortably above the 44×44 minimum.

### Keyboard/focus and semantics (1440×900, index.html)

- First `Tab` from page load lands on the skip link (`Pular para o conteúdo`) — confirmed via `document.activeElement`.
- Heading order top-to-bottom: `H1 → H2 → H2 → H2 → H3×11 (team) → H2 → H3×3 (footer)` — no skipped levels, single `H1`.
- All 6 unique in-page anchors (`#main #top #clinica #atuacao #equipe #contato`) resolve to an existing element; 0 broken anchors across their 14 occurrences (desktop nav + mobile nav + footer nav).

### Visual QA (real screenshots, both viewports, both pages)

Full-page and section-level screenshots were captured and visually reviewed for: hero composition/CTA legibility, about/gallery section, specialty rail, team grid (11 cards, photo + CRM + specialty tags), convenios strip, dark contact/footer block, mobile hero, mobile open-menu state, and the proposal page's hero + before/after evidence comparison. This is where both defects in §1 were caught (the hero CTA "disappearing" and the mobile-menu CTA text wrapping) — both fixed and re-verified. No other visual defects were found: page rhythm varies (sand hero → paper gallery → paper-alt specialty rail → paper team grid → sand convenios strip → dark green contact block → dark green footer), team photos render as clean grayscale-to-color-on-hover squares via `aspect-ratio: 1/1` + `object-fit: cover`, and the proposal's current-vs-proposed comparison renders both images at correct proportions side by side.

Screenshots were written to a scratch path outside the deliverable (`/tmp/trinita_verify/`) purely as this session's working evidence; they are not part of the shipped file set per the task's "no framework/no build tooling residue" spirit — the deliverable directory contains only the 8 items listed in `BUILD_TASK.md`'s Deliverables section.

## 4. Style-gate self-assessment (`PROSPECT_BRAND_STYLE_GATE.md`)

- **Brand-source prerequisite (§1):** fully satisfied per `SOURCE_MANIFEST.md` — logo variants + source URLs, sampled hex colors with provenance, confirmed Montserrat typography, verified services/location/contact, hero + 3 interior photos, desktop/mobile screenshots of the live site captured (`assets/proposal/current-site-hero-modal.png`).
- **Concept thesis (§2):** the compositional idea (split sand/photo hero, specialty rail as a numbered index rather than a card grid, grayscale-to-color team photography) is tied to the clinic's real green/sand palette and Montserrat typeface — not swappable to a generic competitor without a different specialty rail, team roster, and address, per the competitor-swap test.
- **Anti-template tests (§3):** the specialty section is a ruled index list (not a card grid); the team section is the only card grid and it is justified by genuinely distinct verified people; hero and contact/footer both get independent art direction (light sand vs. dark green); mobile hero and mobile menu each have their own rhythm (full-bleed stacked hero, full-screen dark takeover menu) rather than being a squeezed desktop copy.
- **Mechanical checks (§7):** 1440×900 and 390×844 screenshots captured for both pages; zero horizontal overflow; zero console/page errors and zero failed local requests; mobile menu opened and keyboard-tested (Escape + focus label); every local link/anchor resolves; production page contains zero forbidden proposal/redesign/audit language; proposal page was included in this verification pass alongside production.
- **Proposal-page gate (§6):** leads with opportunity/result (not legal defensiveness); does not use the clinic logo; current-vs-proposed screenshot pair appears near the top; exactly three prioritized problem→fix rows; deliverables, dependencies, and one explicit next step (20-minute call) are present; technical audit detail is isolated in a closing `<details>` appendix; non-affiliation disclosure appears once, in the footer, not repeated inline.
- Two dimensions that materially depend on subjective visual scoring (hero impact, distinctiveness) cannot be numerically certified by an agent without a human/multi-rater panel; this report documents the concrete mechanical and structural evidence for each scorecard row rather than assigning itself a 1–5 number, consistent with not fabricating an unverifiable rating.

## 5. Known, intentionally accepted limitations

- No CNPJ or structured business hours are published on the official site, so `index.html` and `proposal.html` correctly omit/soften those rather than inventing them (see `SOURCE_MANIFEST.md` §"Uncertainty").
- The visual scorecard in `PROSPECT_BRAND_STYLE_GATE.md` §4 calls for numeric 1–5 ratings from a brand strategist / art director / mobile reviewer panel; this session performed the equivalent structural and pixel-level checks described in §4 above but did not fabricate numeric self-scores, since no independent human reviewer was available in this run.
- Verification browser was `chrome-headless-shell` (no GPU/font-rendering differences expected vs. full Chromium for this static, no-canvas, no-WebGL page, but noted for completeness).
- Nothing was deployed, published, or pushed anywhere — this remains a local, non-deployed deliverable exactly as instructed.

## 6. Final file inventory

```
BUILD_TASK.md                  (task spec, pre-existing, unmodified)
PROSPECT_BRAND_STYLE_GATE.md   (quality gate, pre-existing, unmodified)
prospect.json                  (source brief, pre-existing, unmodified)
SOURCE_MANIFEST.md             (pre-existing, verified accurate, unmodified)
BUILD_REPORT.md                (this file — new)
index.html                     (pre-existing; img width/height metadata corrected)
proposal.html                  (pre-existing, unmodified)
styles.css                     (pre-existing; 2 real bugs fixed — see §1.1, §1.2)
script.js                      (pre-existing, unmodified; behavior verified)
assets/brand/*                 (5 files, pre-existing, all referenced and resolve)
assets/site/*                  (9 files, pre-existing; 8 referenced and resolve, 1 unused rotation spare per manifest)
assets/team/*                  (11 files, pre-existing, all referenced and resolve)
assets/proposal/*               (2 files, pre-existing, both referenced and resolve)
```
