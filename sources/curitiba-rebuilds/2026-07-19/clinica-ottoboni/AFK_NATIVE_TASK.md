Build a complete evidence-bounded static website redesign for the qualified prospect below.

Build the static site in /opt/data/projects/curitiba-rebuilds/2026-07-19/clinica-ottoboni only. Never publish, contact the business, submit forms, or call external services.

MANDATORY FIRST STEP BEFORE WRITING OR MODIFYING ANY SITE CODE:
Invoke the locally provisioned Impeccable skill with `/impeccable craft`. Read PRODUCT.md and DESIGN.md, shape the UX, and write `.impeccable-craft-receipt.json` with schema=1, status=complete, command=craft, skill_commit=44c27a72af98394c32691ba79358811bff86bde6, a stable nonempty builder_id identifying this AFK run, and a truthful summary. If craft cannot complete, write a failure receipt and stop. Builders cannot self-approve any later review.

Use only evidence in prospect.json, PRODUCT.md, and BRAND_SOURCE.md for business-specific facts. Delete unsupported claims rather than hedging, guessing, or presenting placeholders. Required files: index.html, proposal.html, rationale.html, styles.css, script.js, README.md, SITE_REVIEW.md, SOURCE_MANIFEST.md. index.html must be production-realistic with no proposal/redesign/prototype/disclosure language and no link to proposal.html. proposal.html is the separate persuasive independent sales document. rationale.html must only redirect compatibly to proposal.html. If deliverable_tier is early_visual_direction, never mark it production-complete or ready for publication.

SPEED BUDGET: target 20 minutes. Make one coherent design/build pass, one desktop/mobile browser-validation pass, and at most one consolidated repair pass. Do not inspect Impeccable detector source code, repeatedly reopen unchanged pages, or chase one advisory at a time. Run the detector at most twice: once after the complete implementation and once after a single consolidated fix pass. If blocking findings remain after the second run, write a truthful failed build receipt listing them and stop; independent review or a bounded correction task will decide the next action.

RAISED STYLE BAR: This is not a generic category landing page. Before coding, commit to one prospect-specific compositional thesis and implement at least three distinct art-directed moments across the page. Use a deliberate display/body typographic pairing, a documented image-treatment rule, a restrained but intentional color evolution, and a mobile-native rhythm. Reject hero-plus-card-grid defaults, repeated generic cards, decorative gradients, glassmorphism, and familiar SaaS/agency patterns unless the evidence and thesis specifically justify them. Run the logo-removal, competitor-swap, squint, five-second, below-fold, and mobile-native tests; record observations in SITE_REVIEW.md. A beautiful but interchangeable build must fail honestly rather than be marked ready.

After public files are final, run `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py /opt/data/projects/curitiba-rebuilds/2026-07-19/clinica-ottoboni`. This standardized command runs node syntax validation, the pinned detector, and the complete Playwright desktop/mobile matrix, and binds its receipt to the release build. A nonzero exit blocks promotion. If it passes, you may also run `/opt/data/scripts/capture_curitiba_comparison.mjs /opt/data/projects/curitiba-rebuilds/2026-07-19/clinica-ottoboni` for comparison evidence. Do not write approval, human-approval, or publication receipts. Finish only with a truthful ready or failed result.

QUALIFIED PROSPECT BRIEF:
{
  "business_name": "Clínica Ottoboni",
  "official_url": "https://clinicaottoboni.com.br/",
  "run_date": "2026-07-19",
  "slug": "clinica-ottoboni",
  "category": "plastic surgery, dermatology, and dermatofunctional physiotherapy clinic",
  "problems": [
    "The live homepage shows a '+ 0' experience counter under 'Anos de Experiência' despite the page documenting the clinic's 2015 inauguration and physician experience, creating visibly broken trust proof (observed 2026-07-19 at https://clinicaottoboni.com.br/).",
    "The homepage repeats 'Agende sua consulta' as separate generic prompts around the specialties section without a visible specialty-specific decision path, making a prospective patient choose a service from a sparse list before understanding the care journey (observed 2026-07-19 at https://clinicaottoboni.com.br/).",
    "The specialties are presented as three terse headings—'Cirurgia Plástica', 'Dermatologia', and 'Fisioterapia Dermatofuncional'—with repeated generic 'Saiba mais' labels and no treatment summaries in the extracted homepage content (observed 2026-07-19 at https://clinicaottoboni.com.br/).",
    "The page places a newsletter signup and a long body-clinical biography block between the conversion prompts and the practical contact details, while the primary consultation path remains a generic CTA (observed 2026-07-19 at https://clinicaottoboni.com.br/)."
  ],
  "rebuild_angle": "Create a clinically credible consultation pathway organized by patient need, specialty, and clinician expertise, replacing broken proof and generic service labels with clear next steps while preserving the clinic's integrated care positioning.",
  "opportunity_score": 8,
  "active_evidence": "The official domain returned HTTP 200 with the title 'Clínica Ottoboni – Cirurgia Plástica e Dermatologia' on 2026-07-19. The live homepage documents the clinic's 2015 opening, three specialties, named clinicians with CRM/RQE details, Curitiba address at Rua Frederico Cantarelli, 472, and phone numbers (41) 3016-6048 and (41) 99530-5221.",
  "evidence_links": [
    "https://clinicaottoboni.com.br/",
    "https://clinicaottoboni.com.br/servicos/",
    "https://clinicaottoboni.com.br/equipe/dr-eduardo-s-ottoboni/",
    "https://clinicaottoboni.com.br/especialidades/laser-lavieen/"
  ],
  "preserved_strengths": [
    "The integrated positioning across plastic surgery, dermatology, and dermatofunctional physiotherapy.",
    "The personalized, patient-respecting care language and modern integrated infrastructure cue.",
    "The named physician team with credential details that can support clinical trust.",
    "The visible consultation intent, Curitiba location, and two direct phone contacts."
  ],
  "brand_source": {
    "logo_sources": [
      "https://clinicaottoboni.com.br/"
    ],
    "colors": [
      "The official homepage was visually inspected through its live rendering; preserve the site's restrained clinical palette and verify exact tokens from the original mark and page captures during craft rather than inventing a canonical color value."
    ],
    "typography": [
      "The official page uses an editorial, uppercase section-label system, large humanist headline treatment, and numbered section rhythm; exact font family is not asserted and must be re-selected during craft."
    ],
    "personality_words": [
      "personalized",
      "integrated",
      "modern",
      "comfortable",
      "secure",
      "specialized"
    ],
    "strongest_public_language": [
      "Promovendo o Bem-estar",
      "tratamentos avançados",
      "atendimento personalizado",
      "estrutura completa",
      "uma experiência única e integrada"
    ],
    "services": [
      "cirurgia plástica",
      "dermatologia",
      "fisioterapia dermatofuncional",
      "consulta médica",
      "Laser Lavieen"
    ],
    "locations": [
      "Rua Frederico Cantarelli, 472 - Bigorrilho, Curitiba - PR, 80710-240"
    ],
    "contacts": [
      "(41) 3016-6048",
      "(41) 99530-5221",
      "https://clinicaottoboni.com.br/"
    ],
    "visual_assets": [
      "https://clinicaottoboni.com.br/",
      "https://clinicaottoboni.com.br/servicos/",
      "https://clinicaottoboni.com.br/equipe/dr-eduardo-s-ottoboni/",
      "https://clinicaottoboni.com.br/especialidades/laser-lavieen/"
    ],
    "original_screenshots": {
      "desktop": "https://clinicaottoboni.com.br/",
      "mobile": "https://clinicaottoboni.com.br/"
    },
    "equity_to_preserve": [
      "integrated specialty model",
      "personalized care promise",
      "credentialed clinical team",
      "restrained premium-clinical tone",
      "consultation CTA"
    ],
    "weaknesses_not_to_copy": [
      "zero-valued experience counter",
      "generic repeated Saiba mais labels",
      "generic consultation prompts",
      "newsletter and biography content competing with decision flow"
    ]
  },
  "concept_thesis": "Design the clinic as a guided consultation atlas: patients enter through a need, understand the relevant specialty and clinician, then reach a calm, specific appointment invitation without the current broken proof or generic detours.",
  "deliverable_tier": "early_visual_direction"
}

