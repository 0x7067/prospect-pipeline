# Source Manifest — Rosetti Advogados Associados

All facts, copy, imagery, and brand tokens used in `index.html`, `proposal.html`, and `styles.css`
are traced below to a specific official/public source. Nothing in this list is inferred or
fabricated. Research was performed 2026-07-17 against the live site and its own linked pages.

## 1. Business identity

| Fact | Value used | Source |
|---|---|---|
| Legal/trade name | Rosetti Advogados Associados | `https://rosettiadvogados.adv.br/` `<title>`; prospect.json `business_name` |
| Official URL | https://rosettiadvogados.adv.br/ | prospect.json `official_url`; verified live 2026-07-17 (HTTP 200) |
| Category | Advocacia trabalhista, previdenciária e sindical | prospect.json `category`; confirmed by site meta description and `/o-escritorio/` copy |
| Address | Av. Marechal Floriano Peixoto, nº 96, sala 41 — 4º andar, Centro, Curitiba/PR — CEP 80020-090 | `https://rosettiadvogados.adv.br/contato/` (raw HTML `<ul>` block); prospect.json `address` gives a shorter form of the same address — the fuller, sourced version from `/contato/` was used |
| Phone | (41) 3015-5993 | `https://rosettiadvogados.adv.br/contato/` |
| WhatsApp number | +55 41 99820-0917 (5541998200917) | `https://rosettiadvogados.adv.br/` — `ht_ctc_chat_data`/`ht_ctc_chat_var` JSON embedded in page source (`"number":"5541998200917"`), and the site's own "Falar via WhatsApp" nav link |
| Hours | 8h30 às 17h | `https://rosettiadvogados.adv.br/contato/` |
| Emails | claudio@, juliane@, milena@, renata@, contato@rosettiadvogados.adv.br | `https://rosettiadvogados.adv.br/equipe/` (raw HTML `mailto:` links) |
| Social — Instagram | https://www.instagram.com/rosettiadvogados/ | Site footer; prospect.json `evidence_links`; HTTP 200 verified 2026-07-17 |
| Social — Facebook | https://www.facebook.com/rosettiadvogados | Site footer; HTTP 200 verified 2026-07-17 |
| Social — LinkedIn | https://www.linkedin.com/company/rosetti-advogados/ | Site footer; HTTP 200 verified 2026-07-17 |

## 2. Brand assets

| Asset | Source URL | Saved as | Notes |
|---|---|---|---|
| Logo (PNG, RGBA, 312×99) | `https://rosettiadvogados.adv.br/wp-content/themes/rosetti-toss-v2/image/rosetti-advogados.png` | `assets/img/rosetti-logo.png` (copy of `assets/source/logo.png`) | Official nav/footer logo, used unmodified except CSS sizing and a `brightness(0) invert(1)` filter for the dark footer placement |
| Favicon (PNG, 80×80) | `https://rosettiadvogados.adv.br/wp-content/themes/rosetti-toss-v2/image/rosetti-advogados-favicon.png` | `assets/img/favicon.png` | Used unmodified |
| Logo (JPEG, og:image, 800×500) | `https://rosettiadvogados.adv.br/wp-content/uploads/2015/09/rosetti-logo.jpg` | `assets/source/logo-jpg.jpg` | Downloaded for reference only; not used in production pages |
| Theme stylesheet (for color/type extraction) | `https://rosettiadvogados.adv.br/wp-content/themes/rosetti-toss-v2/style.css?ver=6.8.1` | `assets/source/theme-style.css` | Read-only reference, not shipped |
| Hero slider images (2×, 1120×250) | `.../wp-content/uploads/2015/09/slide-3.jpg`, `slide-4.jpg` | `assets/source/slide-3.jpg`, `slide-4.jpg` | Downloaded and reviewed; **not used** as hero imagery — both are generic stock gavel/scales photography with a heavy dark overlay, which `PROSPECT_BRAND_STYLE_GATE.md` and `BUILD_TASK.md` explicitly direct against. See BUILD_REPORT.md §Design rationale. |
| Article fallback image | `.../wp-content/themes/rosetti-toss-v2/image/rosetti-advogados-img.jpg` | `assets/source/rosetti-advogados-img.jpg` | Downloaded for reference; not used (see below) |

## 3. Colors (sampled from the official stylesheet, not eyeballed)

| Token | Hex | Source |
|---|---|---|
| Primary teal | `#47716f` | `theme-style.css` — used for `h1`–`h5`, nav links, buttons, footer background |
| Accent mint | `#8cd9d6` | `theme-style.css` — `footer.page-footer .footer-copyright h4 { color: #8cd9d6 }` |
| Body ink | `#212121` | `theme-style.css` — `body { color: #212121 }` |
| Off-white section bg | `#fbfbfb` | `theme-style.css` — `.section.home-blog { background: #fbfbfb }` |

New tokens (`--teal-800 #34524f`, `--teal-900 #243937`, `--paper #f5f2ea`, `--ink-soft #4b4b4b`, `--line #d8d2c2`)
are documented evolutions computed from the verified primary teal and a warm neutral family — see
`BUILD_REPORT.md` §Color for the rationale and contrast verification.

## 4. Typography

| Role | Family | Source |
|---|---|---|
| Body | Roboto | `theme-style.css` — `body { font-family: 'Roboto', sans-serif }`; also loaded via Google Fonts on the live site |
| Headings / nav / buttons | Roboto Condensed | `theme-style.css` — `h1, h2, h3, h4, h5, nav, ... { font-family: "Roboto Condensed", sans-serif }`; live site loads it from `fonts.googleapis.com/css2?family=Roboto+Condensed...` |
| Display numerals (new) | Roboto Slab | Not on the official site. Justified addition: echoes the slab-serif structural proportions of the official logo wordmark (`assets/img/rosetti-logo.png`) — see BUILD_REPORT.md §Concept thesis. Loaded from the same Google Fonts family as Roboto/Roboto Condensed for a coherent superfamily. |

## 5. Page copy (verbatim or minimally trimmed, all sourced)

| Copy used in `index.html` | Source page |
|---|---|
| Hero headline: "Especialistas na Defesa dos Direitos Trabalhistas, Previdenciários e Sindicais." (case-adjusted to sentence case) | `https://rosettiadvogados.adv.br/` — `<h1>` on the home slider |
| Hero/meta lede: "Somos uma equipe de profissionais altamente especializada na defesa dos direitos trabalhistas e previdenciários da classe trabalhadora." (paraphrased to match audience framing) | `https://rosettiadvogados.adv.br/` `<meta name="description">` |
| "O Rosetti Advogados é um escritório especializado em Direito Trabalhista, Previdenciário e Sindical..." (full paragraph, verbatim) | `https://rosettiadvogados.adv.br/o-escritorio/` and site footer (same paragraph appears in both) |
| Mission paragraph (verbatim) | `https://rosettiadvogados.adv.br/o-escritorio/` — "Nossa Missão" |
| Vision paragraph (verbatim) | `https://rosettiadvogados.adv.br/o-escritorio/` — "Nossa Visão" |
| Five values (verbatim list) | `https://rosettiadvogados.adv.br/o-escritorio/` — "Nossos Valores" |

## 6. Team / OAB credentials

Source: `https://rosettiadvogados.adv.br/equipe/` (raw HTML, verified 2026-07-17; the rendered/markdown
extraction omitted Milena Kraft's OAB number, so the raw HTML — which includes it — was used as the
authoritative version).

| Name | OAB/PR | Role | Credentials (verbatim, trimmed of HTML entities) | Email |
|---|---|---|---|---|
| Cláudio Rosetti de Campos | 38.934 | Advogado sócio | Graduado UTP (2003); especialista em Direito e Processo do Trabalho (IPEJ/Rede LFG); especialista em Direito Coletivo do Trabalho (IEL) | claudio@rosettiadvogados.adv.br |
| Juliane Thays Ferrari Rosetti | 67.675 | Advogada associada | Graduada Assis Gurgacz (2012); pós em Direito Civil (Anhanguera); pós em Direito e Processo do Trabalho (UNICURITIBA); especialista em Direito Coletivo do Trabalho (IEL); pós em Direito Previdenciário/RGPS (2023) | juliane@rosettiadvogados.adv.br |
| Milena Kraft | 119.233 | Advogada associada | Graduada UTP (2022); pós em Direito do Trabalho e Processo Trabalhista (Uninter, 2024) | milena@rosettiadvogados.adv.br |
| Renata Rosa | 129.194 | Advogada associada | Graduada UNINTER (2023); pós-graduanda em Direito Previdenciário (Legale) | renata@rosettiadvogados.adv.br |
| Ana Carolina da Cunha | — (not a lawyer) | Equipe administrativa — graduanda de Administração | 5º período, Faculdades Estácio de Sá | contato@rosettiadvogados.adv.br |

No professional not listed on `/equipe/` was added. Ana Carolina da Cunha is explicitly labeled as
administrative staff, not a lawyer, matching the source page (no OAB number is published for her).

## 7. Practice areas (verbatim, from `https://rosettiadvogados.adv.br/areas-de-atuacao/`)

Four categories — Direito Individual do Trabalho, Direito Coletivo e Sindical, Direito e Processo
Previdenciários, Direito Cível — each with the exact bullet items published on that page (WordPress
`[su_divider]` shortcode artifacts were stripped; no items were added, removed, or reworded beyond
minor punctuation normalization).

## 8. Articles / publications

All six article titles and URLs used in the `#publicacoes` section and the "ver todos" link are taken
directly from `https://rosettiadvogados.adv.br/` (home page article list) and cross-checked against
`https://rosettiadvogados.adv.br/blog/`, both scraped 2026-07-17. No dates were invented; the site
itself is honest that it links to the article, and no "recent" claim is made in `index.html` —
addressing prospect.json `problems[0]` directly (see BUILD_REPORT.md).

Full 12-article list observed on the home page (six were selected for the index teaser; the remaining
six are reachable via the "Ver todos os artigos" link to the live blog):
1. AUXÍLIO EMERGENCIAL (Lei nº 13.982/20) — `/1451-2/`
2. O Fracionamento do Período de Férias — `/o-fracionamento-do-periodo-de-ferias/`
3. Será que essa placa vale? — `/sera-que-essa-placa-vale/`
4. As mudanças introduzidas pela Reforma da Previdência — `/as-mudancas-introduzidas-pela-reforma-da-previdencia/`
5. Teve seu celular clonado?... — `/teve-seu-celular-clonado-sabia-que-a-empresa-de-telefonia-e-responsavel-pelos-danos/`
6. Rescisão contratual por mútuo acordo — `/rescisao-contratual-por-mutuo-acordo/`
7. Fiquei desempregado, e agora... — `/fiquei-desempregado-e-agora-como-faco-com-a-pensao-alimenticia/`
8. Trabalhadores expostos ao risco... — `/trabalhadores-expostos-ao-risco-garantem-a-permanencia-em-atividade-apos-a-concessao-da-aposentadoria-especial/`
9. Empresa de telefonia é condenada... — `/empresa-de-telefonia-e-condenada-a-indenizar-cliente-pela-falha-na-prestacao-de-servico/`
10. O atraso no pagamento de salários... — `/o-atraso-no-pagamento-de-salarios-gera-o-direito-de-indenizacao-por-dano-moral/`
11. Concessionária e montadora são condenadas... — `/concessionaria-e-montadora-sao-condenadas-a-indenizar-um-cliente-que-comprou-um-carro-0-km-com-defeito/`
12. Gestante consegue anular demissão... — `/gestante-consegue-anular-demissao-e-recebera-verbas-do-periodo-de-estabilidade/`

Articles 1, 4, 8, 2, 6, 12 (renumbered 01–06 in `index.html`) were selected as a representative,
non-duplicated cross-section spanning trabalhista, previdenciário, and cível content.

## 9. Documented problems (from `prospect.json`, independently re-confirmed)

`prospect.json.problems` was re-verified live on 2026-07-17, not merely trusted:

- **Stale "Publicações Recentes"**: confirmed — newest homepage article is the 2020 Auxílio
  Emergencial post; remaining items date to 2019. Re-confirmed via `/blog/` scrape (same list).
- **Broken thumbnails**: could not visually reproduce the "R" placeholder directly, but independently
  confirmed the underlying defect is real: a Playwright load of `https://rosettiadvogados.adv.br/`
  recorded **6 HTTP 404 resource failures and 1 Disqus container error** in the browser console (see
  `BUILD_REPORT.md` §Verification, live-site baseline capture).
- **No explicit hero CTA**: confirmed by inspection — the hero `<h1>` block has no button; contact
  requires finding "Contato" in the nav or the floating WhatsApp icon.
- **Cookie banner over hero**: confirmed — `#cookie-law-info-bar` renders as a fixed bottom-right
  panel overlapping page content until dismissed.
- **Outdated copyright**: confirmed — footer reads "Copyright © 2015-2025" while the live capture
  was taken in 2026.

## 10. What was deliberately NOT used, and why

- **Slider photography (`slide-3.jpg`, `slide-4.jpg`)**: generic gavel-and-scales stock imagery with
  a heavy dark gradient overlay — exactly the imagery `BUILD_TASK.md` and
  `PROSPECT_BRAND_STYLE_GATE.md` direct against ("avoid ... generic gavels/scales imagery"). The hero
  in `index.html` is typographic/color-composition-led instead, built from the verified brand palette
  and the site's own numbered-list motif (the sliders themselves present numbered Universal
  Declaration articles) rather than the stock photo.
- **Lawyer headshots**: none exist on the official site (`/equipe/` is text-only); none were
  generated, sourced elsewhere, or implied.
- **Years-in-business / "anos de experiência" claims**: the WordPress `datePublished` metadata
  (2012) reflects when a CMS page record was created, not a verified firm-founding date, and the
  team bios only say "Atuamos há anos" (no number). No specific year count is stated anywhere in
  `index.html` or `proposal.html`.
- **CNPJ / econodata registry details**: `prospect.json.evidence_links` includes an Econodata page
  for "Claudio Rosetti Sociedade Individual de Advocacia." This was reviewed only to corroborate that
  the business entity is active; no registry numbers, revenue, or filing data from that source were
  used in copy, since they are not relevant to the public-facing site and are outside what the firm
  itself publishes.
- **Instagram content**: the reel URL in `prospect.json.evidence_links`
  (`instagram.com/reel/DGBhbghxXlC/`) was confirmed reachable but not embedded — Instagram requires
  authentication for full content access via automated tooling, and embedding a social screenshot as
  "polished production imagery" is explicitly discouraged by `PROSPECT_BRAND_STYLE_GATE.md` §5
  (Imagery). The footer/nav instead link to the live, official Instagram profile.

## 11. Comparison screenshots used in `proposal.html`

Captured 2026-07-17 with Playwright (Chromium), viewport-only (no full-page scroll), zero cache:

| File | Target | Viewport |
|---|---|---|
| `assets/screenshots/current-desktop-viewport.png` | `https://rosettiadvogados.adv.br/` (cookie banner dismissed via its own "Rejeitar" control) | 1440×900 |
| `assets/screenshots/current-mobile-viewport.png` | same | 390×844, `isMobile:true` |
| `assets/screenshots/proposed-desktop-viewport.png` | local `index.html` (this build) | 1440×900 |
| `assets/screenshots/proposed-mobile-viewport.png` | local `index.html` (this build) | 390×844, `isMobile:true` |

Full-page variants (`*-fullpage.png`) were also captured for internal review and are included in
`assets/screenshots/` but not embedded in `proposal.html`, to keep that document a compact,
above-the-fold-focused comparison as required by the brand gate.
