# Source Manifest — Pousada Ruta 40

This document records the brand-source prerequisite for the speculative build of **Pousada Ruta 40**.

## Official identity and verified contacts

- **Business name:** Pousada Ruta 40
- **Official website:** https://pousadaruta40.com.br/
- **Address:** R. João Alencar Guimarães, 1427, Santa Quitéria, Curitiba/PR, 80310-420
- **Phone / WhatsApp:** (41) 98535-0526
- **E-mail:** contatoruta40@gmail.com
- **CNPJ:** 52.405.011/0001-55
- **Instagram:** https://www.instagram.com/pousadaruta40/

All contacts were cross-checked between the official site (homepage and /contato) and the prospect JSON. The official site is served with a Let’s Encrypt certificate, but the intermediate chain is not recognized by the default Python `curl`/`openssl` trust store; downloads were therefore performed with `curl -sLk`.

## Official logo variants and source URLs

- **Primary logo PNG:** `https://yata-apix-2ee034da-17c3-4570-aab8-7242d41fd61c.s3-object.locaweb.com.br/2b53523c6b5043fa86ddaa8b65f01c2e.png` (saved to `assets/images/logo.png`)
- The logo is used unchanged as the brand mark. It is the official asset found in the `<img src>` on the homepage and contact page.

## Color palette (sampled from verified assets)

- **Deep Patagonian blue:** `#0d3d74` — sampled from the primary logo.
- **Navy / dark blue:** `#113f7a` — used for the header, hover states and proposal accents.
- **Sky blue:** `#5ba4d9` — used for CTAs, links, accent borders and route motif.
- **Azure:** `#dbeafe` — used for light highlights and testimonial dots.
- **Warm sand:** `#f8f5f0` — used for page background, matching the logo’s warm beige area.
- **Stone:** `#6b5e4f` — used for secondary text.
- **Charcoal:** `#1f2937` — used for body text.

These colors were derived from the logo and from the warm/blue palette of the official photography. They are not generic hospitality defaults.

## Typography

- **Display font:** `Montserrat` (weights 400, 500, 600, 700) — chosen for its geometric, modern Latin-American feel that echoes the route/road-trip personality of the brand name.
- **Body font:** `Open Sans` (weights 400, 600) — chosen for clarity and warm readability in long-form text.
- Both fonts are loaded from Google Fonts with `display=swap` and are system-safe fallbacks.

## Visual personality (three words)

**Patagônica · Acolhedora · Roteiro**

The brand is named after Argentina’s legendary Ruta 40. The official site repeatedly uses imagery of wood, mountain-like warmth, empanadas, and a “home away from home” tone. The design should feel like a road-trip refuge, not a generic hotel.

## Verified headline / tagline language

From the official site:

- “A melhor pousada em Curitiba” (visible in title tag and footer narrative)
- A identidade visual e o nome fazem referência à Argentina; afirmações específicas sobre refeições e serviços exigem confirmação direta.
- The concept thesis for the build: *“A Patagônia argentina no coração de Curitiba.”*

## Verified services and facts

- Pousada / independent lodging in Santa Quitéria, Curitiba
- Reservation by WhatsApp or e-mail
- The official site displays guest comments attributed to public platforms; current ratings and counts must be checked at the source before reuse.
- The property uses the same WhatsApp number for both reception and reservations

## Minimum visual asset set

- **Hero:** `assets/images/acom_1.png` (official interior shot)
- **Official accommodation image 1:** `assets/images/acom_2.png`
- **Official accommodation image 2:** `assets/images/acom_4.png`
- **Official accommodation image 3:** `assets/images/acom_6.png`
- **Brand mark:** `assets/images/logo.png`

Exact room names, categories, capacities, services, prices, availability and booking conditions were not published in the reviewed evidence. The production concept therefore uses neutral image labels and directs visitors to confirm details with the pousada.

## Public proof signals

- No aggregate guest-review score or review count is approved for production because the manifest does not contain a direct, current source URL for those numbers.
- **Real guest quotes** (paraphrased from public Google Maps and Airbnb reviews):
  - “Simplesmente perfeito, uma simplicidade e uma paz que não temos como descrever, Ariel e sua equipe muito atenciosos...”
  - “Excelente pousada! Tudo muito limpo, funcionários muito simpáticos e o Ariel além de um ótimo host é um excelente chef! Por favor experimente as empanadas!”
  - “Uma experiência muito boa... Lugar agradável, o proprietário é uma pessoa incrível... A comida é maravilhosa!”
  - “Anfitrião super preocupado se estava me sentindo confortável, café da manhã maravilhoso, sempre pró-ativo, acessível e super educado.”

## Original site screenshots (after load)

- `assets/original_evidence/original_home_desktop_1440x900.png`
- `assets/original_evidence/original_home_mobile_390x844.png`
- `assets/original_evidence/original_contato_desktop_1440x900.png`

Captured at 1440×900 and 390×844 viewports with Playwright headless Chromium after `networkidle`.

## Brand equity to preserve

- The deep blue + warm sand palette of the logo.
- The wood-heavy, rustic interior photography.
- The Argentine / Patagônia “Ruta 40” road-trip narrative.
- The warm, personal tone (host Ariel and team).
- The direct WhatsApp reservation culture.

## Weaknesses from the official site not to copy

- Missing `<meta name="description">` and H1 semantic structure.
- Broken/inconsistent WhatsApp links (missing digit 9, missing DDI +55).
- Accommodation gallery with no labels, names, capacity or pricing.
- No structured reservation form.
- Heavy reliance on low-resolution image carousels without context.
- TLS intermediate certificate not recognized by default clients.

## Asset provenance

All images in `assets/images/` are originals from the official site or directly derived from them (resizing for performance). No stock imagery or simulated projects are used. No watermarked social screenshots are treated as polished production imagery.
