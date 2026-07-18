# Design System: Refúgio Legível

<!-- Implemented by Impeccable craft, replacing the seed scaffold with the evidence-bounded system actually shipped. -->

## Overview

Creative North Star: Este conceito só pode pertencer à Pousada Betânia porque transforma o contraste comprovado entre proximidade urbana, bosque, capela, hospitalidade e eventos em uma experiência de refúgio legível, não em um template de hotel.

Compositional idea: a **entrada em três caminhos** — Hospedar, Reunir, Descansar — replaces the original's long anchor-nav list of undifferentiated service blocks. Each path gets its own compositional moment (image + promise + relevant CTA) before any secondary service listing appears.

## Colors

All four colors are carried forward unchanged from `BRAND_SOURCE.md` observed values, plus one deliberate evolution:

| Token | Hex | Source | Usage |
|---|---|---|---|
| `--ink` | `#000000` | observed dominant color | headings, primary text on light surfaces |
| `--paper` | `#FFFFFF` | implied by observed near-white surface | primary background |
| `--surface` | `#F5F5F5` | observed neutral background | alternating section background |
| `--text-muted` | `#666666` | darkened from observed `#737373` | body copy on `--surface` tint, restores 4.5:1 AA (raw `#737373` measures 4.35:1 on `#F5F5F5`, just under threshold) |
| `--text-muted-on-paper` | `#737373` | observed exactly | body copy on `--paper` (4.74:1 AA, passes unmodified) |
| `--accent` | `#5EBB11` | observed accent green | CTA fills, icons, dividers, nature/path markers — never used as small text on a light background (raw pairing measures 2.44:1) |
| `--accent-ink` | `#3D7A0A` | darkened from `--accent`, same hue/saturation, lower lightness | accent used as text/link color where AA is required (5.27:1 on white) |
| `--ink-deep` (new, deliberate evolution) | `#11180C` | derived: same hue family as `--accent`, near-black lightness | hero scrim and footer — ties the "deep bosque at dusk" reading to the brand's own green rather than a generic neutral black |

Rationale for the one evolution: the brief documents black, gray, green and a neutral background — but using pure `#000000` as a large photographic overlay flattens the forest photography the brand is built on. `--ink-deep` is not a new brand color; it is `--accent`'s own hue pulled to near-black, so overlays and the footer still read as "this brand's green world after dark," not a stock dark mode.

## Typography

Brand evidence: "Arial/Helvetica, Brandon Grot e pequenos usos de Georgia/Didot; usar Brandon Grot para títulos acolhedores e Arial para dados/reserva."

Brandon Grotesque is a commercial HVD Fonts release with no free/self-hostable distribution; it cannot be licensed or fabricated inside this build. Georgia/Didot are described as "pequenos usos" (minor accents), not a system pillar, so they are not carried forward as a second display face.

Substitution, preserving the documented **contrast between a warm welcoming display face and a plain operational face**:

- **Display / headings — Jost.** A geometric-humanist sans with the same rounded, warm-but-confident geometry Brandon Grotesque is known for (circular bowls, single-story forms, generous x-height). Used for H1–H3, path names, and section titles.
- **Body / operational data — Public Sans.** A plain, neutral grotesk built for dense civic/operational information (the same role Arial plays in the observed source: reservation details, addresses, phone numbers, nav labels, body copy). Used for all running text, forms-adjacent data, and UI chrome.

Both are self-hosted-equivalent via Google Fonts `swap` loading, WCAG AA body copy throughout, and neither appears on Impeccable's overused-font list (which flags Arial/Helvetica/Inter/Roboto/Montserrat directly) nor its brand-register reflex-reject list.

Scale: fluid `clamp()` modular scale, ratio ≥ 1.25 between steps, `text-wrap: balance` on headings.

## Elevation

Flat by default. No card shadows, no glassmorphism. The only elevation cue is a 1px hairline rule or a background-color shift between `--paper` and `--surface`. Photography carries visual weight instead of drop shadows.

## Concept rules

1. **Composição:** entrada em três caminhos — Hospedar, Reunir, Descansar — antes de qualquer lista de serviços secundária.
2. **Tipografia:** Jost (títulos acolhedores) × Public Sans (dados/reserva), preservando o contraste documentado entre a face convidativa e a face operacional.
3. **Imagem:** as três fotografias verificadas (fachada, quarto com vista para o bosque, convívio em família no bosque) são usadas em recortes verticais de escala humana — nunca miniaturas — uma por caminho.
4. **Cor:** preto, cinza e verde observados são preservados; a única evolução é `--ink-deep`, a mesma família de matiz do verde levada a quase-preto, usada apenas em overlay de hero e rodapé.
5. **Promessa:** apenas "conforto", "aconchego", "contato com a natureza", localização e serviços publicados — nenhuma métrica, prêmio ou depoimento não verificado.
6. **Conversão:** reserva Omnibees e WhatsApp (bit.ly/faleconoscoieb) como ações primárias repetidas em cada caminho relevante; telefone/e-mail/endereço reunidos em uma área de contato curta, sem formulário longo.

## Components

Semantic HTML5 landmarks, visible `:focus-visible` rings using `--accent-ink`, 44×44px minimum touch targets, inert demo actions only (no submitted forms), mobile nav with proper `aria-expanded` state. Production site (`index.html`) and the independent sales document (`proposal.html`) are fully separate; `rationale.html` performs only a compatible redirect to `proposal.html`.

## Do's and Don'ts

**Do** tailor the three-path structure specifically to Pousada Betânia's documented mix of hospedagem, eventos corporativos/retiros, and bosque/lazer. **Do** fix the mobile overflow the evidence identifies (390px viewport, 980px scrollWidth) with a mobile-first fluid layout with no fixed-width elements.

**Don't** copy the original Wix template's anchor-heavy single-page structure, its thumbnail gallery grid, or its long unstructured contact form. **Don't** invent guest counts, awards, ratings, room names/prices, or staff not present in the evidence. **Don't** use Arial/Helvetica literally (both are on the detector's overused-font list) or a stock "hotel template" layout.

Pinned Impeccable commit: `44c27a72af98394c32691ba79358811bff86bde6`. Provision manifest: `{"claude": {"files": 96, "root": ".claude/skills/impeccable", "sha256": "a0aee9315892f465b4b66327b5f5c1e37208cb1fb14d19b1ebef18b78fe319f8"}, "codex": {"files": 99, "root": ".agents/skills/impeccable", "sha256": "e3ca77ec39e0490702d139744352119572c1f9694821482f420bc488944d8796"}}`.
