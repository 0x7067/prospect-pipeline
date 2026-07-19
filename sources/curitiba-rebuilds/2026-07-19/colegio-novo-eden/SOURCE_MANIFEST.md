# Source manifest

This build uses only the supplied project evidence (`prospect.json`, `PRODUCT.md`, `BRAND_SOURCE.md`). No external assets were downloaded or embedded, and no network request is made by the shipped HTML/CSS/JS beyond the two already-public outbound links named below.

| Public-site content | Evidence source |
|---|---|
| School name "Colégio Novo Éden" | `prospect.json` (business_name), `BRAND_SOURCE.md` |
| Founding year 1990 | `prospect.json` preserved_strengths ("the homepage says the school began in 1990") |
| "Educando para a vida" | `prospect.json` brand_source.strongest_public_language |
| "Uma escola, muitos sonhos realizados!" | `prospect.json` brand_source.strongest_public_language |
| "Agende uma visita" (as a conversion action, restated as "Agende uma visita") | `prospect.json` brand_source.strongest_public_language |
| "qualidade e segurança" / "criatividade e autonomia" | `prospect.json` brand_source.strongest_public_language |
| Values: Qualidade, Segurança, Criatividade, Autonomia, Formação acadêmica, Amor à vida | `prospect.json` brand_source.personality_words, preserved_strengths |
| Ensino Infantil, Ensino Fundamental I e II, Ensino Médio | `prospect.json` brand_source.services |
| Address: Rua Mandirituba, 1327, Sítio Cercado, Curitiba – PR, CEP 81925-540 | `prospect.json` brand_source.locations |
| Phone (41) 3289-9436 | `prospect.json` brand_source.contacts, active_evidence |
| E-mail contato@novoeden.com.br | `prospect.json` brand_source.contacts |
| Hours: segunda a sexta, 07:20 às 19:00 | `prospect.json` active_evidence |
| Contact route `https://novoeden.com.br/fale-conosco/` | `prospect.json` brand_source.contacts, evidence_links |
| LinkedIn profile link | `prospect.json` evidence_links |
| Sign-blue accent `#0170B9` | `prospect.json` brand_source.colors ("Official page CSS exposes a blue-forward link palette including #0170B9 and #005BE2") |
| Green accent direction (concept color, not an exact sampled hex) | `prospect.json` brand_source.colors ("plus green accents; verify against the rendered logo/hero before production use") |

## Deliberately not restated

Per `prospect.json.problems` and `brand_source.weaknesses_not_to_copy`, this build removes rather than reframes:

- The generic "Saiba mais" label for each education stage — replaced with a distinct sentence per stage instead of repeating the same label three times.
- The compressed admissions journey — the visit CTA now carries hours/phone inline on the first screen and a full contact block at the close, instead of the single "Agende uma visita" line with no supporting detail.
- Hidden contact details — phone, address, hours, and e-mail all appear on the homepage itself, not only on a separate contact page.
- The missing semantic H1 — the homepage now opens with a real `<h1>`.

## Asset ledger

- Visual devices (trail rule, trail dots, origin-year and address-numeral watermarks) are original, CSS-native, non-photographic, non-logo concept devices — see `DESIGN.md`'s image-treatment rule.
- Fonts: local Georgia / Bitstream Charter / Liberation Serif (display) and Segoe UI / Verdana / Liberation Sans (body) system stacks; no font files or third-party font requests.
- Logo, photography, and any partnership/accreditation marks referenced on the official site: intentionally omitted. `brand_source.logo_sources` and `visual_assets` resolve only to the live page URL, not to a downloadable file, so no logo mark or photo is reproduced; the monogram "NE" is an original typographic lockup, not a copy of the official logo.

## Deliberate omissions

No accreditation body, partnership name, enrollment total, class size, tuition, curriculum detail, staff roster, or exact visit-scheduling mechanism beyond phone/e-mail is presented. These were not supported by the bounded evidence.
