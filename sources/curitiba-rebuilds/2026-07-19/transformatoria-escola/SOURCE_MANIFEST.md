# Source manifest

This build uses only the supplied project evidence (`prospect.json`, `PRODUCT.md`, `BRAND_SOURCE.md`). No external assets were downloaded or embedded, and no network request is made by the shipped HTML/CSS/JS beyond the two already-public outbound links named below.

| Public-site content | Evidence source |
|---|---|
| School name "Escola Transformatória" | `prospect.json` (business_name), `BRAND_SOURCE.md` |
| Founder Heverson Barbosa | `prospect.json` active_evidence, `preserved_strengths` |
| "A escola dos protagonistas" | `prospect.json` brand_source.strongest_public_language |
| "Quem Comunica Multiplica" | `prospect.json` brand_source.strongest_public_language |
| "Capital Comunicacional" | `prospect.json` brand_source.strongest_public_language, services |
| "Diagnóstico gratuito em 2 minutos" / diagnostic-first conversion framing | `prospect.json` brand_source.strongest_public_language, preserved_strengths |
| Cursos online de oratória e comunicação | `prospect.json` brand_source.services |
| Treinamentos presenciais | `prospect.json` brand_source.services |
| Cursos VIP | `prospect.json` brand_source.services |
| Mentoria Capital Comunicacional | `prospect.json` brand_source.services |
| Treinamentos in company | `prospect.json` brand_source.services |
| Stage, microphone, filmed-practice, live-experience cues (paraphrased) | `prospect.json` preserved_strengths, active_evidence |
| Individual vs. company (B2B) two-audience split | `prospect.json` rebuild_angle, preserved_strengths |
| Address: Alameda Princesa Izabel, 573, Centro, Curitiba-PR, 80430-128 | `prospect.json` brand_source.locations, active_evidence |
| Address geographic verification | `prospect.json` evidence_links (OpenStreetMap/Nominatim) |
| Contact route `https://transformatoria.com.br/contato/` | `prospect.json` evidence_links, brand_source.contacts |
| Personality words (protagonistas, transformação, confiança, impacto, autoridade, prosperidade) | `prospect.json` brand_source.personality_words — used to shape tone, not quoted verbatim as a list |

## Deliberately not restated (source of the original site's credibility problems)

Per `prospect.json.problems` and `brand_source.weaknesses_not_to_copy`, this build removes rather than reframes:

- Any specific experience-year count (the official site shows 11, 12, and 14 years in different places — none is repeated or "corrected" to a new number here).
- Enrollment totals, NPS score, or outcome multipliers (`+24 mil formados`, `98,6 NPS`, `ganham até 8x mais`, `vendem 6,5x mais`) — no methodology for these is in the supplied evidence, so no version of them appears.
- Repeated "Outras Escolas vs. Transformatória" comparison blocks.
- Repeated, unnamed-tier enrollment forms.
- The copy-quality defects quoted in the brief ("Prêmio Qualidade Brasil 2017/1018", "Certificado válico pelo MEC", "Método Acceletared Learning") — not corrected-and-kept, simply not present, since none is independently verifiable as a real credential in the supplied evidence.

## Asset ledger

- Visual devices (spotlight glow, curtain-fold bars, address-numeral watermark, program numerals) are original, CSS-native, non-photographic, non-logo concept devices — see DESIGN.md's image-treatment rule.
- Fonts: local Cambria/Georgia/Liberation Serif (display) and Segoe UI/system-ui/DejaVu Sans (body) system stacks; no font files or third-party font requests.
- Photography, trainer portraits, testimonials, and logo files: intentionally omitted. The evidence describes their existence on the official site but supplies no downloadable, reusable, or licensable file — substituting stock photography for this specific school's unverified stage/people would misrepresent them, so the honest choice is zero photography plus original stagecraft-referencing CSS devices instead.

## Deliberate omissions

No curriculum detail, course duration, schedule, price/tuition, enrollment tier names, testimonial copy, trainer roster, award, certification claim, or response-time promise is presented. These were not supported by the bounded evidence, or are exactly the ambiguity the brief instructs us to remove rather than invent a replacement for.


## Assets added in the 2026-07-26 branding pass

Open Graph preview image drawn from the project's own color tokens and verified copy.

| File | Origin | Date added |
|---|---|---|
| `assets/og-image.svg` | Generated locally | 2026-07-26 |
