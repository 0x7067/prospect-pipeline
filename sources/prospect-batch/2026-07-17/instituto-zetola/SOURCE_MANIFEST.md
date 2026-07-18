# Source Manifest — Instituto Zétola Odontologia

All facts, copy, colors, typography and imagery used in `index.html` and `proposal.html`
were verified by directly fetching the clinic's own live pages and downloading its own
public asset files on **2026-07-17**. Nothing below is inferred, guessed, or invented.
Where the live site itself is broken (see `problems` in `prospect.json`), the underlying
fact was still confirmed from surrounding markup/copy rather than from the broken
shortcode output.

## 1. Identity, contact, location

| Fact | Value | Source |
|---|---|---|
| Legal/trading name | Instituto Zétola Odontologia | Homepage `<title>`, footer |
| Address | R. Alferes Ângelo Sampaio, 2.303, Bigorrilho, Curitiba – PR, 80730-460 | Footer, all pages (fetched 2026-07-17) |
| Phone | (41) 3024-2202 | Footer + header `tel:4130242202` link, all pages |
| WhatsApp | (41) 99963-1503 | Footer + `joinchat` widget data-settings, homepage |
| WhatsApp pre-filled message (source language) | "Olá, gostaria de agendar uma avaliação!" | `joinchat` widget `message_send`, homepage HTML |
| Header pre-filled message (source language) | "[L] Quero marcar uma Consulta!" | Header nav `Whatsapp` link, homepage HTML |
| Email | contato@institutozetola.com.br | Footer, all pages |
| Facebook | facebook.com/institutozetola/ | Footer social links |
| Instagram | instagram.com/institutozetola/ | Footer social links + `prospect.json.evidence_links` |
| LinkedIn | linkedin.com/company/instituto-zétola-de-odontologia/about/ | Footer social links |
| Coordinates | -25.4346561, -49.2889144 | `prospect.json.evidence_links` (Google Maps query) |
| Official URL | https://www.institutozetola.com.br/ | `prospect.json.official_url` |

## 2. People

| Fact | Value | Source |
|---|---|---|
| Founder/lead surgeon | Dr. André Zétola | Homepage quote block; `/o-instituto-zetola/` |
| Registration | CRO 7877 | Homepage quote heading "Dr. André Zétola/ CRO 7877"; repeated on `/regeneracao-ossea/` ("O Dr. André Zétola possui uma das maiores casuísticas do mundo...") |
| Specialty | Cirurgia e traumatologia bucomaxilofacial; cirurgia ortognática; cirurgia de avanço bimaxilar para apneia do sono; implantodontia | `/o-instituto-zetola/` "Nossa história" |
| Training | Graduated UFPR (Universidade Federal do Paraná); residency in Rio de Janeiro; fellowship at Northwestern University (Chicago), 1991–1992 | `/o-instituto-zetola/` "Nossa história" |
| Clinic origin | Founded 1996, first installed at Centro Paranaense de Oftalmologia (CPO); moved to current address in 2004 | `/o-instituto-zetola/` |
| Family lineage | Grandfather Flávio Zétola, dentist since 1936 in São José dos Pinhais (also served as the municipality's mayor); great-uncle Clementino Zétola, also a dentist, worked alongside Flávio | `/o-instituto-zetola/` |
| Founder quote (verbatim, used on hero/heritage section) | "Para nós, tratar você, assumir o seu problema, resolver o que te incomoda é aquilo que sabemos fazer de melhor. O seu sorriso no final do tratamento, sabendo de toda dificuldade que passamos juntos, nos motiva e impulsiona para buscar sempre o melhor, tanto tecnicamente quanto humanamente possível." — Dr. André Zétola | Homepage, quote block under "Dr. André Zétola/ CRO 7877" |

No other dentist, hygienist, or staff member is named anywhere on the live site. The
`equipe-zetola-1.png` group photograph is used to represent the multidisciplinary team the
clinic itself references ("A equipe de especialista que atende no INSTITUTO ZÉTOLA…",
`/endodontia/`), but **no individual names beyond Dr. André Zétola are published** — so no
other names, credentials or roles are invented or displayed on the rebuilt site.

## 3. Specialties (10 confirmed — each has its own live page)

Sourced from `/especialidades/` (image grid + links) and each linked specialty page,
fetched individually on 2026-07-17:

1. **Sedação Consciente** — `/sedacao-consciente/` — nitrous-oxide conscious sedation; no side effects/contraindications stated by clinic, patient can drive afterward.
2. **Apneia do Sono** — `/apneia-do-sono/` — sleep apnea, orofacial/maxillary approach.
3. **Cirurgia Ortognática (minimamente invasiva)** — `/cirurgia-ortognatica-minimamente-invasiva/` — corrects dento-facial deformities; benefits listed: mastigação, respiração, fonética, articulação, estética.
4. **DTM e Dor Orofacial** — `/disfuncao-temporomandibular-dtm-e-dor-orofacial/` — temporomandibular disorder/orofacial pain, clinical-first then surgical when indicated.
5. **Endodontia** — `/endodontia/` — root canal treatment using surgical/operating microscope, digital periapical radiography, high-precision tomography.
6. **Odontologia Estética** — `/odontologia-estetica/` — porcelain veneers/contact lenses via chairside milling, plus composite resin restorations.
7. **Odontopediatria** — `/odontopediatria/` — pediatric dentistry from first tooth eruption through adolescence, prenatal guidance included.
8. **Ortodontia** — `/ortodontia/` — traditional braces and Invisalign clear aligners.
9. **Periodontia (manutenção)** — `/periodontia/` — periodontal maintenance/prophylaxis program, radiographic + scanning follow-up.
10. **Regeneração Óssea** — `/regeneracao-ossea/` — bone regeneration using growth factors (BMP, RIGENERA); clinic states "cerca de 90%" success rate and describes itself as a pioneer in this specific technique in Brazil, and states Dr. André Zétola holds "uma das maiores casuísticas do mundo" using this specific material. This is the clinic's own published claim about its own work — reproduced verbatim/attributed, not independently verified against a third-party registry, and clearly framed on-page as the clinic's own statement.

Each specialty page provided its own portrait-format asset (`/wp-content/uploads/2022/03/*.png`,
365×667px), downloaded to `assets/images/sp-*.png`.

## 4. Brand assets (downloaded, official, public)

| Asset | Local path | Source URL |
|---|---|---|
| Primary logo | `assets/images/logo-instituto-zetola.png` | `/wp-content/uploads/2022/06/ZETOLA-LOGO-SITE.png` (header `<img>`, homepage) |
| Footer icon (crest) | `assets/images/icone-zetola.png` | `/wp-content/uploads/2022/06/ICONE-ZETOLA.png` (footer `<img>`) |
| Favicon 32/180/192 | `assets/images/favicon-*.png` | `/wp-content/uploads/2022/06/cropped-02-logo-instituto-zetola-*.png` (`<link rel="icon">`/`apple-touch-icon`) |
| Team photo | `assets/images/equipe-zetola.png` | `/wp-content/uploads/2022/06/equipe-zetola-1.png` (homepage, alt="equipe zetola") |
| Hero banners ×4 | `assets/images/banner-0{1..4}.png` | Homepage slider backgrounds (`et_pb_slide_0..4` inline CSS `background-image`) |
| Specialties section background | `assets/images/especialidades-bg.jpg` | `/wp-content/uploads/2022/06/especialidades-2.jpg` (homepage `et_pb_section_1` background) |
| Team section background | `assets/images/equipe-bg.png` | `/wp-content/uploads/2022/06/equipe-zetola-2-1.png` (homepage `et_pb_section_2` background) |
| Specialties landing photo | `assets/images/especialidade-generic.jpg` | `/wp-content/uploads/2022/06/especialidade.jpg` (`/especialidades/` page) |
| 10× specialty portrait images | `assets/images/sp-*.png` | `/wp-content/uploads/2022/03/*.png` (`/especialidades/` grid + each specialty page) |

## 5. Colors (sampled from the clinic's own live stylesheet/customizer)

| Token | Hex | Source |
|---|---|---|
| Brand accent (teal/sage) | `#7EBEC5` | Divi customizer JS payload `et_pb_custom.accent_color` on **every** page fetched (homepage, `/especialidades/`) — this is the clinic's own chosen accent color, not a template default |
| Dark section background | `#3c3c3b` | Homepage inline CSS, hero/heritage `et_pb_section_1` |
| Footer background | `#50504f` | Homepage inline CSS, `et_pb_section_0_tb_footer` |
| Footer border | `#7a7a7a` | Homepage inline CSS, `et_pb_section_1_tb_footer` |
| Body text default | `#666` | Divi base stylesheet, all pages |
| Generic theme link blue `#2ea3f2` | *not carried forward* | This is the Divi/theme's own unmodified default link color (same value ships in every stock Divi install), not a deliberate brand choice — the rebuild instead extends the clinic's actual customized accent (`#7EBEC5`) |

New colors added for the rebuild (documented, not sourced): a warm off-white
`#F7F4EF` (paper/clinical calm background, replaces stock white so photography and the
teal accent read warmer) and a deepened ink `#22201F` (body copy / high-contrast text,
derived from the sourced `#3c3c3b` for AA contrast on the new cream background). Both are
neutral extensions of the sourced charcoal/cream family, not new brand hues.

## 6. Typography (sampled from the clinic's own enqueued font stack)

| Role | Family | Source |
|---|---|---|
| Founder-quote / heritage serif | Playfair Display | Homepage inline style block: `.et_pb_text_0{font-family:'Playfair Display',...}` — the exact rule styling the "Dr. André Zétola / CRO 7877" quote |
| Body & headings default | Source Sans Pro | `et-divi-customizer-global-cached-inline-styles`: `h1..h6, body, input, textarea, select { font-family:'Source Sans Pro',... }`, every page |
| Footer wordmark / thin display label | Advent Pro | `.et_pb_text_4_tb_footer{font-family:'Advent Pro',...font-weight:300}` — styles "Desenvolvido por" footer credit; carried forward as the rebuild's uppercase eyebrow-label face because it is the only display/label face the clinic already licenses (via `wp-content/themes/Divi` Google Fonts enqueue) beyond body copy |

All three are loaded from the same Google Fonts family/weight list the live site already
requests (`fonts.googleapis.com/css?family=Source+Sans+Pro:...|Playfair+Display:...|Advent+Pro:...`).

## 7. Three words describing current visual personality

**Cluttered, dated, well-intentioned.** The clinic's actual brand marks (teal accent,
Playfair-Display founder quote, thin Advent Pro footer wordmark, three-generation family
story) are real and dignified, but they are buried under broken WordPress shortcodes,
unrendered forms, vertical sidebar titles and large empty sections (see `prospect.json.problems`).

## 8. Brand equity to preserve vs. weaknesses not to copy

**Preserve:** the teal accent `#7EBEC5`; the Playfair Display founder-quote treatment; the
three-generation heritage narrative (1936 → 1996 → 2004); the specific verified specialty
list and its portrait-image treatment; the CRO 7877 credential; the "planejamento reverso /
sempre tratamos a causa" clinical-philosophy language; the single WhatsApp-first booking
channel already in use.

**Do not copy:** broken `[dipl_logo_slider ...]` and `[fc id='1']` shortcode text rendered
as visible content; vertical/sideways section titles; large empty "Notícias"/"Equipe" gaps;
the generic "CLIQUE AQUI!" CTA; images without useful alt text; the stock Divi link-blue
`#2ea3f2` that has nothing to do with the clinic's own chosen accent.

## 9. What is deliberately omitted (unverifiable / not published)

- No named staff/dentists beyond Dr. André Zétola (CRO 7877) — no other names, roles or
  credentials exist on the live site, so none are invented.
- No prices, insurance/plan acceptance, opening hours, or appointment availability —
  not published anywhere in the fetched pages.
- No testimonials, review counts/ratings, or before/after photography — none published.
- No awards, certifications beyond CRO 7877, or membership badges — none published.
- No guarantees or outcome percentages beyond the clinic's own explicitly published
  "cerca de 90%" bone-regeneration figure, which is reproduced as an attributed clinic claim
  (§3, item 10), not restated as an independently audited statistic.

## 10. Verification method

Every page cited above was fetched directly on 2026-07-17 (raw HTML + rendered markdown)
from `https://www.institutozetola.com.br/...`; every downloaded asset was pulled from the
same live `wp-content/uploads` paths referenced in that HTML and byte-validated (PNG/JPEG
signature + decoded dimensions) after download. `prospect.json` supplied the address,
coordinates, phone (cross-checked against the live footer, both match), and the documented
list of live defects that motivate this rebuild.
