# Source Manifest — Centro Médico Trinità

All facts, copy, and imagery in `index.html` and `proposal.html` are sourced from the clinic's own official, public channels. Nothing below was fabricated. Research performed 2026-07-17.

## Primary sources consulted

| Source | URL | Used for |
|---|---|---|
| Official site | https://trinitacuritiba.com.br/ | Copy, structure, physician roster, specialties, colors, typography, logo, hero/interior imagery |
| Physician profile pages | https://trinitacuritiba.com.br/portfolio/`<slug>`/ (11 pages, listed below) | CRM numbers, individual specialties, bios (not reproduced verbatim in final bios — only CRM/specialty tags used) |
| Privacy policy | https://trinitacuritiba.com.br/politica-de-privacidade/ | Legal entity name, LGPD contact e-mail; **not used for address** (page shows outdated address, see Known Discrepancies below) |
| Doctoralia clinic profile | https://www.doctoralia.com.br/clinicas/centro-medico-trinita?saasonly=true | Cross-check of address, specialties, service count, verification that clinic actively uses Doctoralia scheduling |
| WhatsApp | https://wa.me/41992094863 (site) / tel:+5541992094863 (site footer) | Contact CTA |
| Instagram | https://www.instagram.com/clinica.trinita/ | Social link |
| prospect.json | (local, provided) | Business name, category, opportunity notes, evidence links list |

## Brand assets (downloaded to `assets/`)

| Local path | Source URL | Notes |
|---|---|---|
| `assets/brand/logo-trinita.png` | https://trinitacuritiba.com.br/site/wp-content/uploads/2024/04/clinica-trinita-marca.png | Current header logo (verified live, April 2024 upload) |
| `assets/brand/logo-trinita-footer.png` | https://trinitacuritiba.com.br/site/wp-content/uploads/2024/04/clinica-trinita-footer.png | Footer logo variant |
| `assets/brand/favicon-32.png` | .../uploads/2023/08/cropped-favicon-32x32.png | Favicon |
| `assets/brand/favicon-180.png` | .../uploads/2023/08/cropped-favicon-180x180.png | Apple touch icon |
| `assets/brand/favicon-192.png` | .../uploads/2023/08/cropped-favicon-192x192.png | Downloaded, not used in final markup (180/32 sufficed) |
| `assets/site/hero-slide-01.jpg` | .../uploads/2024/03/slide-01.jpg | Official hero/slider background — clinic interior |
| `assets/site/estrutura-01.jpeg` … `estrutura-06.jpeg` | .../uploads/2024/03/clinica-trinita-estrutura-0{1..6}.jpeg | Official interior photography (waiting room, corridor, consult room). 01/03/05 used in `index.html`; 02/04/06 downloaded but unused (kept for future rotation) |
| `assets/site/galeria-06.jpg` | .../uploads/2023/08/clinica-trinita-galeria-06.jpg | Downloaded, unused in final build |
| `assets/site/convenio-unimed.png` | .../uploads/2023/08/clinica-trinita-convenios-unimed.png | Insurance logo |
| `assets/site/convenio-jucimed.png` | .../uploads/2023/08/clinica-trinita-convenios-jucimed.png | Insurance logo. **Note:** file name says "jucimed" but the rendered logo text reads "Judicemed" — alt text and copy in this build use "Judicemed" to match the actual artwork, matching Doctoralia's "judicemed" listing |

## Physician photos (`assets/team/`) — all 11 currently displayed on the live site's active team grid

| File | Source | Physician | CRM | Portfolio page |
|---|---|---|---|---|
| `beatriz.jpg` | .../uploads/2023/08/clinica-trinita-equipe-beatriz-1.jpg | Dra. Beatriz Canhoto Carula | CRM 34850 | /portfolio/dra-beatriz-canhoto-carula/ |
| `camila.jpg` | .../uploads/2023/08/clinica-trinita-equipe-camila-1.jpg | Dra. Camila Deneka | CRM 26021 (clinical director) | /portfolio/dra-camila-deneka/ |
| `francisco.jpg` | .../uploads/2023/08/clinica-trinita-equipe-francisco-2.jpg | Dr. Francisco G. De Paula Kozovits | CRM 32129 | /portfolio/dr-francisco-g-de-paula-kozovits/ |
| `gabriel-bonato.jpg` | .../uploads/2023/08/clinica-trinita-equipe-gabriel-1.jpg | Dr. Gabriel Bonato Riffel | CRM 29460 | /portfolio/dr-gabriel-bonato-riffel/ |
| `gabriel-ribas.jpg` | .../uploads/2024/03/clinica-trinita-equipe-gabriel.jpg | Dr. Gabriel Ribas | CRM-PR 40176 / RQE 32035 | /portfolio/dr-gabriel-ribas/ |
| `gustavo.jpg` | .../uploads/2023/08/clinica-trinita-equipe-gustavo-1.jpg | Dr. Gustavo Yuiti K. Suzuki | CRM 37210 | /portfolio/dr-gustavo-yuiti-k-suzuki/ |
| `jandrey.jpg` | .../uploads/2024/03/clinica-trinita-equipe-jandrey.jpg | Dr. Jandrey Gasparin de Oliveira | CRM-PR 42589 / RQE 34335 | /portfolio/dr-jandrey-gasparin-de-oliveira/ |
| `marilia.jpg` | .../uploads/2023/08/clinica-trinita-equipe-marilia-1.jpg | Dra. Marília França M. Manfrinato | CRM 37468 | /portfolio/dra-marilia-franca-m-manfrinato/ |
| `marvin.jpg` | .../uploads/2023/08/clinica-trinita-equipe-marvin-2.jpg | Dr. Marvin Durante Brunet | CRM 35265 | /portfolio/dr-marvin-durante-brunet/ |
| `mateus.jpg` | .../uploads/2025/05/clinica-trinita-equipe-mateus.jpg | Dr. Mateus Strazzi Barreto | CRM-PR 41583 | /portfolio/dr-mateus-strazzi-barreto/ |
| `victor.jpg` | .../uploads/2025/05/clinica-trinita-equipe-victor.jpg | Dr. Victor Chueiri Genovesi | CRM-PR 038043 | /portfolio/dr-victor-chueiri-genovesi/ |

All base URLs share the prefix `https://trinitacuritiba.com.br/site/wp-content/`.

### Physician roster — verification method and uncertainty

The official homepage contains **two different physician lists** in its DOM:

1. A **live, currently rendered** portfolio grid (11 physicians, listed above) — confirmed both by a plain HTML fetch and by a full JS-rendered headless-browser observation on 2026-07-17.
2. A **legacy block** of team bios (different roster of 11 names, e.g. Dr. Guilherme Zandavalli Ramos, Dra. Juliana Boni Cruz, Dr. João Henrique, Dra. Mariana Fergutz Batista, Dra. Marina Polydoro) wrapped in CSS classes `tatsu-hide-0 tatsu-hide-mobile tatsu-hide-tablet tatsu-hide-laptop tatsu-hide-desktop` — i.e. **hidden at every breakpoint**, never visible to a real visitor. This matches `prospect.json`'s documented problem: "demo/legacy content present in the DOM but not immediately visible on screen."

**Decision:** only the 11 physicians from the *visible* portfolio grid (list 1) are included in `index.html`. The hidden legacy roster was treated as stale content and excluded — consistent with the mandate not to fabricate or misrepresent the current team. `prospect.json`'s note of "13 especialistas" on the Doctoralia widget could not be independently re-confirmed against the visible on-site count of 11; the build uses the verifiable count of 11 (matching the visible grid) rather than the unverified widget figure of 13.

## Facts used and their exact source

- **Business name:** "Centro Médico Trinità" — official site `<title>`, footer copyright, Doctoralia listing.
- **Address:** Rua Padre Anchieta, 2540, salas 1003 e 1004, Bigorrilho, CEP 80730-001, Curitiba – PR — sourced from the official site's **footer** and the site's own "novo endereço" popup, and cross-checked against Doctoralia ("Rua padre anchieta 2540 sala 1003/1004, Curitiba 80730000"). **Not** sourced from the privacy-policy page, which still shows the old address (Rua Padre Anchieta, 1691) — a known discrepancy on the live site, intentionally not reproduced here.
- **Phone / WhatsApp:** +55 41 99209-4863 — official site footer (`tel:+5541992094863`, `wa.me/41992094863`). This build formats the wa.me link with the full country code (`wa.me/5541992094863`) for reliability; the digits are unchanged from the source.
- **E-mail:** recepcao@trinitacuritiba.com.br — official site footer and privacy policy LGPD contact.
- **Specialties list (15 items):** verbatim from the official site's "Áreas de atuação" section (Cirurgia da mão, Cirurgia do joelho, Cirurgia do pé e tornozelo, Trauma e reconstrução óssea, Microcirurgia e reimplante, Mão pediátrica, Medicina da dor, Cirurgia Vascular, Cirurgia do ombro e cotovelo, Cirurgia do quadril, Geriatria, Cirurgia da coluna, Ortopedia Pediátrica, Clínica geral, Reumatologia).
- **Insurance/convênios:** Unimed and Judicemed — official site's "Convênios atendidos" carousel (image-based logos, downloaded).
- **Colors:** sampled directly from the official site's rendered CSS (`be-dynamic-css` inline block and header/button styles):
  - `rgba(60,87,80,1)` = `#3C5750` (primary green — used for header text, buttons, footer background) — retained exactly, documented as `--green-800` in `styles.css` (a deepened `--green-900` was added as a purposeful evolution for higher-contrast headings/footer).
  - `rgba(211,208,191,1)` = `#D3D0BF` (sand/accent — used for hero CTA background and button text) — retained exactly as `--sand-500`.
  - `rgba(248,248,245,1)` = `#F8F8F5` (section background) — evolved slightly warmer to `#F8F6F1` (`--paper`) as the stated deliberate color evolution.
  - `rgba(251,251,251,1)` = `#FBFBFB` (alternate section background) — retained as `--paper-alt`.
- **Typography:** "Montserrat" — confirmed as the exact font-family used site-wide in the official theme's generated `typehub-output` CSS (`font-family:"Montserrat",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,...`). This build uses the identical font stack, loaded via Google Fonts with the same system fallbacks as the original theme.
- **Headline/tagline language reused:** "O Centro Médico Trinità é formado por especialistas em diversas áreas da ortopedia, cirurgia da mão, geriatria, medicina da dor e clínica geral," "Um lugar sonhado e planejado para dar o melhor atendimento, com atenção, empatia, profissionalismo e respeito ao paciente," and "no coração do bairro Bigorrilho, com fácil acesso" — all verbatim/near-verbatim from the official homepage.

## Known discrepancies on the official live site (not reproduced in `index.html`)

These are documented in `prospect.json` and independently re-confirmed by this research pass; `proposal.html`'s appendix cites them as evidence, and `index.html` deliberately does **not** repeat them:

1. Address modal ("Atenção para nosso novo endereço") + GDPR cookie bar both auto-display on first load, stacking two barriers before any content is visible. Screenshot: `assets/proposal/current-site-hero-modal.png`, captured live 2026-07-17.
2. Residual WordPress demo-theme content ("A futuristic future ahead of you," "Why you need to buy right away?," "Premium Build," "Great Audio") present in the page DOM.
3. Institutional counters render only "+" and "%" symbols with no numeric values next to "CLIENTES ATENDIDOS" / "CLIENTES SATISFEITOS."
4. Privacy-policy page identifies the clinic at the old address (Rua Padre Anchieta, 1691) while the rest of the site (including the footer and the address modal) uses 2540.
5. `<meta name="viewport" ... user-scalable=no>` blocks pinch-zoom, an accessibility issue especially for older patients.

## Uncertainty / items intentionally omitted

- No patient counts, satisfaction percentages, awards, or outcome claims are stated anywhere in `index.html`, because the official site's own counters are unpopulated (see discrepancy #3) and no verifiable number could be sourced elsewhere. Where `index.html` shows a number (11 specialists, 15 areas of practice, 2 insurance partners), it is a literal count of the clinic's own published roster/list — not a performance metric.
- No physician bios/education history are reproduced in `index.html`; only name, CRM/RQE, and specialty tags are shown, all directly verifiable per-physician on the official portfolio pages listed above.
- Patient testimonials from the official site (and from Doctoralia) were **not** reproduced anywhere in this build (production or proposal), per the instruction not to fabricate/replicate patient outcome or satisfaction claims without independent verification of authenticity.
- Business hours are not stated on the official site's homepage in a structured way (only "consultas com horário mediante agendamento" implied via the scheduling widget); `index.html` therefore states only "Consultas com horário mediante agendamento por especialista" rather than inventing specific opening hours.
- CNPJ was not found on the public site; footer states it is available on request rather than fabricating a number.
