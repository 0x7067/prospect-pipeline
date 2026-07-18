# Penha Moraes V2 — Source-Bounded Art Direction Brief

## Objective

Build a production-realistic website concept for Penha Moraes Arquitetura and a completely separate proposal page. This is a fresh implementation. Do not inspect or reuse any prior generated HTML/CSS from sibling directories.

## Brand thesis

This concept can only belong to Penha Moraes because it combines the firm’s existing white geometric logo, exact dusty-magenta family, assertive uppercase voice, and verified architectural imagery in a graphic system inspired by architectural measurement lines and planes.

## Verified brand/source facts

- Official site: `https://penhamoraes.arq.br/`
- Official public phrase: **“Experiências transformadoras com a arquitetura”**
- Official public service labels:
  1. Estudo de viabilidade
  2. Projeto arquitetônico
  3. Projeto de interiores
  4. Execução
- Location: Curitiba, Paraná
- Phone: `(41) 4102-3551`
- Email: `contato@penhamoraes.arq.br`
- Address: `Av. São José, 1194 — Cristo Rei, Curitiba/PR` (omit room number)
- Exact brand pink family sampled from the official logo: primary `#CE6EA2`; lighter tint `#E397C1`
- `assets/brand-white.png`: official logo from the current site
- `assets/residencial-hero.jpg`: official current-site hero asset
- `assets/interiores-salao.jpg`: official current-site interior asset
- `assets/residencial-fachada.jpg`: official current-site project/service image; only 470×490, never render wider than its intrinsic width

No other services, projects, project names, awards, years, metrics, team members, testimonials, methods, outcomes, or credentials are verified. Do not invent them.

## Production site requirements (`index.html`)

The page must look like the actual website the firm could publish. It must contain no proposal, redesign, diagnosis, evidence, prototype, non-affiliation, before/after, or case-study language, and no link to `proposal.html`.

### Art direction

- Preserve the original’s strongest equity: full-bleed architecture imagery, white geometric logo, bold uppercase sans voice, energetic magenta, visible phone/contact path.
- Do **not** use editorial serif typography. Use a disciplined geometric/system sans stack.
- Do **not** use navy as the dominant brand color. Base palette: warm white, ink/charcoal, exact dusty magenta, image color.
- Signature device: architectural measurement rails/coordinates/planes, used sparingly and meaningfully—not generic decorative lines.
- Hero: bright image remains visible. Use only a localized gradient behind text, not a uniform dark veil. Feature the verified phrase “Experiências transformadoras com a arquitetura” as the emotional headline and keep factual services separate.
- Build at least three distinct compositional moments: cinematic hero; visual project/image sequence; service/office/contact sequence with different density.
- No SaaS cards, pill buttons, generic bordered contact cards, repetitive ruled rows, decorative vertical city text, or “serif equals premium.”
- Portfolio/image section may use the three official images without invented project captions. Use neutral labels such as “Arquitetura”, “Interiores”, or “Projetos / portfólio” only where supported by what is visibly shown and the official site navigation.
- The 470px façade image must remain at or below 470 CSS pixels wide.
- Contact ending must be as visually resolved as the hero, with oversized phone/email and a decisive magenta/ink composition.
- Mobile at 390×844 must be independently composed: intentional image crops, controlled headline breaks, edge-to-edge visual moment, compact services/contact, and a menu that changes between “Menu” and “Fechar” with keyboard-visible focus.

## Proposal requirements (`proposal.html`)

- Separate URL and separate information architecture.
- Must clearly say `Estudo independente para Penha Moraes Arquitetura` and include a concise non-affiliation disclosure, but do not lead with legal defensiveness.
- Do not use the prospect’s logo as if the proposal were authored by the firm. Use a text-only neutral proposal masthead.
- Lead with the opportunity and the finished concept.
- Include: concise current-state facts; three prioritized improvements; what is included; dependencies/limitations; one explicit next step; technical appendix.
- Keep raw DOM/GET/schema terminology in the appendix only.
- Link to `index.html` as “Ver conceito do site”. The production site must not link back.
- Visually consistent with the concept but unmistakably a proposal/sales document.

## Implementation constraints

- Only create `index.html`, `proposal.html`, `styles.css`, and optional `script.js`.
- No framework, package, external font, external image, build step, form, backend, or stock content.
- All local links and anchors must work.
- Accessible HTML, visible focus states, reduced-motion support, no horizontal overflow.
- Read `STYLE_GATE.md` and design to pass it, not merely to pass syntax checks.
