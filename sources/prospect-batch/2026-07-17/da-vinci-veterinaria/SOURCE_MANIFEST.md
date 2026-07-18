# Source Manifest — Da Vinci Clínica Veterinária 24h

All facts, copy, and imagery below are sourced from the clinic's own live official channels or the
third-party local guide already cited in `prospect.json`. No veterinarian, credential, statistic,
testimonial, outcome, or guarantee was invented. Where the record is genuinely contradictory
(the phone/WhatsApp numbers), the contradiction is documented rather than resolved by guessing.

Research performed 2026-07-17 (America/Sao_Paulo), direct HTTP fetch + rendered browser check
(Playwright, Chromium) of the live site.

## 1. Identity & legal facts

| Fact | Value | Source |
|---|---|---|
| Legal/trading name | Da Vinci Clínica Veterinária 24h | `https://www.veterinariadavinci.com.br/` `<title>` and logo alt text |
| CNPJ | 25.293.495/0001-15 | Footer, every page (e.g. `https://www.veterinariadavinci.com.br/servicos`, view-source) |
| Address | Rua Tapajós, 260 — São Francisco/Mercês, Curitiba/PR | Site footer address block + Google Maps link embedded in footer (`https://www.google.com.br/maps/place/Cl%C3%ADnica+Veterin%C3%A1ria+Da+Vinci+24h/...`) |
| Email | contato@veterinariadavinci.com.br | Site footer, all pages |
| Hours — clinic/emergency | 24 horas, todos os dias (segunda a domingo, inclusive feriados) | Footer "A Clínica Da Vinci funciona nos seguintes horários" block; `outros-servicos/pronto-atendimento-24h` ("Todos os dias, 24 horas!") |
| Hours — Banho e Tosa Climatizado | Segunda a sexta 9h–18h · Sábado 9h–17h | Site footer hours block |
| Responsible veterinarian | Dra. Fernanda Zimmermann Callegari, especialista em Cirurgia de Pequenos Animais, CRMV-PR 10568 | `https://www.veterinariadavinci.com.br/a-clinica` |
| Social channels | Facebook `facebook.com/veterinariadavinci`, Instagram `instagram.com/veterinariadavinci` | Header/footer icon links, all pages |

## 2. Phone / WhatsApp — the documented contradiction

The brief's flag is confirmed. The live site is internally inconsistent about the WhatsApp number:

- **Header, desktop breakpoint (`visible-md`/`visible-lg`)** — phone `tel:+4130162606` labelled
  "41 3016-2606" AND a WhatsApp link `https://wa.me/554130162606` labelled "41 3016-2606"
  (the *same* number used for both). Source: `view-source` of `/servicos` and `/`, `<li class="hidden-sm"><p class="wts">`.
- **Header, tablet breakpoint (`visible-sm`, no href, plain text)** — phone text "41 3016-2606" and
  a *second, different* WhatsApp-labelled text "41 9663-0331" with **no `<a href>` at all** — it is
  unlinked, static text. Source: same view-source, `<div class="visible-sm">` block.
- **Top utility bar** (`#sp-outup`, shown site-wide above the header) — `tel:+554130162606` and
  `https://wa.me/554130162606`, again the same number for both. Source: same view-source.
- **Footer** (every page) — `tel:+554130162606` and `https://wa.me/554130162606`, again the same
  number for both, plus a fixed floating WhatsApp button also pointing at
  `https://wa.me/554130162606`. Source: `/servicos` footer markup.
- **Live rendered page** (Chromium, `https://www.veterinariadavinci.com.br/`, checked
  2026-07-17): both the header phone link and header WhatsApp link render as "41 3016-2606" —
  the tablet-only unlinked "9663-0331" variant was not visible at the desktop/mobile widths
  actually rendered.

**Decision:** every *functional, clickable* contact affordance on the live site — desktop header,
top bar, footer, and the floating WhatsApp button — resolves to **(41) 3016-2606** for both voice
calls (`tel:+554130162606`) and WhatsApp (`https://wa.me/554130162606`). The "(41) 9663-0331"
string appears exactly once, as unlinked plain text in a tablet-only header variant, and does not
match any working link on the site. Treating it as authoritative would mean shipping a number the
clinic's own site does not actually dial out to. This build therefore uses **(41) 3016-2606** as
the single, unambiguous phone AND WhatsApp number throughout, and this manifest records the
"9663-0331" sighting so a human reviewer can flag it back to the clinic — it is not used anywhere
in `index.html` or `proposal.html`.

## 3. Services / journeys (verbatim structure, not invented)

Source: `https://www.veterinariadavinci.com.br/servicos` (service list) plus each linked service page.

- **Pronto Atendimento 24h** — "Nossos profissionais estão à disposição 24 horas por dia, todos os
  dias, inclusive aos domingos e feriados, prontos para atender a qualquer emergência." Source:
  `outros-servicos/pronto-atendimento-24h`.
- **Internamento e Isolamento** — "Temos veterinários competentes para acompanhar o estado de
  saúde do seu pet durante 24 horas em um ambiente limpo, confortável... salas são climatizadas e
  a alimentação é oferecida com produtos da melhor qualidade." Source:
  `outros-servicos/internamento-e-isolamento`.
- **Consultas, Diagnóstico por Imagem, Exames, Vacinação, Microchipagem** — listed as distinct
  "Outros Serviços" on `/servicos`.
- **Especialidades (13)** — Acupuntura, Anestesiologia, Cardiologia, Dermatologia,
  Endocrinologia, Fisioterapia, Medicina Felina, Neurologia, Nutrição, Odontologia,
  Oftalmologia, Oncologia, Ortopedia. Source: `/servicos` and home page mega-menu.
- **Cirurgias (6)** — Castração, Ortopédica, Oftálmica, Tecidos Moles, Oncológica,
  Neurocirurgia. Source: `/servicos`.
- **Banho e Tosa Climatizado (elective, explicitly not 24h)** — "ambiente é climatizado, as
  toalhas são individuais e esterilizadas, e a água tem a temperatura regulável"; loyalty detail:
  "A cada 10 visitas, seu pet ganha um banho e uma tosa higiênica." Hours Mon–Fri 9–18, Sat 9–17
  (see §1). Source: `/banho-e-tosa-climatizado`.
- **Leva e Traz** — "Um serviço de transporte especial em um veículo equipado e seguro" for pets
  who can't be brought in by the tutor. Source: `/banho-e-tosa-climatizado` and home page.
- **Centro de Imunização** — "Exclusivo para vacinação, contém uma unidade conservadora de vacinas
  com controle de temperatura." Source: home page.
- **Diferenciais** (used as trust icons) — Plantão 24h, Especialistas qualificados, Estrutura
  completa, Monitoração por câmeras, Estacionamento próprio. Source: home page + `/a-clinica`.

## 4. Testimonials (published verbatim on the official site — not invented)

- "Meu amigão Luke foi tratado como um rei. Equipe ultra carinhosa, paciente e profissional. Agora
  o garoto está bonito e cheirosão." — **Everton Facundes Telles**. Source: home page and
  `/banho-e-tosa-climatizado`.
- "Minha gatinha encontra na Da Vinci o carinho de uma equipe selecionada, com profissionais que
  sempre inovam. É tecnologia avançada em todos os segmentos. A Da Vinci traz muita tranquilidade
  a pessoas como eu, que amam seus bichinhos." — **Fabiana Almeida Gomes de Sá**, "Cliente da
  Clínica Da Vinci". Source: home page.

Both are reproduced verbatim with the same attributed names published by the clinic. No new
testimonial was written.

## 5. Third-party review signal (not first-party — labelled as such on-page)

- Google rating **4,5 / 5** from **199 avaliações**, and the same address, reproduced by a local
  Curitiba business guide. Source: `https://guiaemcuritiba.com.br/sao-francisco/da-vinci-clinica-veterinaria-24-horas-caes-e-gatos`
  (also listed in `prospect.json.evidence_links`). This is presented on-site as "avaliações no
  Google, via guiaemcuritiba.com.br" — never claimed as a first-party clinic statistic, and no
  individual third-party review quote is reproduced (some visible reviews there are negative and
  operational, e.g. about internamento communication delays; using only the aggregate
  rating/count avoids selectively laundering anecdotal reviews as clinic-authored praise).

## 6. Documented current-site problems (verified independently, matches `prospect.json.problems`)

Screenshots captured 2026-07-17 with Chromium/Playwright, saved under `assets/evidence/`:
- `official-site-desktop-fullpage.png` (1280w, full page)
- `official-site-desktop-1440-viewport.png` (1440×900 viewport)
- `official-site-mobile-viewport.png` / `official-site-mobile-fullpage.png` (390×844, `isMobile:true`)

Confirmed defects visible in these captures:
1. The hero/primary visual real estate on load promotes "Banho e Tosa Climatizado", not the 24h
   emergency positioning the clinic actually sells itself on.
2. A large, low-content pale-green blank band sits between the "Mais Serviços" list and the blog
   teaser section (visible ~y:1650–1850 in `official-site-desktop-fullpage.png`), with a
   testimonial rendered in low-contrast light text on a near-white background directly above it.
3. Phone/WhatsApp contradiction — see §2.
4. The three "As melhores do Blog" teaser posts are all dated **18/05/2016** — over nine years
   stale at the time of this build. Source: home page rendered HTML.
5. No dedicated triage/journey path exists from the homepage for "this is an emergency" vs. "I
   want to book a routine visit" vs. "I want grooming" — every service card links to the same
   generic `Fale Conosco` contact page.

## 7. Brand-source prerequisite (Style Gate §1)

- **Logo variants (official, downloaded):** `assets/images/logo-davinci-primary.png` (313×111,
  from `/images/stories/conteudo/logo-clinica-veterinaria-da-vinci-curitiba.png`),
  `logo-davinci-fixed.png` (sticky-header variant), `logo-davinci-responsive.png` (mobile mark).
- **Colors sampled from verified brand assets (measured via Pillow pixel histogram on the
  downloaded official logo/icon PNGs):**
  - `#899163` — dominant olive-sage green in the wordmark (logo-davinci-primary.png, 5179/… pixel
    plurality).
  - `#8ca149` / `#92a457` — brighter leaf-green used in the site's own line icons
    (icon-plantao-24h.png, icon-especialistas.png).
  - `#231f20` — near-black charcoal used for the wordmark's dark strokes.
  - `#b8bda1` — light sage/khaki neutral, secondary logo tone.
  - `#849338` — olive-green background fill sampled from the "A Clínica" structure photo panel
    (a-clinica-hero.png).
  These four/five sampled values are the retained palette. One new color was added and is
  explicitly *not* sampled from the brand: an emergency brick-red (`#b8391f`), introduced
  because the clinic's existing palette has no urgency color at all, and the #1 documented
  problem is weak emergency conversion — see rationale in the Concept section below. (This
  value is intentionally scoped to `--color-emergency` in `styles.css` and used only for the
  call-now CTA family — never decoratively.)
- **Typography:** the official template already loads Cabin, Montserrat and Open Sans from
  Google Fonts (`templates/shaper_helix3/css/template.css`, `@import url(...family=Cabin...)`
  etc.). This build reuses **Cabin** (rounded, warm, already the brand's own display choice) for
  headings and **Open Sans** (already the brand's own body choice) for body copy — no new
  typeface family was introduced.
- **Three words for current visual personality:** *dated, cluttered, softened* (soft rounded
  circular photo crops and pastel greens undercut by a 2016-era Joomla template, cramped nav, and
  the blank-band/low-contrast defects in §6).
- **Strongest existing published headline:** "Atendimento médico personalizado, com respeito e
  qualidade." (home page `<h1>`) — reused verbatim as the emotional anchor of the new hero
  subhead, source-bounded rather than invented.
- **Verified services/locations/contacts:** see §1–§3.
- **Minimum visual asset set:** hero (`hero-fundo-escuro.jpg`, the clinic's own dark editorial
  background image) + at least three usable interior photos — this build uses twelve real interior
  photographs (`facility-*.jpg`: recepção, consultório, centro cirúrgico, internamento×2,
  isolamento, farmácia, estacionamento, banho e tosa×2, centro de imunização×2, circulação),
  all downloaded from `/images/stories/conteudo/clinica/` on the official site.
- **Project names/proof signals:** the two named testimonials in §4 and the aggregate Google
  rating in §5.
- **Desktop and mobile screenshots of the original:** see §6, `assets/evidence/`.
- **Brand equity to preserve vs. weaknesses not to copy:** preserve the olive/sage palette, Cabin
  display type, circular/organic photo-crop motif (used throughout the original for icons and the
  testimonial photo), and the real interior photography. Do not copy: the banho-e-tosa-first hero,
  the blank low-content band, the low-contrast testimonial, the contact-number contradiction, the
  2016-dated blog teasers, or the lack of an emergency-first conversion path.

## 8. Concept thesis (Style Gate §2)

> "This concept can only belong to **Da Vinci Clínica Veterinária 24h** because it takes the
> clinic's *own* olive-and-charcoal identity, its *own* circular photo-crop motif, its *own*
> real facility photography and its *own* published headline — and re-sequences them around the
> one verified fact the current site buries: that a tutor in crisis at 3am can call this exact
> clinic, at this exact address, right now."

- **Compositional idea:** an unmistakable, persistent two-line contact bar (call + WhatsApp) that
  never leaves the viewport on mobile, paired with a hero that leads with the clinic's own
  dramatic dark facility photo rather than a grooming promotion.
- **Typographic idea:** Cabin (already the brand's display face) set in confident uppercase for
  section labels — matching the original's own uppercase tracked micro-labels — paired with Open
  Sans body, both already brand-published choices, not new picks.
- **Image-treatment rule:** every facility photo keeps the original's own circular/organic crop
  language (seen in the original's line icons and testimonial photo) at transitions between
  sections, so the "circle" reads as a Da Vinci signature shape rather than a random UI flourish.
- **Color evolution:** retain the olive/sage/charcoal palette as-is for brand and elective
  (grooming) moments; add exactly one new, tightly-scoped emergency brick-red (`#b8391f`) used
  only for the call-now CTA family, so urgency is legible against a palette that otherwise has
  none.
- **Emotional promise (source-bounded):** "Atendimento médico personalizado, com respeito e
  qualidade" (the clinic's own headline) reframed for the moment tutors actually arrive in a
  crisis, without inventing new claims about outcomes, awards, or staff not already published.
- **Conversion path:** one persistent call/WhatsApp affordance plus an explicit triage section
  (emergência / consulta / internação / banho e tosa) replacing the current "everything funnels to
  a generic contact form" pattern.

## 9. What was deliberately NOT included

- No invented veterinarian besides the one named, credentialed professional actually published
  (Dra. Fernanda Zimmermann Callegari, CRMV-PR 10568).
- No fabricated equipment list, award, certification, or "since [year]" founding claim — none of
  these are published on the official site, so none appear here.
- No fabricated statistics beyond the third-party-attributed Google rating in §5.
- No individual negative or operational third-party review text reproduced (aggregate rating only,
  clearly attributed to guiaemcuritiba.com.br).
- No stale blog content — the 2016-dated posts are not reproduced or referenced as current.
- No use of the "(41) 9663-0331" number anywhere in either deliverable — see §2.

## 10. Asset provenance index

All files in `assets/images/` were downloaded directly from `www.veterinariadavinci.com.br`
(official domain) on 2026-07-17 via direct HTTPS GET, byte-for-byte as published. See filenames
for original-content mapping (e.g. `facility-internamento-01.jpg` ← `/images/stories/conteudo/clinica/clinica_10.jpg`,
alt text "Estrutura Clínica Veterinária Da Vinci - Curitiba" / caption "Internamento").
`assets/evidence/` screenshots were captured by this build directly, not sourced from a third
party.
