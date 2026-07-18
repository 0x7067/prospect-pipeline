# CEAP Curitiba source audit and single-version implementation checklist

Audit date: 2026-07-18

Scope: current local build plus the public CEAP pages named in `SOURCE_MANIFEST.md`. This is an evidence audit only. No publishing, uploads, outreach, form submissions, or promotion were performed.

## Executive result

All eight required files exist: `index.html`, `proposal.html`, redirect-only `rationale.html`, `styles.css`, `script.js`, `README.md`, `SITE_REVIEW.md`, and `SOURCE_MANIFEST.md`. The local pages render without horizontal overflow at 1440×900 and 390×844, the mobile navigation opens, `script.js` passes `node --check`, the detector returns `[]`, and `rationale.html` redirects to `proposal.html`.

The build is not yet evidence-ready. The most consequential defects are:

1. The main promise says internship is “guaranteed,” while the official page only documents internship agreements.
2. The home describes the catalog as presencial even though Cuidador de Idosos is explicitly 100% online and two industrial offerings include online instruction.
3. Exact generic shift times are not present in the cited source.
4. Enrollment documents and schedule choices sourced only for Técnico em Enfermagem are presented as site-wide facts.
5. The telephone link is broken (`tel:+554****5834`).
6. The proposal/design say every course card links to WhatsApp, but none of the nine cards is a link or contains a CTA.
7. `README.md` and `SOURCE_MANIFEST.md` say WhatsApp is the only outbound link, but `index.html` also links to Instagram.
8. `SITE_REVIEW.md` is stale: its recorded HTML byte sizes no longer match the files, and its Chromium path is no longer the path available on disk.

## Verified evidence anchors

All official URLs below returned HTTP 200 during this audit.

- Current sitemap: https://www.ceappr.com.br/course-sitemap.xml — exactly nine course URLs. Safe wording: “9 páginas de curso listadas no sitemap oficial em 18/07/2026.” “9 cursos ativos” is a stronger operational claim than the sitemap proves.
- Técnico em Enfermagem: https://www.ceappr.com.br/course/tecnico_em_enfermagem/
  - Exact source wording: “Conheça nossos convênios para estágio”. It does not say the internship is guaranteed to every student.
  - It lists ten named partner entries.
  - Exact shift wording: “Manhã, tarde, noite ou Sábados em período integral”; options “2 x na semana”, “4 x na semana”, or “Sábados”. No 08h–12h, 13h–17h, or generic 19h–22h times are stated there.
  - Prerequisites, enrollment documents, included apostilas/jaleco, and these shift choices belong specifically to this course page.
- Cuidador de Idosos: https://www.ceappr.com.br/course/cuidador-de-idosos/ — exact wording: “Curso Curso 100 % online”. The local “Modalidade: Presencial” is incorrect.
- Operador de Empilhadeira: https://www.ceappr.com.br/course/operador-de-empilhadeira/ — theory is Friday online/live; practice is Saturday or Sunday. A plain “Presencial” label is incomplete.
- Reciclagem para Operador de Empilhadeira: https://www.ceappr.com.br/course/reciclagem-operador-empilhadeira/ — the source itself conflicts: it says recycling occurs on Saturdays, then specifies Friday 19h–22h30 online/live. Do not publish a schedule until CEAP resolves the conflict. “Atualização periódica exigida” is not established by this source.
- NR 10: https://www.ceappr.com.br/course/nr-10-empresas/ — groups can attend at CEAP or in-company. “In company / turma fechada” omits the at-CEAP option.
- NR 35: https://www.ceappr.com.br/course/nr-35-empresas/ — same two delivery-location options as NR 10.
- Homepage: https://www.ceappr.com.br/ — supports the address, displayed phone/WhatsApp, free student parking, equipped classrooms, informatics/nursing labs, founding year 2002, stale “20 anos” wording, and a pandemic-framed testimonial. It also currently contains the official green `#3db166` and navy `#1e2d49` in source.
- Current live-site visual check at 390×844: the cookie interface occupies 416.4 px, or 49.3% of the viewport. It covers the lower half of the first screen; no primary enrollment CTA is visible. Do not claim specifically that it covers course cards without an archived capture showing course cards underneath it.
- Current live-site browser text ends with “Otimizado por Jonathan | 2024.” This supports the stale-footer claim.
- Contact: https://www.ceappr.com.br/contato/ — supports the address. The hours are also present in the current homepage/contact HTML: weekdays 08h–21h and Saturdays 09h–14h30.
- Instagram: https://www.instagram.com/ceapcuritiba/ — the extracted page title identifies `@ceapcuritiba`.

## Claim and implementation gaps

### P0 — correct before treating the home as publishable

| Location | Current statement/behavior | Finding | Required correction |
|---|---|---|---|
| `index.html:7` | Generic meta description with hospital internship and flexible shifts | Over-broad; those details are evidenced specifically for Técnico em Enfermagem | Scope the description to that course or use a catalog-level description without course-specific promises |
| `index.html:42` | “estágio garantido” | Unsupported | Replace with “convênios de estágio documentados” or equivalent; never say guaranteed |
| `index.html:43` | “Cursos presenciais” | False for Cuidador and incomplete for hybrid industrial schedules | Use modality-neutral catalog copy |
| `index.html:49` and `proposal.html:34` | “9 cursos ativos” | Sitemap proves nine listed course pages, not enrollment availability | Say “9 páginas de curso no sitemap oficial” or confirm active enrollment directly with CEAP before using “ativos” |
| `index.html:50` | “10 instituições parceiras de estágio” | Supported only in the Técnico em Enfermagem context | Label it “10 convênios listados para Técnico em Enfermagem” |
| `index.html:51–63` | Four generic turns with exact times and 2×/4× choices | Exact times are unsupported; broad shift/frequency choices are nursing-specific | Title the panel “Turnos do Técnico em Enfermagem”; remove exact times; retain only sourced broad labels |
| `index.html:77` | Nursing internship in clinics, hospitals, and home care | The source lists those as work settings, not necessarily internship placements | Separate training/possible work settings from the named internship agreements |
| `index.html:94–97` | Cuidador “prático” and presencial | Official page says 100% online | Use source-bounded copy and “Modalidade: 100% online” |
| `index.html:112–115` | Empilhadeira presencial | Source describes online/live theory plus in-person practice | State both components or omit modality pending a compact accurate label |
| `index.html:119–122` | Reciclagem “periódica exigida” and presencial | “Exigida” is unsupported; source schedule conflicts and includes online/live instruction | Remove “exigida”; avoid schedule/modalidade until the conflict is resolved, or quote only undisputed facts (4 hours and prerequisite course) |
| `index.html:135,142` | NR 10/35 only “In company / turma fechada” | Incomplete | State “na unidade para grupos ou in-company” |
| `index.html:168–180` | Generic enrollment-document section | List comes from Técnico em Enfermagem only | Rename “Documentos para matrícula no Técnico em Enfermagem” |
| `index.html:212` | `tel:+554****5834` | Broken action | Replace the asterisks with the published area code and subscriber digits (country 55; area 41; number 3276-5834), while retaining displayed `(41) 3276-5834` |

### P1 — make the proposal and evidence trail internally consistent

- `proposal.html:34`: replace “cursos ativos documentados” with a sitemap-bounded statement unless availability is independently confirmed.
- `proposal.html:35`: scope the ten internship entries to Técnico em Enfermagem.
- `proposal.html:40`: rewrite so curriculum, ten internship entries, and enrollment requirements are not implied to apply uniformly to every course.
- `proposal.html:45`: use the measured statement (“49.3% of a 390×844 first viewport on 18/07/2026”) rather than “encobre os cartões de curso,” unless a reproducible screenshot proves the latter.
- `proposal.html:61`: stale 2024 footer is currently verified. “Broken glyphs” is supported only by the prior narrative audit and lacks a durable screenshot/raw artifact; remove it or archive direct evidence.
- `proposal.html:66`: “cada cartão leva” is false in the current build. Either add an official-WhatsApp CTA to every card or change the proposal/design claim.
- `proposal.html:74`: directly link all four industrial sources named in that sentence, including NR 10 and NR 35; add the omitted specialization and recycling links or explicitly point to the complete manifest.
- `README.md:23`: replace “O único link externo” with an accurate list (WhatsApp and Instagram). Distinguish “no automatic third-party requests on page load” from user-activated outbound links.
- `SOURCE_MANIFEST.md:44`: make the same outbound-link correction.
- `SOURCE_MANIFEST.md:34`: the absolute cron-output path is not portable evidence. Keep it as process history only; move current factual support into stable public URLs plus exact excerpts, access dates, and archived screenshots where visual claims matter.
- `SOURCE_MANIFEST.md`: assign claim IDs and map each public claim to a URL, exact excerpt, access date, and scope. Explicitly record the Reciclagem schedule conflict instead of silently choosing one version.
- `BRAND_SOURCE.md:9` and `DESIGN.md:9`: they say `#3db166` is the CTA/primary action color, but `styles.css` uses `#237a41` for CTAs and does not otherwise use `--accent`. Document `#237a41` as an accessibility-derived dark green, not an official sampled color; use `#3db166` only where contrast is safe.
- `DESIGN.md:5,21`: it promises a filterable path and a course-track chooser; the build has neither filtering nor a course-track chooser (the hero panel is a nursing-shift panel). For this single static hybrid version, remove “filterable” and align the component description to what will actually ship.
- `DESIGN.md:17,30`: it mentions a sticky mobile CTA and a non-JS-dependent/inert mobile navigation; neither is implemented. Choose the simpler single version: no sticky bar, and add a no-JS navigation fallback while retaining the small toggle script.
- `script.js`: update the visually hidden toggle label between “Abrir menu” and “Fechar menu,” and close on Escape. Preserve `aria-expanded`.
- `SITE_REVIEW.md`: regenerate after corrections. Current bytes are 9574 (`index.html`), 6151 (`proposal.html`), and 257 (`rationale.html`), not 9427/6052/257. The available Chromium executable is under `chrome-linux64/chrome`, not the recorded `chrome-linux/chrome`. Do not cite temporary `/tmp` artifacts as durable evidence unless copied into the project.

## One hybrid version only — implementation checklist

1. **Freeze the evidence vocabulary.** Use “nine sitemap-listed course pages,” “ten internship agreements listed for Técnico em Enfermagem,” and “official WhatsApp contact.” Ban “guaranteed internship,” generic “all presencial,” and unverified availability/schedules.
2. **Repair `SOURCE_MANIFEST.md` first.** Add claim IDs, exact excerpts, URLs, access date 2026-07-18, and course-specific scope. Record the Reciclagem conflict. Correct the outbound-link statement.
3. **Correct `index.html`.** Apply every P0 row; scope nursing-only sections; fix the telephone URI; add the same WhatsApp CTA to each course card if the proposal continues to promise it.
4. **Align `proposal.html`.** Use measured/current audit language, scope the course/partner counts, remove unarchived “broken glyph” evidence, and link the full evidence set.
5. **Keep `rationale.html` redirect-only.** Preserve the immediate redirect, canonical, and manual fallback; add no rationale content there.
6. **Reconcile design documentation and CSS.** Describe the accessible dark green as a derived token, retain the sampled brand colors with accurate provenance, and remove unimplemented filter/sticky-bar claims. Ship only this static hybrid version; do not create variants.
7. **Harden the small interaction layer.** Keep dependency-free `script.js`, add accurate open/close labels, Escape handling, and a usable no-JS navigation fallback.
8. **Correct `README.md`.** List both outbound destinations and accurately describe what does and does not make a network request.
9. **Regenerate `SITE_REVIEW.md` from final files.** Run `node --check script.js`, the detector, desktop/mobile Playwright checks, redirect check, overflow check, CTA/touch-target checks, no-JS navigation check, and an automated assertion rejecting `garantid`, malformed `tel:`, and generic presencial claims.
10. **Final evidence gate.** Read every sentence visible in `index.html` and `proposal.html` against the claim matrix. If a claim lacks an exact source and correct scope, remove or qualify it. Do not publish or contact CEAP as part of this implementation.
