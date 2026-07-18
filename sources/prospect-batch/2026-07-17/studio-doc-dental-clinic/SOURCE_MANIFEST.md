# Source Manifest — Studio DOC Dental Clinic

All facts, copy, and imagery below were verified directly against the official
live site on **2026-07-17** (America/Sao_Paulo). Nothing in `index.html` was
invented: every claim, name, credential, address, phone, email, hour, and
image traces to a specific official URL listed here. Where the live design
used an unlicensed custom font, a justified system-safe substitute is
documented and flagged as a substitution, not a verified brand asset.

## 1. Identity & official pages checked

| Page | URL | HTTP status | Checked |
|---|---|---|---|
| Home | https://studiodoc.com.br/ | 200 | 2026-07-17 |
| Contato | https://studiodoc.com.br/contato/ | 200 | 2026-07-17 |
| Localização | https://studiodoc.com.br/localizacao/ | 200 | 2026-07-17 |
| Especialidades | https://studiodoc.com.br/especialidades/ | 200 | 2026-07-17 |

Business name (verified, `<title>` + logo alt text): **Studio Doc | Dental
Clinic** — presented on-site and in this rebuild as "Studio DOC Dental
Clinic," matching `prospect.json`.

## 2. Contact facts (verified)

| Field | Value | Source |
|---|---|---|
| Address | DOC Castelo Batel, Av. Visconde de Guarapuava, 4628, sala 810, Ala DOC, Batel, Curitiba/PR | Home page footer + `/contato/` + `/localizacao/` (identical on all three) |
| Hours | Segunda a sexta, 08:30 às 18:30 | Same three pages |
| Phone | (41) 4101-8888 | Footer `tel:04141018888`; homepage raw code also exposes `tel:+554141018888` (used for the `tel:` link in this rebuild) |
| WhatsApp | https://api.whatsapp.com/send?phone=554141018888 | Footer WhatsApp link on `/contato/`, `/localizacao/`, and homepage footer (functional, non-empty href) |
| Email | contato@studiodoc.com.br | Decoded from the site's Cloudflare email-obfuscation attribute `data-cfemail="f99a96978d988d96b98a8d8c9d90969d969ad79a9694d79b8b"` (XOR-decoded locally; matches `prospect.json`) |
| Google Maps embed | `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.854705690835!2d-49.28755948549127!3d-25.44312063964085!...` | Live `<iframe>` on `/localizacao/` — reused verbatim in `index.html` |

## 3. Professionals & CRO (verified on home page "CORPO CLÍNICO")

| Name | CRO/PR | Verified specialty summary | Source |
|---|---|---|---|
| Dra. Flávia Kubrusly | 21.389 | Implantodontia (UFPR) + Fellowship Implantodontia, University of Florida + pós-graduação Odontologia Estética (Fahl Center) | Home page |
| Dr. Marcelo Arsego | 19.043 | Cirurgia e Traumatologia Buco-Maxilo-Facial (UFPR) + Visitor Fellow, Northwestern Memorial Hospital | Home page |
| Dr. Frank Susaki Filho | 20.710 | Implantodontia (UFPR) + Fellowship, University of Florida | Home page |
| Dra. Jaína Dias de Oliveira | 20.703 | Periodontia (Universidade Positivo) + Fellowship Implantodontia, University of Florida | Home page |

Only these four verified names/credentials are used. No testimonial,
award, outcome, or metric is stated anywhere in `index.html`.

## 4. Specialties (verified — "ESPECIALIDADES" section, home + `/especialidades/`)

Odontologia Estética, Implantodontia, Cirurgia e Traumatologia
Buco-Maxilo-Facial, Harmonização Facial, Periodontia, Ortodontia
(Invisalign), Endodontia — descriptions and treatment sub-items in
`index.html` are paraphrased directly from the live copy on these two pages,
with no added claims.

## 5. Mission / Vision / Values (verified, "NOSSOS DIFERENCIAIS")

Reproduced verbatim from the home page:
- **Missão:** "Transformar vidas através do sorriso, aplicando
  conhecimentos, talento e tecnologia para proporcionar uma saúde bucal
  plena aos nossos pacientes."
- **Visão:** "Ser referência em tratamentos de Odontologia Estética e
  Funcional, através de um atendimento exclusivo conforme a necessidade de
  cada paciente."
- **Valores:** "Atendimento humanizado, integridade, transparência, preço
  justo, exclusividade, segurança, confiança e profissionais altamente
  qualificados."

## 6. Tagline (verified, existing publicly-used language)

"Beyond Smiles…" — the literal headline text used in the live homepage's
hero slider (Revolution Slider layer text, confirmed in page source). Reused
as-is in the rebuilt hero per the brand-gate requirement to lead with the
prospect's strongest existing headline language rather than invent one.

## 7. Visual assets — downloaded from official CDN, byte-verified against live srcset

All images below were fetched from `studiodoc.com.br/wp-content/uploads/...`
and confirmed to match the natural pixel dimensions declared in the live
page's own `<img>`/`srcset` attributes.

| Local file | Verified source URL | Dimensions | Used for |
|---|---|---|---|
| `assets/images/logo.png` | https://studiodoc.com.br/wp-content/uploads/2021/07/logo-footer.png | 500×173 | Header + footer logo |
| `assets/images/favicon-192.png` | https://studiodoc.com.br/wp-content/uploads/2021/07/cropped-favicon-192x192.png | 192×192 | Favicon |
| `assets/images/hero-black.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/09/background-black.jpg | 1125×750 | Hero background (the live site's own hero slide background) |
| `assets/images/clinic-1818.png` | https://studiodoc.com.br/wp-content/uploads/2021/12/IMG_1818-800x600.png | 800×600 | About collage (aerial exterior of DOC Castelo Batel) |
| `assets/images/clinic-1820.png` | https://studiodoc.com.br/wp-content/uploads/2021/12/IMG_1820-800x600.png | 800×600 | About collage (Ala DOC lobby) |
| `assets/images/clinic-2239.png` | https://studiodoc.com.br/wp-content/uploads/2021/12/IMG_2239-800x600.png | 800×600 | Hero framed visual + about collage (marble reception with real logo signage) |
| `assets/images/clinic-2241.png` | https://studiodoc.com.br/wp-content/uploads/2021/12/IMG_2241-800x600.png | 800×600 | About collage (reception, second angle) |
| `assets/images/dr-flavia.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/11/dra-flavia-kubrusly-600x800.jpg | 600×800 | Team card |
| `assets/images/dr-marcelo.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/11/dr-marcelo-arsego-600x900.jpg | 600×900 | Team card |
| `assets/images/dr-frank.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/11/dr-frank-susaki-filho-600x750.jpg | 600×750 | Team card |
| `assets/images/dr-jaina.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/11/dra-janaina-dias-de-oliveira-600x755.jpg | 600×755 | Team card |
| `assets/images/gallery-dentes.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/10/studio-doc-dentes-768x600.jpg | 768×600 | Gallery strip |
| `assets/images/gallery-galeria.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/10/studio-doc-galeria-768x600.jpg | 768×600 | Gallery strip |
| `assets/images/gallery-boca.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/10/studio-doc-boca-768x600.jpg | 768×600 | Gallery strip |
| `assets/images/gallery-sorriso.jpg` | https://studiodoc.com.br/wp-content/uploads/2021/10/studio-doc-sorriso-768x600.jpg | 768×600 | Gallery strip |

No stock photography, no AI-generated imagery, no unverified or
third-party project imagery is used anywhere in `index.html` or
`proposal.html`.

## 8. Color palette — sampled from the live site's own CSS

| Token | Hex | Verified role on live site |
|---|---|---|
| `--gold` | `#b79347` | Live site's exact hover/border/menu-underline accent (`.mbc`, `#menu-principal > li > a:before`, hero shape border) |
| `--gold-light` | `#cdb06e` | Live site's exact icon-circle fill color in the "CORPO CLÍNICO" list |
| `--ink` | `#000000` / `#131313` | Live site's header/footer/"fundo-preto" section backgrounds |
| `--whatsapp` | `#1e824c` (`rgba(30,130,76,1)`) | Live site's own `.whatsapp_onpage` button background |

**New, purposeful addition — `--paper` (`#f6f2ea`, warm ivory):** not present
on the live site (which alternates only pure black and white). Added to give
the light reading sections (About, Team, Contact) inherent warmth instead of
a generic clinical blue/white background, while the black/gold "statement"
sections retain the exact verified palette. Documented here per the brand
gate's "new colors have a stated purpose" requirement.

## 9. Typography

- **Montserrat** (variable, weights 400–800) — **verified**: this is the
  live site's actual body/heading/button/nav typeface, confirmed in its
  injected `@font-face`/dynamic CSS (`font-family:Montserrat` throughout
  headings, nav, buttons). Self-hosted locally at
  `assets/fonts/montserrat-variable.woff2` (fetched from
  `fonts.gstatic.com/s/montserrat/v31/...`, Google Fonts, SIL Open Font
  License) instead of calling Google Fonts at runtime, so the production
  page has no third-party font-loading dependency.
- **"OliverQuin"** — the live hero uses this custom/purchased script
  display font for the "Beyond Smiles…" tagline. It is not a verifiable
  open-license web font and could not be sourced or redistributed
  responsibly. Per the brand gate's "closest justified system-safe
  substitute" rule, this rebuild substitutes **Cormorant Garamond Italic**
  (Google Fonts, SIL OFL), a licensed elegant serif with a comparable
  editorial/script character, used only for the same two hero/statement
  headline moments the original reserved for its script font. Self-hosted
  at `assets/fonts/cormorant-garamond-italic-variable.woff2`.

## 10. Known live-site defects verified during this audit (basis for `proposal.html`)

Directly reproduced/confirmed from `prospect.json` and live inspection on
2026-07-17:

1. The floating WhatsApp widget button (`#floating-btn-open`,
   `.btn-whatsapp-convesion`) renders with **no functional href** in the
   live DOM — it depends entirely on a third-party inline script
   (`agenciaalper.com.br/codes/api/api.js`) to attach a click handler.
2. Every "Agendar consulta/avaliação" call-to-action across the home page
   (7+ occurrences) links only to the generic `/contato/` page — there is
   no treatment-aware or professional-aware scheduling path, and no direct,
   pre-filled WhatsApp deep link on the primary CTAs (only the footer
   WhatsApp link is a real `https://api.whatsapp.com/send?phone=...` URL).
3. The home page's `<head>` has no `<meta name="description">` and no
   detectable `<h1>` in the rendered DOM (confirmed by inspecting the raw
   HTML fetched 2026-07-17).
4. The four "CORPO CLÍNICO" team entries are duplicated in the DOM (a
   `.desktop` and a `.mobile` copy both render unconditionally in markup),
   and multiple content images lack `alt` text.
5. The `/contato/` page's contact form exposes an English-language
   developer artifact — "Please leave this field empty." (Contact Form 7
   honeypot label) — visibly in the rendered page twice; the home page
   hero simultaneously stacks a cookie-notice bar and a floating chat
   widget over the hero content.

These defects are **not reproduced** in `index.html`; they are the basis
for the three prioritized problems/improvements in `proposal.html`.

## 11. Omissions

- No pricing, financing, insurance/plan-acceptance claims are made — not
  published on the verified pages.
- No testimonials, reviews, before/after photos, awards, or outcome
  statistics are used — none were found on the verified pages, and none are
  invented.
- No individual doctor sub-pages were rebuilt (e.g.
  `/dra-flavia-kubrusly/`) — out of scope for this single-page rebuild;
  the "Sobre nós" navigation submenu instead anchors to each professional's
  card in the on-page team section.
