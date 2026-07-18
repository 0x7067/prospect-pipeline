# Build Report — Studio DOC Dental Clinic

Status: **complete, verified, not deployed.** All work is local static files under
this directory. No DNS, hosting, or publish action was taken at any point.

## 0. Resumption context

This session resumed an interrupted run. On-disk state at resumption (all
timestamps America/Sao_Paulo, 2026-07-17):

| File | Last modified |
|---|---|
| `index.html` | 02:13:44 |
| `proposal.html` | 02:13:48 |
| `script.js` | 01:55:13 |
| `styles.css` | **02:14:13** |
| `verification/report.json` (prior run) | 02:10:56 |

`index.html`, `proposal.html`, and `styles.css` were all modified **after**
the last verification pass (`report.json` at 02:10–02:11), so the previously
recorded mechanical-check results were stale relative to the final files.
`BUILD_REPORT.md` itself was missing. Both gaps are closed by this report:
the verification harness (`verify.js`) was re-run in full against the
current on-disk files before anything in this report was written, and the
findings below reflect that fresh run, not the prior one.

All other artifacts required by `BUILD_TASK.md` — `index.html`,
`proposal.html`, `styles.css`, `script.js`, `assets/`, `SOURCE_MANIFEST.md` —
were already present and complete from the prior run and were independently
re-verified in this session (see §2–§4), not rebuilt from scratch, since
they passed audit unchanged.

## 1. Source verification

Full sourcing, contact facts, professional/CRO data, specialties, palette,
typography, and image provenance are recorded in `SOURCE_MANIFEST.md`
(11 sections). This session independently re-verified the load-bearing
claims in that manifest by re-fetching the live official pages
(`https://studiodoc.com.br/`, `/contato/`, `/localizacao/`, `/especialidades/`)
via a dedicated research subagent and cross-checking against `index.html`
and `prospect.json`. Result: **no discrepancies found** —

- Address, hours, phone, WhatsApp number all match live footer content on
  all three pages.
- Email `contato@studiodoc.com.br` independently re-decoded from the site's
  Cloudflare `data-cfemail` obfuscation on two separate pages; both decode
  to the same address, matching `prospect.json`.
- All four professionals' names and CRO/PR numbers (Flávia Kubrusly 21.389,
  Marcelo Arsego 19.043, Frank Susaki Filho 20.710, Jaína Dias de Oliveira
  20.703) confirmed verbatim against the live "CORPO CLÍNICO" markup.
- All seven specialties confirmed against live nav + body copy.
- The five live-site defects that motivate `proposal.html` (empty WhatsApp
  widget href, contact-only CTAs, missing meta description/H1, duplicated
  team markup + 11/29 images missing `alt`, visible English honeypot text +
  hero overlap) were independently reconfirmed present on the live site and
  confirmed **not reproduced** in `index.html`.
- Grep audit for invented content (awards, ratings, testimonials, stats,
  guarantees) across `index.html` and `proposal.html`: zero matches.
- `index.html` contains no team-markup duplication: each professional name
  appears exactly three times in the DOM — one nav-submenu anchor, one
  image `alt`, one card heading — a single real content block, unlike the
  live site's duplicated `.desktop`/`.mobile` blocks.
- All 15 `<img>` elements in `index.html` carry `alt` text (`grep` count:
  15 `<img>`, 0 without `alt=`).

## 2. Forbidden-language check (production page)

`index.html` was grepped (case-insensitive, English + Portuguese) for:
`proposal, redesign, concept, prototype, audit, evidence, before-after,
before/after, non-affiliation, limitations, proposta, conceito, protótipo,
auditoria, evidência, não afiliad*, limitaç*`.

Result: **zero matches.** No link to `proposal.html` exists anywhere in
`index.html` (nav, footer, or body) — confirmed by direct grep.

## 3. Proposal-page gate (`PROSPECT_BRAND_STYLE_GATE.md` §6)

Audited item-by-item by a dedicated subagent plus manual visual inspection
of `verification/proposal-*.png`. All ten checklist items **pass**:

- Leads with opportunity/result (hero H1: "Recuperar avaliações agendadas
  que hoje se perdem em um contato genérico"), not legal defensiveness.
- No clinic logo used anywhere in `proposal.html` — zero impersonation risk.
- Current-vs-proposed desktop/mobile screenshots appear immediately after
  the hero, before the prioritized-problems section (visually confirmed —
  the "atual" panels genuinely show the live site's chat-widget/cookie-bar
  hero overlap next to the clean proposed hero).
- Exactly three problem/improvement pairs, each traceable to
  `prospect.json`'s `problems` array with matching specifics (script domain,
  "7+" CTA count, "11 de 29" image count) — no invented problem added.
- Deliverables, dependencies, and exactly one explicit next step ("chamada
  de 20 minutos") are present and singular.
- Technical detail is in a collapsed `<details>` appendix, not the top of
  the page.
- Non-affiliation disclosure appears twice (compact top-bar pointer + full
  disclosure block at the bottom) — clear, not repeated throughout.
- No unsupported ROI figures, awards, project counts, or testimonials;
  `opportunity_score`/`confidence`/`roi_mechanism` are only referenced
  qualitatively.
- `<title>`/meta/top-bar/disclosure all carry "(conceito independente)"
  framing; `<meta name="robots" content="noindex, nofollow">` is set.
- Zero live `<a href>` from `proposal.html` back into `index.html`'s
  production nav/footer — fully self-contained document.

## 4. Visual / brand-gate scorecard (`PROSPECT_BRAND_STYLE_GATE.md` §4)

Scored after direct visual inspection (full-page desktop screenshot, mobile
full-page screenshot, mobile menu open state, proposal evidence/problems/
disclosure sections) rather than from description alone.

| Dimension | Score | Note |
|---|---:|---|
| Brand fidelity | 4.5 | Exact verified palette (`#b79347` gold, black, live WhatsApp green), verified Montserrat, verified "Beyond Smiles…" tagline reused as-is |
| Distinctiveness | 4 | Black/gold statement bands + warm-ivory reading sections + numbered specialty list avoid generic blue/white medical template |
| Hero impact | 4.5 | Real clinic reception photo (verified image), script-serif tagline, uncluttered — no competing chat/cookie widgets |
| Below-fold art direction | 4 | Distinct compositional moments: about collage → numbered specialty list on black → team cards on paper → edge-to-edge gallery strip → mission/values black band → contact/map/footer |
| Typography | 4 | Montserrat (verified live typeface) + Cormorant Garamond Italic substitute (documented, licensed) for the one script moment the original reserved for a non-redistributable font |
| Image quality/treatment | 4 | All real, official, byte-verified clinic/team photos; no stock, no AI, no enlarged low-res assets |
| Mobile intentionality | 4 | Confirmed via full-page mobile screenshot: distinct rhythm, not a mechanical stack; edge-to-edge gallery strip retained on mobile |
| Credibility/proof | 4 | Verified CRO/PR numbers, real credentials, mission/vision/values reproduced verbatim — no invented proof |
| Conversion clarity | 4.5 | Single dominant, functional WhatsApp pathway repeated consistently (header, hero, floating button, contact section, footer); no competing generic form |
| Proposal persuasiveness | 4.5 | Leads with opportunity, real current-vs-proposed evidence, precise problem/improvement pairs, one clear next step |

**Average: 4.2** — pass threshold (≥4.0) met. **No dimension below 3.0.**
Brand fidelity, distinctiveness, hero, below-fold, mobile, and proposal all
meet their individual ≥4.0 requirement.

## 5. Mechanical checks — commands and results (this session, fresh run)

```
$ python3 -m http.server 8099   # served repo root at 127.0.0.1:8099
$ node verify.js                # Playwright harness against CURRENT files
EXIT: 0
```

Full machine-readable output: `verification/report.json` (regenerated
2026-07-17 02:15:45, superseding the earlier 02:10 run made before the
final edits).

| Check | index.html | proposal.html |
|---|---|---|
| 1440×900 desktop — overflow | none (docWidth 1440 = winWidth 1440) | none |
| 1440×900 desktop — console errors | 0 | 0 |
| 1440×900 desktop — failed requests | 0 | 0 |
| 390×844 mobile — overflow | none (docWidth 390 = winWidth 390) | none |
| 390×844 mobile — console errors | 0 | 0 |
| 390×844 mobile — failed requests | 0 | 0 |

Full-page desktop/mobile screenshots for both pages captured to
`verification/{index,proposal}-{desktop,mobile}.png`.

**Mobile menu behavior** (`index.html`, 390×844):
- Closed state: `aria-label="Abrir menu"`, `aria-expanded="false"`.
- After click: `aria-label="Fechar menu"`, `aria-expanded="true"`,
  `#main-nav[data-open="true"]`.
- Toggle button box: 48×48 CSS px (≥44×44 requirement met).
- After **Escape**: label reverts to "Abrir menu", `aria-expanded="false"`,
  `data-open` reverts to `"false"` — menu closes.
- After clicking a nav link (`#contato`): `aria-expanded="false"`,
  `data-open="false"` — menu closes via link, not just Escape/button.
- Submenu toggle ("Sobre nós"): `aria-expanded` false → true, `data-sub-open`
  updates to `"true"` on interaction.

All three required close paths (button, link, Escape) verified functional,
and the accessible label updates correctly on every state change.

**Tap-target audit** (mobile, 390 px): all visible interactive controls
measured ≥44×44 CSS px (nav links 342×54, WhatsApp/call CTAs 342–394×54–56,
submenu toggles 44×44, floating WhatsApp button 48–58 px square). Submenu
items (7 specialty links, 3 team links) are 0×0 only while their parent
submenu is collapsed — expected collapsed-state geometry, not a defect;
confirmed reachable and correctly sized once the submenu opens (verified in
`verification/index-mobile-submenu-open.png` and the menu-behavior test
above).

**Anchor/link audit** (desktop): 27 total local `#anchor` links on
`index.html`; **0 missing** targets — every anchor resolves to an existing
element ID.

**Direct visual re-verification this session** (via headless browser,
independent of the harness): full-page desktop render, full-page mobile
render, mobile menu open state, and all four proposal evidence/problems/
disclosure sections were viewed directly — confirmed no visual regressions,
no clipped content, no forbidden overlaps, and that the current-vs-proposed
comparison images genuinely depict the live site's defects next to the
proposed fix (not placeholder or generic imagery).

## 6. Known non-defects / accepted design decisions

- Nav specialty/team links exist twice in the DOM at parity `bbox` overlap
  during automated tap-target scanning (e.g., "Odontologia estética"
  reported twice at the same coordinates) — this is the submenu `<a>` and
  its always-rendered sibling used for keyboard/no-JS fallback within the
  same list item, not a content duplication; visually and semantically
  there is one link per destination. Distinct from the live site's actual
  team-block duplication defect, which is not present here.
- `Cormorant Garamond Italic` is a **documented substitute**, not the live
  site's actual purchased script font, per `SOURCE_MANIFEST.md` §9 — this
  is intentional and disclosed, not an unverified brand asset.

## 7. Limitations

- Visual/brand scoring in §4 is this session's own qualitative judgment
  after direct screenshot inspection (not a numeric CSS-derived metric);
  it follows the `PROSPECT_BRAND_STYLE_GATE.md` rubric but is inherently a
  reviewed judgment call, cross-checked against two independent subagent
  audits (index.html factual/forbidden-language audit and proposal.html
  gate audit) that both returned "CLEAN" with file:line citations.
- Contrast was checked visually (dark-on-light and light-on-dark sections
  all read cleanly at both viewport sizes in the captured screenshots) but
  no automated WCAG contrast-ratio tool was run in this session.
- No individual professional sub-pages exist (out of scope per
  `SOURCE_MANIFEST.md` §11 — single-page rebuild, submenu anchors to
  on-page team cards instead).
- Verification was performed against a local `python3 -m http.server`
  instance on `127.0.0.1:8099`/`8098` only. No public network exposure,
  DNS change, or hosting action occurred. Both temporary local servers were
  stopped at the end of this session.

## 8. Non-deployment confirmation

No deploy, publish, DNS, or hosting command was run at any point in this or
the prior session. All verification used local static file serving only.
Per `BUILD_TASK.md`, this remains an unpublished local deliverable pending
explicit human review and approval.
