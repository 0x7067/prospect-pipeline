# Source manifest

Every business-specific claim shipped in `index.html` and `proposal.html` traces to one of the supplied source files. No fact below was inferred beyond what its source states.

| Claim on site | Source | Location in source |
|---|---|---|
| Business name "Arch Odontologia" | `prospect.json` | `business_name` |
| Category: clínica odontológica e estética facial | `prospect.json` | `category` |
| Address: Av. Sete de Setembro, 5739, 2º andar, Batel/Água Verde, Curitiba/PR | `prospect.json` | `address` |
| "Estacionamento gratuito no local" (free on-site parking) | `PRODUCT.md` / `BRAND_SOURCE.md` | Evidence boundary bullet; `strongest_public_language` |
| Care model: Acolher / Arquitetar / Realizar / Manter (+ per-step descriptions) | `BRAND_SOURCE.md` | `strongest_public_language` |
| "Trabalhamos de forma transparente e sensivelmente profissional…" | `BRAND_SOURCE.md` | `strongest_public_language` |
| "Sorria sem filtros!" gallery framing | `BRAND_SOURCE.md` | `strongest_public_language`; `equity_to_preserve` |
| "Oral e Facial" dual positioning | `PRODUCT.md` / `BRAND_SOURCE.md` | Evidence boundary; `equity_to_preserve` |
| Oral treatment list (prótese e reabilitação oral, endodontia, implantodontia, cirurgia e traumatologia bucomaxilofacial, ortodontia e ortopedia facial, ortodontia lingual, Invisalign/Essix aligner, DTM e dor orofacial) | `BRAND_SOURCE.md` | `services` |
| Facial treatment list (harmonização facial, odontologia estética, drenagem linfática facial pós-operatória) | `BRAND_SOURCE.md` | `services` |
| Team roster and each professional's named specialties (Dra. Luana Delmonego, Dr. Juarez Garcia, Dr. Felipe Mussi, Dr. Fábio Santos, Dra. Sabrina Nodari, Laura Rosa, Dra. Rafaela Mattana) | `PRODUCT.md` / `BRAND_SOURCE.md` | Evidence boundary bullet naming all seven professionals; `team` array |
| Dr. Juarez Garcia as responsável técnico | `PRODUCT.md` | Evidence boundary bullet |
| Clinical photography produced by a dedicated professional photographer/retoucher (Denys Polishchuk), described without naming him on-page as a photography credit rather than a clinical team member | `PRODUCT.md` / `BRAND_SOURCE.md` | Evidence boundary; `team` array (role described generically as "produção fotográfica clínica…conduzida por um fotógrafo profissional dedicado") |
| Single WhatsApp number `+55 41 99277-0333` / `https://api.whatsapp.com/send?phone=5541992770333` | `BRAND_SOURCE.md` | `contacts` — sourced from the live WhatsApp CTA link embedded in the official homepage markup |
| Problems being fixed (conflicting WhatsApp numbers, heavy Wix payload, broken/blurred gallery areas, cookie banner over hero, fragmented conversion paths) — stated only in `proposal.html`, never on `index.html` | `prospect.json` | `problems` |

## Deliberately excluded (no source, therefore not shipped)

- Official brand colors — no pixel-sampled palette was available (text-only fetch); `BRAND_SOURCE.md` documents the shipped palette as **generated**, not official, and it is described as such and never claimed as sourced brand color.
- Official web fonts — none confirmed sourced; typography choice is documented in `DESIGN.md`/`BRAND_SOURCE.md` as generated.
- Testimonials, awards, before/after photography, numeric outcomes, review counts on the public homepage — none fabricated; the "Sorria sem filtros" gallery section on `index.html` describes the documentation process only, with no images or numbers invented.
- Logo — the original Wix-hosted logo image is referenced only as a URL provenance note in `BRAND_SOURCE.md`; it is not reproduced pixel-for-pixel anywhere in the shipped site (an original CSS/SVG arch mark is used instead).
- Hospital Pequeno Príncipe footer badge — noted in `PRODUCT.md` as present on the official site but explicitly scoped as "not narrated as a claim"; omitted from this concept entirely since no specific partnership language beyond a logo link was available.
