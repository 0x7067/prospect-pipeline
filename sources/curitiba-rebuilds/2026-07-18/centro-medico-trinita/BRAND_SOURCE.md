# Verified brand source

```json
{
  "logo_sources": [
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2024/04/clinica-trinita-marca.png",
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2024/04/clinica-trinita-footer.png"
  ],
  "colors": [
    "#3C5750 — sampled directly from the official site's rendered CSS (rgba(60,87,80,1)), used site-wide for header text, links, buttons, and footer background; retained exactly as the primary brand anchor.",
    "#D3D0BF — sampled directly from the official site's rendered CSS (rgba(211,208,191,1)), used for hero CTA background/button text; retained exactly as the secondary sand accent.",
    "#F8F8F5 — sampled directly from the official site's rendered CSS (rgba(248,248,245,1)), the section background; evolved slightly to #F8F6F1 as a deliberate, documented warm-paper evolution.",
    "#24352F — a deepened evolution of the brand green (not present verbatim on the source site) introduced only for higher-contrast headings/footer surfaces where pure #3C5750 on white would be visually flatter; documented here as an evolution, not a sourced value."
  ],
  "typography": "Montserrat — confirmed as the exact font-family used site-wide in the official theme's generated CSS (font-family:\"Montserrat\",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,...). Retain it; pair with a humanist companion only if a second voice is needed for long-form body copy.",
  "personality_words": [
    "calm",
    "specialist-led",
    "accessible"
  ],
  "strongest_public_language": [
    "O Centro Médico Trinità é formado por especialistas em diversas áreas da ortopedia, cirurgia da mão, geriatria, medicina da dor e clínica geral.",
    "Um lugar sonhado e planejado para dar o melhor atendimento, com atenção, empatia, profissionalismo e respeito ao paciente.",
    "no coração do bairro Bigorrilho, com fácil acesso"
  ],
  "services": [
    "Cirurgia da mão",
    "Cirurgia do joelho",
    "Cirurgia do pé e tornozelo",
    "Trauma e reconstrução óssea",
    "Microcirurgia e reimplante",
    "Mão pediátrica",
    "Medicina da dor",
    "Cirurgia vascular",
    "Cirurgia do ombro e cotovelo",
    "Cirurgia do quadril",
    "Geriatria",
    "Cirurgia da coluna",
    "Ortopedia pediátrica",
    "Clínica geral",
    "Reumatologia"
  ],
  "locations": [
    "Rua Padre Anchieta, 2540, salas 1003 e 1004, Bigorrilho, CEP 80730-001, Curitiba — PR (current, footer + address modal + Doctoralia cross-check)"
  ],
  "contacts": [
    "+55 41 99209-4863 (tel / WhatsApp, official footer)",
    "recepcao@trinitacuritiba.com.br (official footer + privacy policy LGPD contact)"
  ],
  "visual_assets": [
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2024/03/slide-01.jpg",
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2024/03/clinica-trinita-estrutura-01.jpeg",
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2024/03/clinica-trinita-estrutura-03.jpeg",
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2024/03/clinica-trinita-estrutura-05.jpeg",
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2023/08/clinica-trinita-convenios-unimed.png",
    "https://trinitacuritiba.com.br/site/wp-content/uploads/2023/08/clinica-trinita-convenios-jucimed.png"
  ],
  "original_screenshots": {
    "note": "Live browser captures of the official site were not saved as local files in this build; the DOM/CSS/network evidence above was independently re-fetched and re-verified on 2026-07-18 (HTTP 200 on every cited URL) in place of stored screenshots."
  },
  "equity_to_preserve": [
    "the verified 'especialistas em diversas áreas' positioning",
    "the 11 currently-visible, individually verifiable physicians with real CRM/RQE numbers",
    "the Bigorrilho location and 'fácil acesso' framing",
    "the Montserrat typeface and green/sand palette",
    "the Doctoralia scheduling integration and WhatsApp contact"
  ],
  "weaknesses_not_to_copy": [
    "WordPress demo-theme filler content ('A futuristic future ahead of you', 'Premium Build', 'Great Audio') present in the DOM",
    "a blocking 'novo endereço' modal stacked with a cookie bar on first load",
    "an empty layout gap before the specialties section",
    "unpopulated '+' / '%' counters with no numbers",
    "a privacy-policy page still citing the old address (Rua Padre Anchieta, 1691) while the rest of the site uses 2540",
    "user-scalable=no blocking pinch-zoom"
  ]
}
```

## Physician roster — verification method and uncertainty

The official homepage's DOM contains **two different physician lists**:

1. A **live, currently rendered** portfolio grid of 11 physicians (below) — confirmed on 2026-07-18 by a plain HTTPS fetch (`curl`) and cross-checked against each physician's individual portfolio page (`https://trinitacuritiba.com.br/portfolio/<slug>/`, all HTTP 200 on 2026-07-18).
2. A **legacy block** of a different 11-name roster (e.g. Dr. Guilherme Zandavalli Ramos, Dra. Juliana Boni Cruz, Dr. João Henrique, Dra. Mariana Fergutz Batista, Dra. Marina Polydoro), wrapped in CSS classes `tatsu-hide-0 tatsu-hide-mobile tatsu-hide-tablet tatsu-hide-laptop tatsu-hide-desktop` — hidden at every breakpoint, confirmed present but never visible to a real visitor. This independently reconfirms `prospect.json`'s documented problem of demo/legacy content sitting in the DOM.

**Decision:** only the 11 physicians from the visible portfolio grid are used. The hidden legacy roster is excluded as stale content, consistent with the instruction not to fabricate or misrepresent the current team. `prospect.json`'s note of "13 especialistas" on the Doctoralia widget could not be independently re-confirmed as a literal on-page count; the build uses the verifiable count of 11 (the visible grid), not the unconfirmed widget figure.

| Physician | CRM / RQE | Specialty tags (verified per-physician page) | Photo source |
|---|---|---|---|
| Dra. Camila Deneka | CRM 26021 · diretora clínica | Ortopedia e Traumatologia, Cirurgia da Mão, Cirurgia da Mão Pediátrica | `.../2023/08/clinica-trinita-equipe-camila-1.jpg` |
| Dra. Beatriz Canhoto Carula | CRM 34850 | Ortopedia e Traumatologia, Cirurgia da Mão (microcirurgia/reimplante per bio) | `.../2023/08/clinica-trinita-equipe-beatriz-1.jpg` |
| Dr. Francisco G. De Paula Kozovits | CRM 32129 | Ortopedia e Traumatologia, Ortopedia Pediátrica | `.../2023/08/clinica-trinita-equipe-francisco-2.jpg` |
| Dr. Gabriel Bonato Riffel | CRM 29460 | Ortopedia e Traumatologia, Cirurgia do Ombro e Cotovelo | `.../2023/08/clinica-trinita-equipe-gabriel-1.jpg` |
| Dr. Gabriel Ribas | CRM-PR 40176 · RQE 32035 | Ortopedia e Traumatologia, Ortopedia Pediátrica | `.../2024/03/clinica-trinita-equipe-gabriel.jpg` |
| Dr. Gustavo Yuiti K. Suzuki | CRM 37210 | Ortopedia e Traumatologia, Cirurgia do Quadril | `.../2023/08/clinica-trinita-equipe-gustavo-1.jpg` |
| Dr. Jandrey Gasparin de Oliveira | CRM-PR 42589 · RQE 34335 | Geriatria | `.../2024/03/clinica-trinita-equipe-jandrey.jpg` |
| Dra. Marília França M. Manfrinato | CRM 37468 | Ortopedia e Traumatologia, Cirurgia do Pé e Tornozelo, Tratamento de Feridas | `.../2023/08/clinica-trinita-equipe-marilia-1.jpg` |
| Dr. Marvin Durante Brunet | CRM 35265 | Ortopedia e Traumatologia, Cirurgia do Joelho, Artroscopia de Joelho | `.../2023/08/clinica-trinita-equipe-marvin-2.jpg` |
| Dr. Mateus Strazzi Barreto | CRM-PR 41583 | Ortopedia e Traumatologia, Cirurgia do Ombro e Cotovelo | `.../2025/05/clinica-trinita-equipe-mateus.jpg` |
| Dr. Victor Chueiri Genovesi | CRM-PR 038043 | Ortopedia e Traumatologia, Cirurgia do Quadril | `.../2025/05/clinica-trinita-equipe-victor.jpg` |

All photo base URLs share the prefix `https://trinitacuritiba.com.br/site/wp-content/uploads/`.

## Additional independently re-verified facts (2026-07-18)

- **Viewport lock reconfirmed:** `<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />` is present in the current page source.
- **Privacy-policy address discrepancy reconfirmed:** `politica-de-privacidade` states "Padre Anchieta, 1691 – sala 1906 – Bigorrilho – Curitiba – PR – 80730-000" while the homepage footer and address modal state "Rua Padre Anchieta, 2540".
- **Unpopulated counters reconfirmed:** the homepage renders `+` and `%` prefix/suffix symbols next to "CLIENTES ATENDIDOS" and "CLIENTES SATISFEITOS" captions with an animated counter target (`data-number="2500"` in the DOM for one block) that is not disclosed anywhere as a real, sourceable statistic; excluded from this build entirely per the no-fabrication mandate.
- **Convênio naming:** the downloaded asset file name reads "jucimed" but the rendered artwork and the Doctoralia listing both read "Judicemed"; this build's copy and alt text use "Judicemed" to match the actual rendered brand name, consistent with the prior build's documented decision.
- **CNPJ:** not published anywhere on the official site; not stated in this build.
- **Business hours:** not stated in structured form anywhere on the official site (only "consultas com horário mediante agendamento" implied via the scheduling widget); this build states only that scheduling is by specialist appointment, never a fabricated hours table.
