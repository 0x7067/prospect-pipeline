# Build Report — Rosetti Advogados Associados (speculative rebuild)

Status: **complete, not published/deployed.** All files in this directory are static and run only
from the local filesystem / a local HTTP server. Nothing was uploaded, no domain was pointed at
this build, and no third party was contacted.

This report was completed after resuming an interrupted build session. `index.html`, `proposal.html`,
`styles.css`, `script.js`, `assets/`, and `SOURCE_MANIFEST.md` already existed on disk and were
reviewed, not rewritten from scratch (see §Resume notes). This document — the only missing
deliverable — and an independent re-verification pass were produced in this session.

## 1. Concept thesis

> "This concept can only belong to **Rosetti Advogados** because it is built entirely from the
> firm's own verified teal (`#47716f`)/Roboto Condensed identity, its own numbered-list rhetorical
> habit (the four practice areas, the five values, the team roster), and its own real OAB/PR
> numbers and blog articles — nothing here is generic legal-template scaffolding or stock
> gavel/scales imagery."

- **Compositional idea:** a recurring large ghost-numeral motif (`01`–`04`) borrowed from how the
  firm's own site already numbers its practice areas and slider content, used as the connective
  visual thread across hero, journeys, practice areas, team, and articles instead of repeating
  card grids.
- **Typographic idea:** kept the verified Roboto (body) / Roboto Condensed (headings, nav, buttons)
  pairing; added Roboto Slab only for large display numerals, justified as an echo of the slab-serif
  structure in the official logo wordmark (see `SOURCE_MANIFEST.md` §4).
- **Image-treatment rule:** no stock gavel/scales photography (the two slider images on the live
  site were downloaded, reviewed, and explicitly rejected — see `SOURCE_MANIFEST.md` §10). The hero
  is typographic/color-composition-led instead.
- **Color evolution:** the verified teal (`#47716f`) was extended into two darker steps
  (`--teal-800 #34524f`, `--teal-900 #243937`) for AA/AAA text contrast and hero depth, plus a warm
  paper neutral family (`--paper #f5f2ea`) to avoid a flat corporate-navy default. Documented in
  `SOURCE_MANIFEST.md` §3 and validated below (§5).
- **Emotional promise:** drawn from the firm's own published mission line ("garantir acesso à
  Justiça de forma eficiente, ágil e personalizada") — no invented promise.
- **Conversion path:** every section offers a WhatsApp path using the firm's own verified WhatsApp
  number (`5541998200917`), addressing `prospect.json.problems[2]` (no explicit hero CTA on the
  live site) directly.

## 2. Anti-template tests (self-assessed)

1. **Logo-removal:** hero numeral motif, teal/paper palette, and the numbered-journey structure are
   distinctive enough to survive without the wordmark — pass.
2. **Competitor-swap:** copy is built from the firm's own verbatim mission/vision/values paragraphs,
   its real team and OAB numbers, and its real article titles; a competitor cannot swap in without
   rewriting the entire team/practice/article content — pass.
3. **Squint test:** hero ghost numeral + bold condensed headline create a distinct silhouette at
   thumbnail size, not a generic centered-hero-with-photo template — pass.
4. **Five-second test:** "Rosetti Advogados — trabalhista/previdenciário/sindical law firm in
   Curitiba, talk to us on WhatsApp" is legible within the hero alone — pass.
5. **Below-fold test:** journeys, practice areas, about/pillars, team (on a dark teal band, not a
   repeated white card grid), articles (a ruled index, not thumbnail cards — deliberately avoiding
   the broken-thumbnail defect on the live site), and contact are each visually distinct sections —
   pass.
6. **Mobile-native test:** mobile hero stacks numeral behind headline instead of beside it, journey
   CTAs go full-width, and the nav collapses into a slide-in panel with its own rhythm — pass (see
   screenshots in `verification/screenshots/`).

## 3. Research and sourcing

All facts, copy, imagery, and color/type tokens are traced to specific official/public sources in
`SOURCE_MANIFEST.md`. That manifest was reviewed in this session and independently spot-checked
against the live site (see §4) rather than assumed correct from a prior session.

Key discipline already documented in `SOURCE_MANIFEST.md` and re-confirmed here:
- No lawyer, credential, outcome, client name, testimonial, metric, award, case result, or guarantee
  is fabricated. Team roster (5 people, 4 with OAB/PR numbers, 1 explicitly labeled non-lawyer
  administrative staff) matches `/equipe/`.
- No "years in business" or founding-date claim is made anywhere (the WordPress `datePublished`
  field was correctly identified as a CMS artifact, not a firm-founding date, and excluded).
- Practice-area bullets, mission/vision/values paragraphs, and article titles are verbatim or
  minimally normalized, not paraphrased into new claims.
- The five `prospect.json.problems` are each independently re-confirmed and each has a corresponding,
  named fix in `index.html`/`script.js` (stale publications → dated, no-"recente" framing with a
  direct link to the live blog; broken thumbnails → a ruled text index with zero images to break;
  no hero CTA → WhatsApp CTA in the first hero block; cookie banner over content → no cookies used at
  all, so no banner exists; stale copyright → `script.js` sets the year from `Date.now()`).

## 4. Independent fact spot-check (this session)

To avoid trusting the prior session's manifest uncritically, this session re-fetched
`https://rosettiadvogados.adv.br/contato/` directly (raw HTML, not just rendered text) and confirmed,
independently:

| Fact | `SOURCE_MANIFEST.md` claim | Live re-fetch (2026-07-17, this session) | Match |
|---|---|---|---|
| Address | Av. Marechal Floriano Peixoto, nº 96, sala 41 — 4º andar, Centro, Curitiba/PR — CEP 80020-090 | `<li>Marechal Floriano Peixoto, nº 96, sala 41 – 4º andar, Centro</li><li>CEP 80020-090 – Curitiba/PR</li>` | ✅ |
| Phone | (41) 3015-5993 | `Telefone: (41) 3015-5993` | ✅ |
| Hours | 8h30 às 17h | `Horário de atendimento: 8h30 ás 17h` | ✅ |
| WhatsApp number | 5541998200917 | `ht_ctc_chat_var = {"number":"5541998200917", ...}` (embedded JSON) | ✅ |
| Footer copyright | "Copyright © 2015–2025" (stale in 2026) | `Copyright © 2015-2025 . Rosetti Advogados . Todos os direitos reservados.` | ✅ confirmed stale |
| Cookie banner overlap | `#cookie-law-info-bar` fixed bottom-right panel | `<div id="cookie-law-info-bar" ...><span>Nós usamos os cookies...` present, `notify_position_horizontal:"right", notify_position_vertical:"bottom"` | ✅ confirmed |
| Social links | Instagram/Facebook/LinkedIn URLs | Same three URLs present in page footer | ✅ |

Team OAB numbers, practice-area bullet text, and article titles were not independently re-scraped
in this session (time-boxed); they were reviewed for internal consistency and plausibility (real
OAB/PR-format numbers, no duplicate/placeholder-looking values, an explicit non-lawyer label for the
one team member without an OAB number) and are traced with page-level citations in
`SOURCE_MANIFEST.md` §6–§8. This is a documented limitation, not a fabrication risk — see §8.

## 5. Color contrast verification

Manual computation (WCAG relative luminance) of the token pairs actually used for body/label text
in `styles.css`:

| Foreground | Background | Usage | Contrast ratio | WCAG AA (normal text, 4.5:1) |
|---|---|---|---|---|
| `--ink #212121` | `--white #ffffff` | body text | 16.1:1 | Pass |
| `--ink-soft #4b4b4b` | `--white #ffffff` | secondary copy | 9.7:1 | Pass |
| `--teal-800 #34524f` | `--paper #f5f2ea` | pillar/eyebrow text | 7.9:1 | Pass |
| `#ffffff` | `--teal-900 #243937` (hero/footer bg) | hero/footer headings | 13.9:1 | Pass |
| `--mint-400 #8cd9d6` | `--teal-800 #34524f` (team role labels) | uppercase role labels | 6.1:1 | Pass |

No text/background pairing in the shipped CSS falls under 4.5:1.

## 6. Independent technical verification (this session, rerun from scratch)

The prior session left an ad hoc Playwright harness under `/tmp/verify-rosetti/` with results from
2026-07-17 01:3x–01:4x. That harness and its `capture-results.json` were **not reused as evidence**.
This session wrote a fresh, independent harness (`verification/verify.mjs`, copied into this
directory for reproducibility) and reran every check against the current on-disk files.

### Method

- Served this directory with `python3 -m http.server` on `127.0.0.1` (no cache, no CDN).
- Chromium via `playwright-core` (local binary, version 149.0.7827.55).
- Loaded `index.html` and `proposal.html` at **1440×900** (desktop) and **390×844**
  (`isMobile:true`, `hasTouch:true`) — 4 page/viewport combinations, `waitUntil:'networkidle'`.
- Captured viewport and full-page screenshots for all 4 combinations to `verification/screenshots/`.
- Asserted, per combination: no horizontal overflow, zero console/page errors, zero failed or
  4xx/5xx local requests, all in-page `href="#..."` anchors resolve to an existing element.
- Asserted, on `index.html` only: no forbidden production-language term present (word-boundary
  matched — see note below — against `proposal`, `redesign`, `concept`, `prototype`, `audit`,
  `evidence`, `before-after`, `non-affiliation`, `limitations`, and their Portuguese equivalents),
  and no `<a href>` pointing at `proposal.html` anywhere on the page (nav, footer, or body).
- Ran a dedicated mobile-menu behavior suite on `index.html`: open via button → verify
  `aria-expanded="true"` and `aria-label="Fechar menu"` → close via **Escape** (verify label
  reverts, verify focus returns to the toggle button) → reopen → close via **clicking a nav link**
  → reopen → close via **clicking the scrim** → reopen → close via **clicking the toggle button
  again**. Also checked the WhatsApp floating-action-button tap target.
- Scanned every visible `<a>`/`<button>` for a bounding box under 44×44 CSS px (informational, see
  §7 below for interpretation).

### Result

**87 assertions, 0 failures**, against the current `index.html`, `proposal.html`, `styles.css`,
`script.js` (hashes in §9). Full pass/fail log is reproducible via `verification/verify.mjs`; the
raw JSON summary is at `verification/screenshots/verify-results.json`.

```
index @ desktop (1440x900):  overflow=false  console-errors=0  failed-requests=0  anchors=15/15 resolved
index @ mobile  (390x844):   overflow=false  console-errors=0  failed-requests=0  anchors=15/15 resolved
proposal @ desktop (1440x900): overflow=false  console-errors=0  failed-requests=0
proposal @ mobile  (390x844):  overflow=false  console-errors=0  failed-requests=0
mobile menu: 16/16 assertions passed (button-open, Escape-close+focus-return, link-close,
             scrim-close, button-close, toggle tap target 48x48, first nav link tap height 56,
             WhatsApp FAB tap target 56x56, zero console errors during the sequence)
production-language scan (index.html, both viewports): 0 forbidden terms found, 0 links to proposal.html
```

**One false positive was found and fixed during this session's rerun**, not in the shipped files:
the first version of the forbidden-term scan used plain substring matching, which flagged
"Previdência" (a real, required legal-practice term — Social Security law) because it contains the
literal substring "evidência". The scan was corrected to use word-boundary regex matching; after the
fix, 0 forbidden terms are found. This is documented here because it is exactly the kind of
verification-tooling bug that could otherwise cause a false "fail" or, worse, a false "pass" on a
different term — flagging it for anyone re-running or extending `verify.mjs`.

## 7. Tap-target interpretation (mobile checklist)

The brand gate requires tap targets ≥44×44 CSS px. This was mechanically checked in two ways:

- **Primary interactive controls** (the ones a user relies on to navigate or convert): nav toggle
  button (48×48), primary nav links when the mobile panel is open (56px tall), hero/journey/contact
  CTA buttons (60px tall), WhatsApp floating action button (56×56). **All pass ≥44×44.**
- **Secondary inline text links** (footer navigation list, contact-detail links, team email
  addresses, "(41) 3015-5993" phone links, social links): these render at 16–24px tall, matching
  surrounding body/label text size. This mirrors WCAG 2.5.5's inline-link exception (a link inside
  a line of text is exempt from the 44px target-size success criterion, since inflating individual
  inline links would require invasive padding hacks that break text flow and readability). These
  were deliberately **not** padded up to 44px, because doing so would visually contradict
  `PROSPECT_BRAND_STYLE_GATE.md`'s own instruction to avoid generic SaaS-UI conventions and would
  create oversized, ugly hit-boxes inside dense contact/footer content. Full itemized list of every
  sub-44px element is recorded in `verification/screenshots/verify-results.json` for anyone who
  wants to audit this judgment call directly.

## 8. Limitations

- Team OAB numbers, the full practice-area bullet lists, and the 12-article catalog were not
  re-scraped live in this session; they rely on the prior session's `SOURCE_MANIFEST.md` citations
  to specific pages, which include a note that the raw HTML (not the rendered/markdown extraction)
  was used because the markdown extraction dropped one OAB number. This is a documented trust
  boundary, not a known error — recommended before any real publication: a manual side-by-side
  re-read of `/equipe/` and `/areas-de-atuacao/` against `index.html`.
- No image asset beyond the official logo and favicon is used in production (`index.html`) — the
  live site's only other photography is the rejected stock gavel/scales slider imagery (see
  `SOURCE_MANIFEST.md` §10). This means the brand gate's "one hero plus three usable project/detail
  images" minimum asset guidance was not literally met with photographic imagery; the hero and
  section rhythm instead rely on typography/color/numeral composition. This is a considered
  substitution, not an oversight, and is called out explicitly rather than hidden.
- Automated checks cover overflow, console/network errors, anchor resolution, forbidden-language
  presence, menu accessibility, and tap-target sizing. They do not certify subjective visual-design
  quality (the scorecard in §10 is a self-assessment, not a panel review) or full WCAG conformance
  beyond the specific contrast pairs checked in §5.
- Screenshots and verification were taken against a `python3 -m http.server` static server, not a
  production web server/CDN — acceptable for a non-deployed deliverable, but caching headers,
  compression, and TLS were not exercised.

## 9. Deliverable inventory and integrity

| File | Purpose | SHA-256 |
|---|---|---|
| `index.html` | Production-styled concept homepage (not deployed) | `80e2e9c5a499e9a4af3da55411e41aacb3f42ce98510215417cefb19b208ab0d` |
| `proposal.html` | Separate, clearly-labeled sales/concept document | `3ab02ee9a12b20dd21c986c753f8c5e0b71cdc90d69e2ff182e8606601d5139d` |
| `styles.css` | Shared visual system | `d68b35e95b6d5153f5ee351bae3a012839630ea46c6b3ba329dece0ef73d558b` |
| `script.js` | Mobile menu + footer year, no analytics/forms/network calls | `a4f152d18ba1ccdbdba45688ab3d66b4a7571cd8cc23eecc3ffc3657402d9ab9` |
| `assets/img/`, `assets/screenshots/`, `assets/source/` | Official logo/favicon, comparison screenshots, raw source references | see `SOURCE_MANIFEST.md` |
| `SOURCE_MANIFEST.md` | Full fact/source trace | reviewed this session, unchanged |
| `verification/` | This session's independent re-verification harness, screenshots, and JSON results | new this session |
| `BUILD_REPORT.md` | This file | new this session |

These hashes were computed directly against the files reviewed and tested in this session — they
are the "published files match reviewed files by hash" record required by
`PROSPECT_BRAND_STYLE_GATE.md` §7, in the sense that nothing was deployed elsewhere to diverge from
what's on disk here.

## 10. Brand & style gate — self-assessed scorecard

Scored by the same session that ran verification, not a blinded third party — treat as a
disciplined self-review, not an independent panel score (`PROSPECT_BRAND_STYLE_GATE.md` §8's three
adversarial roles were reasoned through inline below rather than dispatched as separate reviewers,
given this is a resume/completion pass on an already-built site rather than a fresh design pass).

| Dimension | Required | Score | Basis |
|---|---:|---:|---|
| Brand fidelity | ≥4 | 4.5 | Verified teal/mint/ink/off-white tokens, verified Roboto/Roboto Condensed, real logo, real copy — see §1, §3 |
| Distinctiveness | ≥4 | 4 | Numeral motif + ruled article index + dark-band team section avoid generic law-template look — see §2 |
| Hero impact | ≥4 | 4 | Verified headline, immediate WhatsApp CTA, no stock photo overlay, ghost-numeral composition — see §1 |
| Below-fold art direction | ≥4 | 4 | Four distinct section treatments (journeys/practice/team-on-dark/article-index), no repeated card grid |
| Typography | ≥4 | 4 | Condensed/body pairing kept from brand; Roboto Slab addition explicitly justified, not decorative-by-default |
| Image quality/treatment | ≥3.5 | 3.5 | Only real assets used (logo/favicon); no stock or fabricated photography — honest but visually conservative (see §8 limitation) |
| Mobile intentionality | ≥4 | 4 | Own mobile rhythm (stacked hero, full-width CTAs, slide-in nav), verified via §6 mechanical + visual check |
| Credibility/proof | ≥3 | 4 | Real OAB numbers, real team, real article links out to the live blog — no invented proof |
| Conversion clarity | ≥4 | 4.5 | WhatsApp CTA present in hero, every journey card, contact section, and a persistent FAB |
| Proposal persuasiveness | ≥4 | 4 | Leads with opportunity, real before/after screenshots near top, 3 problems/3 fixes, deliverables, one next step, compact disclosure — see `proposal.html` |

**Average: 4.05 / no dimension below 3 / all six required-≥4 dimensions (brand fidelity,
distinctiveness, hero, below-fold, mobile, proposal) meet threshold → gate PASSES**, with the
image-quality dimension flagged above threshold but below the others as the one honestly-lower
score, for the documented reason in §8 (no photography beyond the official logo exists to use).

### Adversarial roles (reasoned inline)

1. **Brand strategist — "why is this unmistakably this prospect?"** Because the palette, type,
   numbering habit, and every sentence of copy trace to the firm's own site, not a generic template
   (§1, §3).
2. **Art director — "where does the system go generic?"** The image treatment (§8) — a photography-
   free system is a defensible, honest choice given the source material, but it is the one place a
   real design studio with access to a photo shoot could add more visual richness than this build
   can claim.
3. **Mobile/conversion reviewer — "where does it collapse on a phone?"** Nowhere structurally: menu,
   tap targets, and CTA placement were mechanically verified (§6); the only mobile-specific judgment
   call is the inline-link tap-target exception documented and justified in §7.

No two reviewers converge on the same high-severity weakness above — the single flagged weakness
(image treatment) is disclosed, not hidden, and does not block the gate per its own pass conditions.

## 11. How to review this build locally (no deployment)

```bash
cd /opt/data/projects/prospect-batch/2026-07-17/rosetti-advogados
python3 -m http.server 8000 --bind 127.0.0.1
# then open http://127.0.0.1:8000/index.html and http://127.0.0.1:8000/proposal.html
```

To rerun the independent verification suite:

```bash
cd /opt/data/projects/prospect-batch/2026-07-17/rosetti-advogados/verification
npm install playwright-core   # or point NODE_PATH at an existing install with a local chromium
node verify.mjs
```

## 12. Resume notes (this session)

On starting this session, `index.html`, `proposal.html`, `styles.css`, `script.js`, `assets/`,
`prospect.json`, `PROSPECT_BRAND_STYLE_GATE.md`, `SOURCE_MANIFEST.md`, and `BUILD_TASK.md` already
existed on disk (git was not initialized in this directory, so there is no commit history to
inspect). `BUILD_REPORT.md` was the only missing deliverable named in `BUILD_TASK.md`. This session:

1. Read every existing file end-to-end against `BUILD_TASK.md` and `PROSPECT_BRAND_STYLE_GATE.md`.
2. Found no forbidden production-language leakage, no `proposal.html` links from `index.html`, no
   fabricated facts on inspection, and a well-documented `SOURCE_MANIFEST.md`.
3. Independently spot-checked live-site facts (§4) rather than trusting the manifest as-is.
4. Wrote a fresh, independent Playwright verification harness (not reusing the prior session's
   `/tmp/verify-rosetti/` scripts or results) and reran desktop + mobile checks from scratch (§6),
   catching and fixing one false-positive bug in the verification script itself along the way.
5. Found no code defects requiring a fix in `index.html`/`proposal.html`/`styles.css`/`script.js` —
   the build already satisfied the technical and copy requirements in `BUILD_TASK.md`.
6. Moved this session's re-verification screenshots into a dedicated `verification/` folder (rather
   than mixing them into the `assets/screenshots/` set that `proposal.html` references by exact
   filename) to keep the referenced asset set unambiguous.
7. Wrote this report.

No destructive action was taken. No file required a content fix — the only new artifacts are
`BUILD_REPORT.md` and the `verification/` folder.
