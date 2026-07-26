# Build Report — Instituto Zétola Odontologia

Status: **build complete, verified, NOT deployed / NOT published anywhere.**
All work is local to this directory. No files were copied outside it, no domain
was touched, no hosting or DNS action was taken.

This report covers a resumed session: the prior interrupted run had already
produced `SOURCE_MANIFEST.md`, `index.html`, `proposal.html`, `styles.css`,
`script.js`, `assets/`, and a first-pass `verification/report.json`. This
session re-verified every fact and asset, re-ran every mechanical check from
scratch against the current files, fixed two small unsourced-copy issues it
found, and produced this report (which did not previously exist).

---

## 1. What was verified this session

### 1.1 Source facts (re-checked against the live site today)

A read-only research pass re-fetched the live official pages and cross-checked
`SOURCE_MANIFEST.md` against them:

| URL | Result |
|---|---|
| `https://www.institutozetola.com.br/` | PASS — name, address, phone, founder quote/CRO 7877, accent color `#7EBEC5`, section colors, Playfair Display/Advent Pro rules, and the broken `[dipl_logo_slider ...]` / `[fc id='1'][/fc]` shortcodes are all still present verbatim as documented. |
| `.../contato/` | PASS — address, phone, WhatsApp, email all match. |
| `.../o-instituto-zetola/` | PASS — full heritage narrative (Flávio Zétola 1936/São José dos Pinhais/mayor, Clementino Zétola, UFPR, Rio residency, Northwestern fellowship 1991–1992, founded 1996, moved 2004) confirmed verbatim/in substance. |
| `instagram.com/institutozetola/` | PASS (limited) — account resolves/renders; Instagram blocks unauthenticated metadata scraping beyond that, consistent with the manifest's own sourcing (homepage footer link). |

Overall confidence: **high** — no discrepancy found between `SOURCE_MANIFEST.md`
and the live site as of 2026-07-17.

### 1.2 Content-compliance audit (index.html / proposal.html)

A second independent read-only pass audited both HTML files line-by-line against
`BUILD_TASK.md` and `PROSPECT_BRAND_STYLE_GATE.md`:

- **No `proposal.html` link anywhere in `index.html`** (nav, footer, or body) — confirmed via `grep`, 0 matches.
- **No proposal/redesign/concept/prototype/audit/evidence/before-after/non-affiliation/limitations language in `index.html`** — confirmed via case-insensitive `grep`, 0 matches.
- **CTAs are all specific**: "Agendar avaliação", "Agendar avaliação pelo WhatsApp", "Ligar (41) 3024-2202" / "Ligar agora", "Conhecer as especialidades". Zero occurrences of "clique aqui" / generic "saiba mais".
- **Alt text**: all 16 `<img>` elements in `index.html` and all 4 in `proposal.html` have non-empty, descriptive `alt` text (also confirmed independently by the Playwright pass below — `missingAlt: []`).
- **Fact cross-check found two unsourced elaborations, which were fixed this session** (see §2).
- **`proposal.html` gate checklist**: non-affiliation banner + bottom disclosure present, `robots: noindex,nofollow` set, opportunity-first opening, current-vs-proposed evidence near the top, three problems + three matched improvements, deliverables/dependencies/sequence, one explicit next step, technical audit moved to an appendix, no unsupported ROI/award/team/testimonial claim. All PASS.

---

## 2. Fixes made this session

Two small copy elaborations in `index.html` went beyond what `SOURCE_MANIFEST.md`
actually sources and were removed/rewritten to stay strictly on verified ground
(no fact was invented; the fix is a deletion/tightening, not a rewrite of facts):

1. **`index.html` heritage paragraph and team-credentials list** (two occurrences) —
   removed the unsourced clause *"participando de cirurgias de face no hospital
   da universidade"* appended to the Northwestern University fellowship mention.
   `SOURCE_MANIFEST.md` §2 only sources *"fellowship at Northwestern University
   (Chicago), 1991–1992"* — nothing about hospital face surgeries. Now reads:
   *"...realizou um fellowship na Northwestern University, em Chicago."* and
   *"Fellowship internacional: Northwestern University, Chicago (1991–1992)."*

2. **`index.html` "Tech" section, "Fluxo digital" item** — the original copy said
   *"Scanners intraorais, softwares de planejamento e fresagem chair side
   aplicados à odontologia estética e à prótese dentária."* Neither "scanners
   intraorais" (general) nor "prótese dentária" is a confirmed specialty/fact in
   `SOURCE_MANIFEST.md`. Rewritten to cite only sourced items — chairside milling
   for veneers/contact lenses (Odontologia Estética, manifest §3.6) and
   radiographic/scanning follow-up (Periodontia maintenance, manifest §3.9):
   *"Fresagem chair side de facetas e lentes de contato dentárias em porcelana
   na odontologia estética, com acompanhamento radiográfico e por escaneamento
   no programa de manutenção periodontal."*

Post-fix `grep` confirms zero remaining occurrences of the removed phrases
anywhere in `index.html`.

No other invented facts, names, credentials, statistics, or claims were found.

---

## 3. Mechanical verification (this session, from scratch)

Served the directory with `python3 -m http.server 8099` and drove a Playwright
Chromium session (`verification/run_checks.js`, `NODE_PATH` pointed at the
AFK-bundled Playwright install) against `index.html` and `proposal.html` at
**1440×900** and **390×844**. Full machine output: `verification/report.json`
(generated `2026-07-17T05:24:45Z`). Summary:

| Page | Viewport | HTTP | scrollWidth vs clientWidth | Overflow | Console errors | Page errors | Failed requests |
|---|---|---|---|---|---|---|---|
| index.html | 1440×900 | 200 | 1440 / 1440 | **none** | 0 | 0 | 0 |
| index.html | 390×844 | 200 | 390 / 390 | **none** | 0 | 0 | 0 |
| proposal.html | 1440×900 | 200 | 1440 / 1440 | **none** | 0 | 0 | 0 |
| proposal.html | 390×844 | 200 | 390 / 390 | **none** | 0 | 0 | 0 |

Both viewport-cropped and full-page screenshots were captured for all four
combinations (`verification/*-viewport.png`, `verification/*-full.png`), plus
additional section-by-section clipped slices (`verification/idx_d_*.png`,
`verification/idx_m_*.png`, `verification/prop_d_*.png`, `verification/prop_m_*.png`)
used for the visual/brand review in §5.

### 3.1 Mobile menu (390×844, index.html)

Driven programmatically (button click, nav-link click, Escape key, dedicated
close button), asserting on `aria-expanded`, `aria-label`, focus, and DOM state:

- Initial: `aria-expanded="false"`, `aria-label="Abrir menu"`.
- **Open via toggle button** → `aria-expanded="true"`, `aria-label="Fechar menu"`, panel visible, focus moves into panel.
- **Close via Escape** → `aria-expanded="false"`, `aria-label="Abrir menu"`, **focus returns to the toggle button** (`document.activeElement.id === "menuToggle"`).
- **Close via clicking a nav link** → `aria-expanded="false"` (menu closes, allowing the anchor jump to proceed).
- **Close via the dedicated close button** (`#menuClose`, distinct from the toggle) → `aria-expanded="false"`, `aria-label="Abrir menu"`.
- Zero console errors during the whole sequence.

### 3.2 Tap targets (390×844)

- Menu toggle: 46×46 CSS px — adequate.
- Dedicated close button: 44×44 CSS px — adequate (meets the 44×44 minimum exactly).
- All 5 mobile nav links: 295×64 CSS px — adequate, no small targets found (`smallNavLinkTargets: []`).

### 3.3 Links, anchors, images

- `index.html`: 18 in-page anchor references (`#topo`, `#especialidades`, `#equipe`, `#historia`, `#contato`, `#conteudo`) — **0 missing targets**.
- `proposal.html`: 1 anchor reference (`#evidencia`) — **0 missing targets**.
- `index.html`: 16 `<img>` elements, **0 broken (0 naturalWidth), 0 missing/empty alt**.
- `proposal.html`: 4 `<img>` elements, **0 broken, 0 missing/empty alt**.
- No failed image requests recorded on either page at either viewport.

### 3.4 Embedded map

`index.html`'s contact section embeds a live Google Maps iframe pinned at the
clinic's verified coordinates (`-25.4346561, -49.2889144`). Under `networkidle`
+ a short settle wait it loads correctly (confirmed visually — pin lands on
R. Alferes Ângelo Sampaio, 2.303, Bigorrilho, Curitiba, with nearby landmarks
matching the neighborhood). This is a live third-party embed, so its rendering
depends on outbound network access at view time — not a defect in the built
files, and it degrades gracefully (no console/page error) if that access is
unavailable.

---

## 4. Style-gate scorecard (`PROSPECT_BRAND_STYLE_GATE.md` §4)

Scored by direct visual inspection of the section-by-section desktop and
mobile screenshots in `verification/` (both full pages, both viewports, sliced
into per-section crops for close reading), cross-checked against the sourced
facts/colors/type in `SOURCE_MANIFEST.md`.

| Dimension | Score | Required | Evidence |
|---|---:|---:|---|
| Brand fidelity | 5 | ≥4 | Exact sourced colors (`#7EBEC5`, `#3c3c3b`), exact sourced type stack (Playfair Display / Source Sans Pro / Advent Pro), the founder's own verbatim quote used as the hero headline and heritage blockquote, CRO 7877 displayed. |
| Distinctiveness | 4.5 | ≥4 | Specialties are an editorial numbered accordion with one featured split-image module (`idx_d_1.png`), not a card grid; a horizontal heritage timeline; competitor-swap test fails (name, CRO, three-generation story, and quote are load-bearing, not decorative). |
| Hero impact | 5 | ≥4 | Full-bleed clinic portrait, dark gradient that doesn't flatten the photo, headline built from the clinic's own quote, two specific CTAs, a stat/timeline strip anchoring credibility above the fold (`verification/index-desktop-viewport.png`). |
| Below-fold art direction | 4.5 | ≥4 | Five distinct compositional moments alternating dark/light density: heritage (dark, quote + timeline) → specialties (light, editorial accordion) → team (dark, portrait + credential rail) → tech (light, 3-col + photo pair) → contact (dark panel + live map). No repeated card rows. |
| Typography | 5 | ≥4 | Playfair Display reserved for the founder-quote/heritage voice (matching its one sourced live use), Source Sans Pro for body/headings, Advent Pro for uppercase eyebrow labels — all three are the clinic's own enqueued fonts, not category defaults. |
| Image quality/treatment | 4.5 | ≥4 | All imagery downloaded from the clinic's own `wp-content/uploads`, byte-validated (real PNG/JPEG signatures + correct decoded dimensions, §3 of this report); consistent treatment (dark overlay only on hero/section backgrounds, natural color elsewhere). |
| Mobile intentionality | 4.5 | ≥4 | Mobile has its own rhythm, not stacked desktop: edge-to-edge team photo, full-width numbered accordion, timeline as a horizontal scroll strip, dedicated off-canvas menu with visible open/close state (`verification/idx_m_*.png`). |
| Credibility/proof | 4 | ≥3 | CRO 7877 shown twice, all 10 specialties link to verified detail, the 90% regeneration figure is explicitly attributed as the clinic's own published claim rather than an independent statistic — no invented testimonials/awards. |
| Conversion clarity | 5 | ≥4 | Single WhatsApp-first path with a pre-filled message (matches the clinic's own live widget copy), a `tel:` link, and consistent, specific CTA labels repeated at hero/nav/mobile-menu/contact — never a bare "saiba mais". |
| Proposal persuasiveness | 4.5 | ≥4 | Opportunity-first headline, real screenshot evidence within the first fold, three matched problem/improvement pairs, deliverables/dependencies/sequence, one explicit next step, disclosure compact and non-repetitive (`verification/prop_d_*.png`). |

**Average: 4.65** (≥4.0 required — pass). **No dimension below 3** (lowest is
4, credibility/proof, still above its 3.0 floor). All six dimensions with a
hard ≥4 floor (brand fidelity, distinctiveness, hero, below-fold, mobile,
proposal) meet it.

### 4.1 Anti-template tests (`PROSPECT_BRAND_STYLE_GATE.md` §3)

1. **Logo-removal test** — pass: the founder quote, CRO number, and three-generation timeline still identify the brand without the logo.
2. **Competitor-swap test** — pass/fail-safe: the hero headline, heritage narrative, and CRO number are specific to Instituto Zétola and could not be swapped to a competitor without a full content rewrite.
3. **Squint test** — pass: at thumbnail size the alternating dark/light section rhythm (`verification/index-desktop-full.png` thumbnail view) reads as a deliberate sequence, not noise.
4. **Five-second test** — pass: name, category, and the "three generations / ten specialties" positioning are legible in the hero alone.
5. **Below-fold test** — pass: quality holds through heritage/specialties/team/tech/contact; no generic card collapse (§ table above).
6. **Mobile-native test** — pass: mobile-specific composition confirmed in §3.1–3.2 and the mobile slice review, not merely a narrower desktop.

### 4.2 Adversarial review roles (`PROSPECT_BRAND_STYLE_GATE.md` §8)

Answered directly against the same evidence (screenshots + source manifest),
in lieu of separate dispatched reviewers, since the underlying visual evidence
was already fully inspected section-by-section in this session:

- **Brand strategist — "Why is this unmistakably this prospect?"** Because the hero headline is the clinic's own quote, the timeline dates (1936/1996/2004) and CRO 7877 are specific facts no competitor could reuse, and the teal accent/typeface trio are sampled from the clinic's live stylesheet, not chosen fresh.
- **Art director — "Where does the system go generic?"** The tech-section photo pair (`assets/images/banner-02/03.png` reused as product shots) is the least bespoke moment — it's real clinic imagery but reads more like stock-adjacent product photography than the rest of the page. Acceptable given no alternative imagery is published, but it's the weakest link, consistent with credibility/proof scoring the low end of its pass range.
- **Mobile/conversion reviewer — "Where does persuasion collapse on a phone?"** It doesn't collapse; the WhatsApp CTA is repeated at consistent, reachable points (hero, mobile-menu drawer, contact section) and the specialties accordion prevents the "excessively tall stack" failure the gate warns about.

No two reviewers flagged the same high-severity issue, so nothing blocks release on this axis.

---

## 5. Deliverables present in this directory

```
index.html            production site (17 sections/anchors, no proposal.html links, no disclosure language)
proposal.html          separate sales document (noindex, non-affiliation banner + bottom disclosure)
styles.css             shared stylesheet (sourced colors/type as CSS custom properties)
script.js              mobile menu behavior only (open/close/Escape/focus/viewport-resize), no framework, no fake form
assets/images/          22 verified, byte-validated brand/photo assets downloaded from the live site
assets/proposal/        6 evidence screenshots used inside proposal.html (current site + rebuilt demo)
SOURCE_MANIFEST.md      full fact/asset/color/type source ledger (pre-existing, re-verified this session)
PROSPECT_BRAND_STYLE_GATE.md  gate definition (read, not modified)
prospect.json           original prospect brief (read, not modified)
BUILD_TASK.md           task brief (read, not modified)
BUILD_REPORT.md          this file
verification/           run_checks.js + report.json + all screenshots (viewport, full-page, and section slices) from this session
```

---

## 6. Known limitations

1. **No mobile screenshot of the *current* (official) site exists in `assets/proposal/`** — only `current-desktop-full.png` / `current-desktop-viewport.png` were captured (in a prior part of this build, before this session). `proposal.html` discloses this gap directly to the reader at the point where a mobile "before" image would otherwise appear, rather than omitting it silently or fabricating one. This session did not attempt to backfill it, to avoid making an additional unreviewed live-site capture outside the original evidence-gathering pass; if wanted, it is a same-day, ~1-command follow-up (`playwright` screenshot of the live official URL at 390×844) that would not require touching the finished demo pages.
2. **The live Google Maps embed was removed in the 2026-07-26 improvement pass.** The contact section now uses a locally rendered arrival panel with the verified address, phone number and a direct external route link, avoiding an empty third-party frame when map embeds are unavailable.
3. **Credibility/proof deliberately caps at "meets its ≥3 floor comfortably but is the lowest-scoring dimension"** because the site publishes only one named professional (Dr. André Zétola, CRO 7877) and one attributed self-reported statistic (~90% bone-regeneration success) — by design, per `BUILD_TASK.md`'s instruction to omit anything unverified. This is a source-availability constraint, not an execution gap.
4. **No hosting/publication step was run or attempted**, per instruction. "Published files match reviewed files by hash" (gate §7) is therefore not applicable — nothing was published to compare.

---

## 7. Explicit confirmation

- Static-only: no framework, package manager, CMS, backend, or fake form anywhere in `index.html`/`proposal.html`/`script.js` (confirmed by `grep` for `<form`/`<input`/`<textarea`/`<select`, 0 matches).
- `index.html` navigation/footer contain zero links to `proposal.html` and zero proposal/redesign/audit/evidence/before-after/non-affiliation/limitations language (confirmed by `grep`, 0 matches both times, re-checked after the §2 fixes).
- All facts, images, colors, and type in both pages trace to `SOURCE_MANIFEST.md`, which itself traces to live-fetched official pages verified again today (§1.1).
- Zero overflow, zero console errors, zero page errors, zero failed requests across both pages at both required viewports (§3).
- Mobile menu opens/closes via button, link, and Escape, with the required accessible-label change and focus return (§3.1).
- **Not deployed. Not published. All work remains local to this directory.**

---

## 8. Improvement pass — 2026-07-26

Updated `index.html` and `styles.css` only. Added brand-specific clinical wayfinding for four verified needs, local-business structured data from already verified contact facts, and a resolved arrival/contact panel in place of the network-dependent map frame. The production page was rendered and checked at 1440×900 and 390×844: scroll width matched viewport width, local assets decoded, anchors resolved, runtime/request errors were zero, and the mobile menu opened and closed with the expected ARIA label/state changes and Escape behavior. `node --check script.js`, unresolved CSS-variable detection, forbidden production-language search and `git diff --check` also passed.
