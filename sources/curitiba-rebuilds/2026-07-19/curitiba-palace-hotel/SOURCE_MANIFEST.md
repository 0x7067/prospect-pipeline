# Source manifest

Every external reference used by this build, with provenance. Business-specific
facts are bounded to prospect.json / PRODUCT.md / BRAND_SOURCE.md (themselves
verified 2026-07-19). Stock imagery does not depict the hotel.

## Evidence sources (business facts)

| Source | Used for |
|---|---|
| https://www.curitibapalacehotel.com.br/ (HTTP 200, checked 2026-07-19) | Hotel name, reservation CTA, 30+ years in central Curitiba, amenities list, breakfast, direct-booking best-rate promise, quoted public language |
| https://www.curitibapalacehotel.com.br/contato | Contact page existence; linked as the official contact channel |
| https://guiaemcuritiba.com.br/centro/curitiba-palace-hotel | Third-party corroboration of address Rua Desembargador Ermelino de Leão, 45, Curitiba/PR and phone +55 41 3322-8081 |

## Outbound links from the concept

- Header "Reservar", booking panel submit, quartos CTA, reserva CTA →
  https://www.curitibapalacehotel.com.br/ (official site, target=_blank, noopener)
- "Fale com o hotel" → https://www.curitibapalacehotel.com.br/contato (noopener)
- Phone links → tel:+554133228081
- No forms post anywhere. The availability form only validates dates locally and
  opens the official site in a new tab.

## Photography (Unsplash CDN, verified HTTP 200 on 2026-07-19)

Treatment rule applied uniformly: pine duotone multiply overlay
(oklch 0.30 0.032 160 at 20%), saturate(0.82) contrast(1.04), hairline gold
frame on detail crops. Stock imagery indicates treatment direction only.

| URL | Placement | Alt |
|---|---|---|
| images.unsplash.com/photo-1517248135467-4c7edcad34c4 | Hero (w=2000, fetchpriority=high) | Decorative (empty alt, aria-hidden frame) |
| images.unsplash.com/photo-1590381105924-c72589b9ef3f | Quartos main (w=1400, lazy) | "Quarto de hotel com cama grande, roupa de cama clara e iluminação suave" |
| images.unsplash.com/photo-1520250497591-112f2f40a3f4 | Quartos detail crop (w=900, lazy) | Decorative |
| images.unsplash.com/photo-1533089860892-a7c6f0a88666 | Café da manhã main (w=1400, lazy) | "Mesa de café da manhã servida com pães, frutas e café" |
| images.unsplash.com/photo-1544148103-0773bf10d330 | Café detail crop (w=900, lazy) | Decorative |
| images.unsplash.com/photo-1449824913935-59a10b8d2000 | Localização (w=1400, lazy) | "Rua de cidade arborizada ao entardecer, com prédios e calçadas" |

Selection note: first-choice hotel-exterior stock resolved to resort/pool
imagery on visual inspection and was rejected; the hero uses an elegant
restaurant/lobby interior consistent with the documented "traditional
architecture + contemporary comfort" positioning. All photos must be replaced
with official hotel photography before any real use.

## Typography (Google Fonts)

- Fraunces 300–700 + italics, optical sizing (display) — documented substitute;
  the official brand typeface was not reliably extractable from evidence.
- Inter 400–700 (body/UI).
Loaded via fonts.googleapis.com / fonts.gstatic.com with preconnect;
system-serif/system-sans fallbacks declared.

## Fonts/colors provenance honesty

No canonical brand color token was extractable (BRAND_SOURCE.md states this).
The pine + gold palette is a deliberate documented substitute, recorded in the
craft receipt and SITE_REVIEW.md, and must be confirmed against the official
mark before any publication.
