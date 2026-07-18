# Contabilidade Curitiba — candidate hybrid site

Status: **DRAFT / STAGING ONLY**. This is one implementation, not a set of competing variants.

## What is included

- `index.html`: accessible, mobile-first homepage with the order hero → services → about → contact.
- `proposal.html`: useful proposal artifact documenting the direction and validation gates.
- `rationale.html`: redirect-only compatibility page to `proposal.html`.
- `styles.css`: self-contained visual system; no external fonts, imagery, trackers, or asset dependencies.
- `script.js`: restrained accessible mobile navigation only.

## Content and evidence

Business facts are limited to the verified local brief in `CONTENT_BRIEF.md` and its sources (`prospect.json`, the local audit, and `SOURCE_MANIFEST.md`). The site uses the published name, four documented service areas, Ahú address, and published contact channels. The experience and CRC statements remain explicitly attributed to the current site; no number, team, CNPJ, hours, testimonials, results, or unsupported service claims were added.

The accent palette, serif/system type pairing, linework, and circular motif are provisional design choices. They are not presented as an existing company identity. No logo, monogram, photograph, or external asset was invented or loaded.

## Local verification

Run from this directory:

```sh
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`. The site is static and has no build step. Before production, reconfirm contact data, CRC details, founding-date claim, service scope, brand assets/licences, and privacy requirements as listed in `CONTENT_BRIEF.md`.

## Safety boundaries

The WhatsApp link is rendered but not submitted or tested by this task. No forms, analytics, automatic network calls, publishing, uploads, or external contact actions are implemented.
