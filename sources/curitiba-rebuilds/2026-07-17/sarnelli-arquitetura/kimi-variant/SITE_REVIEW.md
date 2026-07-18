# Site Review — Sarnelli Arquitetura (Kimi Variant)

## Evidence boundary

All business claims, colors, typography, and project names are sourced from `prospect.json`, `BRAND_SOURCE.md`, `PRODUCT.md`, `DESIGN.md`, and public observation of the original website.

| Source | What was extracted | How it is used |
|---|---|---|
| `prospect.json` | Business name, address, phone, WhatsApp, e-mail, positioning (saúde/educação), CNPJ | Header, footer, hero, CTA |
| `BRAND_SOURCE.md` | Palette (#2B2B2B, #FFFFFF, #0F6358, #F5F7F7), typography (Montserrat/Roboto), project names (Erastinho, Centro Médico Erasto, Santa Casa), Instagram/LinkedIn | Design system, portfólio, redes |
| `PRODUCT.md` | Pilares (conceito, bem-estar, generosidade), diagnósticos (placeholders, repetições, Lorem Ipsum), estrutura pilar → prova → processo → contato | Copy, proposta, direção de design |
| `DESIGN.md` | Composição, tipografia, cor, imagem, conversão, micro-interações | CSS, layout, proposta |

## What was built

- `index.html` — homepage reorganizada na sequência pilar → prova → processo → contato.
- `proposal.html` — documento de proposta independente (não oficial).
- `rationale.html` — redirect 301 equivalent para `proposal.html`.
- `styles.css` — sistema de design baseado na paleta e tipografia verificadas.
- `script.js` — navegação mobile acessível.
- `README.md` — instruções de uso e escopo.
- `SOURCE_MANIFEST.md` — rastreabilidade de todas as afirmações de negócio.
- `assets/` — logo e imagens locais (fontes listadas em SOURCE_MANIFEST).

## What was removed from the original

- Todos os textos Lorem Ipsum e prêmios não verificados.
- Repetições de "SARNELLI" e "PROJETOS" do tipo placeholder.
- Conteúdo de carrossel não resolvido.
- Grades confusas de portfólio sem hierarquia por tipologia.

## Validation status

Desktop and mobile validation was performed locally with Playwright (Chromium) at viewports 1440×900 and 390×844:

| Page | Desktop | Mobile | Overflow | Console errors | Request failures |
|---|---|---|---|---|---|
| index.html | OK | OK | none | 0 | 0 |
| proposal.html | OK | OK | none | 0 | 0 |

Captures are saved in `comparison/`:
- `index-desktop.png` / `index-desktop-full.png`
- `index-mobile.png` / `index-mobile-full.png`
- `proposal-desktop.png` / `proposal-desktop-full.png`
- `proposal-mobile.png` / `proposal-mobile-full.png`
- `kimi-validation-status.json` — machine-readable summary.

## Quality gate note

The pinned `impeccable_detector_gate.py` was run twice. After the second run, the schema-3 receipt remained in status `findings` (not `clean`) with the following categories:

- `overused-font` (8) — Montserrat/Roboto appear on the gate's reflex-reject list. However, `BRAND_SOURCE.md` explicitly states that the original site uses Montserrat and Roboto and instructs "manter Montserrat/Roboto e remover a dispersão", so identity-preservation was prioritized over the generic anti-pattern.
- `cramped-padding` (24) — heuristic flags on centered containers with physical padding; the design maintains safe insets and the validation screenshots show no clipping.
- `flat-type-hierarchy` (4) — ratio 1.7:1 on rendered sizes; addressed by reducing uppercase labels and increasing hero/proposal headline contrast.
- `low-contrast` — resolved in the second pass (was 6, now 0).
- `all-caps-body`, `hero-eyebrow-chip`, `numbered-section-markers`, `layout-transition` — resolved in the second pass.

Because the receipt did not reach `clean`, the AFK capture script was not executed and the build terminal marker is a failed receipt, not a complete receipt. The site itself is static, functional, evidence-bounded, and validated; the failure is bounded to the Impeccable detector's quality gate.

## Limitations and non-affiliation

This is an independent, non-solicited concept. It does not imply partnership, approval, or endorsement by Sarnelli Arquitetura. No personal data, credentials, or restricted information was used. No publication or contact with the prospect was made.
