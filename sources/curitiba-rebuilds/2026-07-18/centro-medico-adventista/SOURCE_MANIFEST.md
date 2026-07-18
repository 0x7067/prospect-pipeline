# Source manifest

Every business-specific claim, name, number, image, and contact channel used in this build is traceable to one of the sources below. Nothing outside this manifest was used to support a claim about Centro Médico Adventista | Curitiba.

## Primary evidence file

- `prospect.json` (this directory) — business name, opportunity score, documented problems, rebuild angle, concept thesis/rules, active evidence statement, evidence links, brand_source block (logo/colors/typography/personality/strongest public language/services/locations/contacts/visual assets/original screenshots/equity to preserve/weaknesses not to copy), deliverable tier.

## Independently re-verified sources (re-fetched 2026-07-18, all HTTP 200)

| # | Source | What it verified |
|---|---|---|
| 1 | `https://curitiba.clinicaadventista.org.br/` (official homepage) | Business name ("Centro Médico Adventista \| Curitiba"), strongest public language verbatim ("Agende aqui suas consultas, exames e procedimentos.", "Atendemos mais de 24 convênios.", "Nossas unidades atendem a mais de 30 especialidades médicas."), the "ESPECIALIDADES / CONVÊNIOS / PROFISSIONAIS" duplicated-navigation pattern, generic "Clique Aqui"/"Acessar" CTA language, both unit addresses and hours in the footer widget area, phone (41) 3240-2900 and email curitiba@clinicaadventista.org.br, the WhatsApp link `https://api.whatsapp.com/send?phone=554132402900`, three published news/wellness article thumbnails and captions ("4 dicas para se tornar vegetariano", "Respire fundo", "Vida iluminada"), the medical director line ("Diretor Técnico-Médico: Dr. Felipe Calderon Scarin \| CRM-PR 51954"), and the presence of legacy `http://` asset URLs (e.g. `og:image`, footer logo images) alongside the HTTPS page itself. |
| 2 | `https://curitiba.clinicaadventista.org.br/especialidades/` (page 1 of a paginated 3-page index) | 15 named specialties with individual descriptions on this page alone: Alergia e Imunologia, Análises Clínicas, Angiologia, Cardiologia, Cirurgia Geral, Cirurgia Plástica, Cirurgia Vascular, Clínica Médica, Coloproctologia, Dermatologia, Ecocardiografia, Endocrinologia e Metabologia, Fonoaudiologia, Gastroenterologia, Geriatria. |
| 3 | `https://curitiba.clinicaadventista.org.br/convenios/` | Confirms the convênios page exists and its own meta description ("Atendemos uma serie de convênios, entre em contatos e faça uma avaliação."). No literal list of individual convênio/insurer names was recoverable from the rendered page content available to this build; the aggregate claim ("mais de 24 convênios") is used as-is and no invented insurer names are presented anywhere in this build. |
| 4 | `https://curitiba.clinicaadventista.org.br/profissionais/` | Full visible professional roster with named specialties, used to independently corroborate 13 additional specialty names beyond the especialidades page-1 list: Ginecologia, Psiquiatria, Mastologia, Neurologia, Pediatria, Nefrologia, Reumatologia, Oncologia, Infectologia, Nutrição, Psicologia, Oftalmologia, Urologia. Combined with source #2, this yields the 28-specialty index used in this build (`script.js`). This is a documented floor, not a claim of completeness — see the code comment in `script.js` and the note in `proposal.html`. |
| 5 | `https://curitiba.clinicaadventista.org.br/exames-e-procedimento/` | Confirms the exams/procedures page exists (used only as the evidence-link citation for the "resultado de exames" journey step; no specific exam list is presented as a claim in this build). |
| 6 | `https://api.whatsapp.com/send?phone=554132402900` | WhatsApp appointment channel resolves as a real, publicly-published link; used as-is (with a message-prefill parameter added client-side) as the single primary conversion channel throughout. |
| 7 | `https://curitiba.clinicaadventista.org.br/wp-content/uploads/2019/08/Logo_principal.png` | Official logo file downloaded directly from the clinic's own published asset path; used unmodified as the site/nav/footer logo (`assets/brand/logo-principal.png`). |
| 8 | `https://curitiba.clinicaadventista.org.br/wp-content/uploads/2022/03/9-4-dicas_para_se_tornar_vegetariano-site.jpg` | Editorial photograph downloaded directly from the clinic's own published asset path (`assets/site/vida-vegetariana.jpg`), used with the documented image-treatment rule (see DESIGN.md). |
| 9 | `https://curitiba.clinicaadventista.org.br/wp-content/uploads/2022/03/8-respire_fundo-site.jpg` | Editorial photograph downloaded directly from the clinic's own published asset path (`assets/site/respire-fundo.jpg`). |
| 10 | `https://curitiba.clinicaadventista.org.br/wp-content/uploads/2022/03/7-vida_iluminada-site.jpg` | Editorial photograph downloaded directly from the clinic's own published asset path (`assets/site/vida-iluminada.jpg`). |
| 11 | Google Maps links published in the official footer (`https://goo.gl/maps/NX2PzBfAmX2zyRok8`, `https://goo.gl/maps/t4qoNrCr6K7NcgRB8`) | Used unmodified as the two "Como chegar" links, one per unit — the clinic's own existing map links, not a new mapping integration. |

## Facts NOT used (explicitly excluded per no-fabrication mandate)

- Any individual convênio/insurer name — no literal name list was independently re-verifiable from the rendered convênios page content available to this build. Only the aggregate claim ("mais de 24 convênios") is used.
- Any physician photo, biography, or outcome claim — `prospect.json`'s concept rules explicitly forbid invented physician portraits or outcomes; this build shows no individual physician profiles.
- Patient counts, satisfaction percentages, awards, testimonials, or performance statistics — none appear anywhere in the supplied evidence, so none are claimed.
- CNPJ, structured legal/registration details beyond the medical director's own published CRM line.
- A complete specialty count beyond the 28 independently corroborated names — the site's own "mais de 30" aggregate claim is preserved verbatim rather than being replaced with a fabricated complete list.
- The legacy HTTP asset links and PHP 5.6 technical signature documented in `prospect.json.problems` — these are cited only as the rebuild rationale in `proposal.html`/`SITE_REVIEW.md`, never reproduced as functional links in the production build.

## Visual assets

All photography and the logo file under `assets/` are sourced from the official site's own `wp-content/uploads/` paths, listed above and in `prospect.json.brand_source.visual_assets`. No stock photography and no generated imagery were used anywhere in this build.

## Full detail

See `BRAND_SOURCE.md` in this directory for the original verified brand-source JSON and `DESIGN.md` for the complete design-system rationale (palette computation, typography selection, image-treatment rule, concept rules).
