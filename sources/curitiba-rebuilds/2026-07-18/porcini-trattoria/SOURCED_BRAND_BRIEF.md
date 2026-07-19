# Porcini Trattoria — sourced implementation brief

Audit date: 2026-07-18 (live official pages rechecked at 2026-07-18T12:29:19-03:00)

## Decision

Build one hybrid brand-and-utility direction: **“Chamados para servir, para cada momento à mesa.”** It combines Porcini’s verified occasion-led promise with a short practical path: identify the occasion, preview menu and adega, then call to reserve in Batel.

This is implementation-ready as a **local/staging concept**, not cleared for publication. The seed labels the tier `production_complete`, but the current project itself remains `DRAFT / STAGING ONLY`; contact verification, browser/detector evidence, publication approval, and image-use permission are absent. Official-domain hosting proves asset provenance, not a reuse license.

## Evidence policy

- Business-specific implementation claims must remain within `prospect.json`, `PRODUCT.md`, and `BRAND_SOURCE.md`, per `AFK_NATIVE_TASK.md:8`.
- The approved public evidence URLs are the official home and menu pages and the official image URLs enumerated in those seed files.
- Additional official pages were checked to answer the audit questions. Their facts are reported separately as **official but outside the approved implementation boundary**; do not publish them unless the evidence boundary is explicitly expanded.
- Descriptive copy may connect verified facts, but must not add awards, guarantees, customer outcomes, atmosphere claims, service levels, or operational details.

## Verified fact inventory

### Identity and positioning

- Name: **Porcini Trattoria**.
- Seed category: **Restaurante italiano e adega**.
- Official URL: https://www.porcini.com.br/
- Published slogan: **“Comer bem em todos os detalhes.”**
- Published service language: **“estar à mesa é um dos momentos mais importantes e prazerosos da vida”** and **“fomos ‘chamados para servir’.”**
- Verified occasions: **almoço em família, evento empresarial, jantar romântico**.

Primary sources: `prospect.json:5-9,49-62`; `BRAND_SOURCE.md:19-39`; official homepage.

### Cuisine and offerings

- Italian menu identity is approved by the seed.
- The approved menu page publishes starters, polentas, bruschette, individual dishes, recipes with **massas artesanais**, meats with artisanal pasta, pasta and sauces, and desserts.
- The official homepage says ingredients include pasta preparation, meats, and seasonings. Its “Padrão Internacional de Qualidade da Culinária Italiana” wording is a first-party marketing statement; do not present it as third-party certification.
- Adega: the official homepage says it is in the building’s basement, has a glass ceiling visible from the entrance hall, and **“conta com mais de 600 rótulos.”**
- The claim **“uma das maiores e melhores adegas do Brasil”** is self-published promotional language, not independently verified. Use the concrete “mais de 600 rótulos” fact; do not turn the superlative into an objective claim.

Primary sources: https://www.porcini.com.br/ and https://www.porcini.com.br/menu; `prospect.json:54-61`; `BRAND_SOURCE.md:24-31`.

### Location and reservations

- Address: **Rua Buenos Aires 277 — Batel — Curitiba — Paraná — Brasil**.
- Reservations: **only by telephone**, according to the official pages.
- Phones: **+55 (41) 3023-5117** and **+55 (41) 3022-5115**.
- Two phone numbers do **not** establish two branches or “duas casas.” The seed identifies one location only.

Primary sources: `prospect.json:63-69`; `BRAND_SOURCE.md:33-39`; official home/menu footers.

### Hours

- **No hours are included in the approved seed fact set. Omit hours from the implementation.**
- Secondary official check only: https://www.porcini.com.br/contato currently publishes “JANTAR Segunda a Sábado das 19:00 às 23:00” and “ALMOÇO Sábados e Domingos das 12:00 às 16:00.” This URL is not in the approved evidence list, and hours are operationally volatile; add them only after the boundary is expanded and they are reverified immediately before publication.

### Other official but currently out-of-boundary facts

The official contact page currently displays `porcini@porcini.com.br` and valet service; the official events page publishes room names, capacities, and event details. These were not supplied in the approved seed set. Do not implement them in this pass.

## Brand cues to preserve

1. Exact slogan: **Comer bem em todos os detalhes**.
2. Italian culinary identity and artisanal-pasta/menu evidence.
3. Three verified dining occasions.
4. Adega as a concrete differentiator, anchored by **more than 600 labels** rather than unverified superlatives.
5. “Chamados para servir” as the emotional promise.
6. Batel location and phone-reservation path.
7. Current logo’s spiral/mushroom-like monogram and handwritten “Porcini trattoria” treatment as a visual reference.

### Color and type distinction

- Seed-derived concept palette: burgundy `#6A1F28`, gold `#D3A85B`, warm paper `#F2EBDD` (`BRAND_SOURCE.md:8-13`). Treat these as a proposed evolution sampled from the logo/wine-imagery family, not as exact current-site CSS tokens.
- The current official stylesheet uses a black/white/gray base and an orange hover accent `#ff6600`; it declares Arvo Regular for headings and Swiss/Arial Narrow families for navigation/body. Source: https://www.porcini.com.br/_style.css.
- Proposed implementation: editorial serif display plus highly legible sans for reservation/address facts. The pairing is a design direction, not a claim about the existing brand’s exact fonts.

## Single hybrid-brand direction

**Concept:** an occasion-led editorial trattoria whose visual rhythm borrows the arch/curve of the logo and the cellar, while the booking path behaves like a concise utility page.

- Recognizable composition: a large editorial hero with one framed photographic “window,” followed by three occasion entries rather than generic feature cards.
- Typographic idea: expressive serif for sourced public language; compact sans for menu categories, address, and phone numbers.
- Image rule: use wide crops as framed windows; do not obscure focal subjects with heavy overlays; never label a public image merely “imagem de referência.”
- Color evolution: warm paper field, burgundy as the primary action/text anchor, gold used sparingly for rules and wayfinding.
- Emotional promise: service organized around the guest’s moment at the table.
- Conversion path: **occasion → menu/adega evidence → phone reservation + Batel address**.

## Information architecture

1. **Header:** logo/wordmark; anchors for Momentos, Menu, Adega, Reservas; persistent “Ligar para reservar” action.
2. **Hero:** exact slogan; concise sourced occasion line; one primary phone CTA; one secondary link to menu.
3. **Momentos à mesa:** Almoço em família / Evento empresarial / Jantar romântico. Keep descriptions factual and restrained.
4. **Menu:** short category preview grounded in the official menu; link to the official menu page if external linking is permitted.
5. **Adega:** “mais de 600 rótulos,” basement/glass-ceiling detail, and one provenance-cleared image.
6. **Visita e reservas:** single Batel address, both telephone numbers, explicit “reservas somente por telefone.” No hours in this pass.
7. **Footer:** name, address, phones, official URL. No draft/proposal/disclosure language on the production-facing homepage.

## Approved content inventory

Suggested concise copy blocks:

- H1: **Comer bem em todos os detalhes.**
- Hero support: **Almoço em família, evento empresarial ou jantar romântico.**
- Primary CTA: **Ligar para reservar**.
- Occasion labels: exact three labels above.
- Menu proof: **Massas artesanais, carnes, entradas e sobremesas** (all categories evidenced by the official menu).
- Adega proof: **Mais de 600 rótulos em uma adega no subsolo, com teto de vidro visível no hall de entrada.**
- Reservation proof: **Reservas somente por telefone.**
- Address and phones exactly as listed above.

Avoid long verbatim copying of source paragraphs; use only the short, identity-bearing phrases and concrete facts required for the page.

## Visual references and provenance

The local copies below were hash-matched byte-for-byte to the official URLs on 2026-07-18:

| Local file | Dimensions | SHA-256 | Official source | Visible use |
|---|---:|---|---|---|
| `assets/asset-0.png` | 177×290 | `3f8877c936ddbc58492aa6ae1a21a46a69ad9c2c24ffa7d87bdafd4afdf6ecf6` | https://www.porcini.com.br/images/lg01.png | White/transparent Porcini logo; small raster, unsuitable for large display without a better master. |
| `assets/asset-1.jpg` | 1920×950 | `10c58e299cd1ce0ff0736034e59005c1b4c3f71a8122d7958af35db4f50f49ef` | https://www.porcini.com.br/images/slideshow/slide1.jpg | Wine glasses and formal table setting; wide, dark, effective as a hero/background crop. |
| `assets/asset-2.jpg` | 1920×950 | `a997531adc14eef81960e989018796967a9c0499d3ed713b83acf32d5fa2458e` | https://www.porcini.com.br/images/slideshow/slide2.jpg | Close food preparation image with tomatoes, cheese, onion, and herbs; do not name the dish. |
| `assets/asset-3.jpg` | 1920×950 | `21c4f246f4245b8075a156c7436c54482d41b1d43c07f2749795329279c3d3cc` | https://www.porcini.com.br/images/slideshow/slide3.jpg | Black-and-white night exterior with Porcini signage and number 277; useful for location context. |
| `assets/asset-4.jpg` | 570×300 | `faee7d1acab3ea08665ebc82bd5566bce9cc1cde43698a46d9fb34075b7f6281` | https://www.porcini.com.br/images/img001.jpg | Warm table setting with Porcini-branded menu; too small for a large full-width focal image. |

Original-site capture evidence:

- `assets/original-desktop.png` — 1440×900 viewport.
- `assets/original-desktop-full.png` — 1440×2103 full page.
- `assets/original-mobile.png` — 390×844 viewport.
- `assets/original-mobile-full.png` — 390×2305 full page.

The captures show a slideshow-first hero, low-contrast logo overlay, ornamental paper background, two-column menu/adega content on desktop, stacked content on mobile, and a footer reservation action. Hours are not visible in the captured homepage body. Mobile begins with a collapsed “PORCINI - NAVEGUE” control and long stacked copy.

**Rights status:** no license, assignment, permission statement, or ownership record is present in the seed or official pages checked. The assets are demonstrably hosted on Porcini’s official domain, but that is provenance only. Keep them in a non-public concept or obtain written permission/a reusable licensed substitute before publication. Do not claim that the rebuild owns them.

## Unsupported claims and content to remove or avoid

- Any award, independent ranking, testimonial, review score, chef biography, founding year, price, popularity, customer outcome, or quality guarantee.
- Objective “one of Brazil’s largest/best wine cellars” wording; only the restaurant’s own site makes that claim.
- Any implication of certification from “Padrão Internacional de Qualidade da Culinária Italiana.”
- Hours, email, valet, event-room capacities, delivery, WhatsApp booking, accessibility, or parking details in this implementation pass.
- “Duas casas” / multiple locations. There is one verified address and two phone numbers.
- “Começar conversa” or messaging-style CTAs that obscure the verified phone-only reservation method.
- Draft page inventions such as “Tempo para conversar, celebrar e comer bem,” “Uma noite com atenção a cada detalhe,” and “Uma mesa para encontros que pedem cuidado.” They are plausible marketing lines but not sourced facts.
- Unsupported ROI promises. “Increase reservation intent” is a design hypothesis, not an achieved result.
- Production homepage language such as “rascunho,” “candidate,” “projeto,” “proposta,” “contato sujeito à validação,” or “este rascunho não envia formulários.” Those belong only in staging/review documentation.

### Existing draft-specific correction list

- `index.html` and `proposal.html` say “ligue para uma das duas casas”; replace with the two verified phone numbers and the single Batel address.
- `index.html` uses generic “conversar” CTAs; use “Ligar para reservar.”
- `index.html` contains public-facing draft/disclosure language and a `DRAFT · CANDIDATE · CURITIBA` footer; remove from the production-facing page.
- `index.html` labels the hero as “Imagem de referência do projeto”; replace with a truthful visual description or decorative treatment.
- Both HTML files say “adega com 600 rótulos”; source wording is **more than 600 labels**.
- The current custom `PO` square is not the official logo. Use the official mark only if permission is established; otherwise use a text wordmark without implying it is an approved logo redesign.

## Source map

### Binding local sources

- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/AFK_NATIVE_TASK.md` — task constraints and evidence boundary; especially lines 3, 8, 14-122.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/prospect.json` — approved fact set, brand source, concept thesis/rules, and stated tier.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/PRODUCT.md` — approved public evidence URLs and voice constraints.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/BRAND_SOURCE.md` — logo, proposed palette/type direction, public language, services, address, phones, visual assets, and equity.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/DESIGN.md` — implementation principles and anti-copy warning.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/PROSPECT_BRAND_STYLE_GATE.md` — required provenance, concept, anti-template, mobile, and publication gates.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/README.md`, `SITE_REVIEW.md`, and `SOURCE_MANIFEST.md` — current staging status and missing validations.
- `/opt/data/projects/curitiba-rebuilds/2026-07-18/porcini-trattoria/index.html`, `proposal.html`, `rationale.html`, `styles.css`, and `script.js` — existing implementation audited for unsupported content and current direction.

### Approved official URLs

- https://www.porcini.com.br/
- https://www.porcini.com.br/menu
- https://www.porcini.com.br/images/lg01.png
- https://www.porcini.com.br/images/slideshow/slide1.jpg
- https://www.porcini.com.br/images/slideshow/slide2.jpg
- https://www.porcini.com.br/images/slideshow/slide3.jpg
- https://www.porcini.com.br/images/img001.jpg

### Secondary official checks, not approved for implementation without boundary expansion

- https://www.porcini.com.br/contato — current hours, email, and valet wording.
- https://www.porcini.com.br/adega — fuller wine-category page and repeated cellar claim.
- https://www.porcini.com.br/eventos — venue/room details and event contact.
- https://www.porcini.com.br/_style.css — current visual-system evidence.
