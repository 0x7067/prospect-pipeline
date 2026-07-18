# Product brief

- Business: Arch Odontologia
- Surface: unsolicited static redesign concept
- Audience: infer only from supplied evidence; do not invent segments
- Production voice: clear, credible, useful, and indistinguishable from a real publishable business homepage
- Proposal voice: independent, persuasive, evidence-led, and explicitly non-affiliated
- Anti-references: generic AI landing pages, unsupported claims, copied branding, and fabricated proof

## Evidence boundary

Only the following supplied evidence may support business-specific claims:

- Official HTTPS homepage (archodontologia.com) loaded 2026-07-18 via direct fetch; publishes clinic story ("Oral e Facial"), care-model steps (Acolher / Arquitetar / Realizar / Manter), oral and facial treatment tracks, gallery, team page, contact section, free on-site parking claim, and a WhatsApp CTA.
- Team page (equipe-arch-odontologia) names seven professionals with specialties: Dra. Luana Delmonego (odontologia estética, prótese e reabilitação oral), Dr. Juarez Garcia (endodontia, harmonização facial — responsável técnico), Dr. Felipe Mussi (cirurgia e traumatologia bucomaxilofacial, implantodontia, DTM e dor orofacial), Dr. Fábio Santos (ortodontia e ortopedia facial, ortodontia lingual, Invisalign/Essix aligner), Dra. Sabrina Nodari (odontologia estética, prótese e reabilitação oral), Laura Rosa (drenagem linfática facial pós-operatória, esteticista), Dra. Rafaela Mattana (harmonização facial), and Denys Polishchuk (fotógrafo profissional/retoucher for clinical documentation).
- prospect.json: address Av. Sete de Setembro, 5739, 2º andar, Batel/Água Verde, Curitiba/PR; category clínica odontológica e estética facial; 33 public reviews; treatments include reabilitação, implantes, Invisalign, estética.
- WhatsApp link found in official site markup: `https://api.whatsapp.com/send?phone=5541992770333` (used as the single canonical contact number per prospect.json's note that the code contains conflicting numbers — this is the number embedded in the live WhatsApp CTA link itself, so it is treated as the more current, code-verified one).
- Free on-site parking: "ESTACIONAMENTO GRATUITO NO LOCAL" (official homepage footer copy).
- Community affiliation link to Hospital Pequeno Príncipe present in official footer (no specific partnership language beyond the linked logo — treated only as a footer badge, not narrated as a claim).

## Known problems this concept must fix (from prospect.json, not to be repeated)

- Conflicting WhatsApp numbers across page and blog — this rebuild uses exactly one number, sourced from the live CTA link, everywhere.
- Extremely heavy Wix HTML payload — this rebuild ships plain static HTML/CSS/JS with no build tooling or remote fonts/scripts.
- Broken/empty visual areas and blurred background images — this rebuild uses simple CSS-drawn compositions and text-led sections instead of fabricated photography.
- Cookie banner historically covering the hero before/after proof — this rebuild has no banners, popups, or overlays of any kind.
- Fragmented conversion paths (contact form + newsletter + multiple WhatsApp links) — this rebuild states one phone number and one path consistently, with no live form submission.

## Non-negotiables

- No contact form, newsletter signup, file upload, or outbound network call of any kind.
- No fabricated testimonials, before/after photos, awards, or numeric outcomes.
- Public `index.html` must not mention or link to proposal, redesign, prototype, or disclosure in any form.
