# Porcini Trattoria

Status: DRAFT / STAGING ONLY

A single responsive hybrid brand-and-utility concept for Porcini Trattoria. The page follows the sourced path: dining occasion → menu and adega evidence → telephone reservation and the verified Batel address.

## Run locally

From this directory, use any static server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. The site has no forms, uploads, tracking, publishing, or automatic external-contact workflow. Telephone links and links to the official menu/homepage are intentionally visible user actions.

## Implementation decisions

- Uses the exact sourced slogan “Comer bem em todos os detalhes.”
- Keeps the three verified occasions: almoço em família, evento empresarial, and jantar romântico.
- Uses menu categories evidenced by the official menu and the concrete “mais de 600 rótulos” cellar fact.
- Presents one verified location and two verified telephone numbers; it does not infer multiple branches.
- Omits hours, email, valet, event-room details, and unsupported superlatives.
- Uses a warm paper, burgundy, and gold direction with an editorial serif and utility sans pairing.
- Keeps locally supplied images as staging references only: they are hash-matched to the official domain, but no reuse license was found.

## Evidence gaps before publication

Image-use permission, publication approval, contact validation, and final browser/detector review remain unresolved. Hours are deliberately omitted because they are absent from the approved seed fact set and operationally volatile. See `SOURCE_MANIFEST.md` and `SITE_REVIEW.md`.
