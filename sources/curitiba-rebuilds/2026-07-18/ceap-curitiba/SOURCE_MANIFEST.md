# Source manifest

## Business facts

- Business: CEAP Curitiba — Cursos Técnicos e Profissionalizantes — `prospect.json`.
- Official site (fetched 2026-07-18): `https://www.ceappr.com.br/`.
- Address: Av. Marechal Floriano Peixoto, 7135 – Hauer, Curitiba/PR — fetched from `https://www.ceappr.com.br/contato/`.
- Hours: segunda a sexta 08h–21h, sábados 09h–14h30 — fetched from `https://www.ceappr.com.br/contato/`.
- Phone: (41) 3276-5834 — fetched from `https://www.ceappr.com.br/contato/`.
- WhatsApp: (41) 99888-4646 / `https://wa.me/5541998884646` — fetched from `https://www.ceappr.com.br/course/tecnico_em_enfermagem/` and `https://www.ceappr.com.br/contato/`.
- Instagram: `https://www.instagram.com/ceapcuritiba/` — `prospect.json`.
- Mission copy ("Formar o aluno com a segurança de que tenham sucesso profissional…") and "Excelência em cursos Técnicos e Profissionalizantes" — fetched from homepage HTML on 2026-07-18.
- Own free student parking, qualified teachers, equipped classrooms and informatics/nursing labs — fetched from homepage HTML on 2026-07-18.

## Courses (all fetched directly from official course pages, 2026-07-18)

- Técnico em Enfermagem — `https://www.ceappr.com.br/course/tecnico_em_enfermagem/` — includes curriculum grid, internship partners, enrollment documentation, prerequisites (Ensino Médio concluído/cursando, 16+ anos), shift options (manhã/tarde/noite/sábado, 2x/4x semana or Saturdays), included apostilas/jaleco.
- Especialização Técnica em Enfermagem do Trabalho — `https://www.ceappr.com.br/course/especializacao-tecnica-enfermagem-trabalho/`.
- Cuidador de Idosos — `https://www.ceappr.com.br/course/cuidador-de-idosos/`.
- Coleta de Sangue para Exames — `https://www.ceappr.com.br/course/coleta-de-sangue/`.
- Operador de Empilhadeira — `https://www.ceappr.com.br/course/operador-de-empilhadeira/`.
- Reciclagem para Operador de Empilhadeira — `https://www.ceappr.com.br/course/reciclagem-operador-empilhadeira/`.
- Mecânica Básica Industrial — `https://www.ceappr.com.br/course/mecanica-basica-industrial/`.
- NR 10 – Para Empresas — `https://www.ceappr.com.br/course/nr-10-empresas/`.
- NR 35 – Para Empresas — `https://www.ceappr.com.br/course/nr-35-empresas/`.
- Full course URL list independently cross-checked against `https://www.ceappr.com.br/course-sitemap.xml` (fetched 2026-07-18).

## Internship partners (sourced)

Erasto Gaertner; Pequeno Príncipe; Evangélico Mackenzie; Santa Madalena Sofia; Fundação Estatal de Atenção à Saúde (FEAES) Bom Retiro; Prefeitura de Curitiba (Unidades de Saúde e UPAs); Hosp. Novo Mundo; Hosp. Alto da XV; Hospital do Idoso Zilda Arns; Hospital Municipal São José dos Pinhais — all fetched from `https://www.ceappr.com.br/course/tecnico_em_enfermagem/`.

## Prior verified audit (documented weaknesses, used only for the proposal page)

- `/opt/data/cron/output/bd2acb816e97/2026-07-15_09-11-37.md` — cookie-consent modal blocking course cards, no primary home CTA, stale "20 anos"/founded-2002 claim, pandemic-framed testimonial, broken glyphs and stale "2024" footer year, malformed course-title fragments.

## Visual assets

No image files are used. This build renders entirely with typography, color, layout, and iconography built from CSS/HTML — no photos, external image requests, or copied logo files are included, consistent with `DESIGN.md`'s "no invented photography" rule since no licensable official photography was supplied to this pass.

## Design decisions

- Claim IDs used by the build: `B1` address/hours/phone (official contact page); `B2` WhatsApp and Instagram (official contact page and `prospect.json`); `C1` nine sitemap-listed course pages (official course sitemap); `C2` Técnico em Enfermagem shifts, prerequisites, documents, structure and ten internship agreements (official course page); `C3` Cuidador 100% online (official course page); `C4` Empilhadeira theory online/live plus practice (official course page); `C5` Reciclagem has a source schedule conflict, so the build asks the user to confirm; `C6` NR 10/35 delivery at CEAP or in-company (official course pages).
- `#3db166` (official brand green) and `#1e2d49` (official dark navy) were sampled directly from the live site's CSS on 2026-07-18. `#237a41` is an accessibility-derived dark green used for text and CTA contrast, not a sampled source color.
- `#f4f6f5` is a neutral surface generated to accessibly pair with the sampled colors; it is not present verbatim on the source.
- No external fonts, analytics, forms, map embeds, uploads, or third-party service calls are made automatically. User-activated outbound destinations are the official `wa.me` WhatsApp number and `instagram.com/ceapcuritiba/`.


## Assets added in the 2026-07-26 branding pass

Open Graph preview image drawn from already-verified copy and the project's brand colors; no external source.

| File | Origin | Date added |
|---|---|---|
| `assets/og-image.svg` | Generated locally | 2026-07-26 |
