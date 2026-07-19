# Penha Moraes Arquitetura — static redesign concept

Evidence-bounded, framework-free redesign study for the verified public presence of Penha Moraes Arquitetura. This package is local-only and is not affiliated with or endorsed by the business.

## Files

- `index.html` — complete proposed visitor experience.
- `rationale.html` — evidence, design decisions, safeguards, and limitations.
- `styles.css` — responsive visual system and component states.
- `script.js` — progressive mobile navigation, portfolio filtering, inert form validation, and motion.
- `SITE_REVIEW.md` — current implementation review and validation notes.

## Preview

From this directory:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/`. No build step or dependency installation is required.

## Evidence and safety

- Business-specific facts come only from `prospect.json` and `PRODUCT.md`.
- Portfolio images and labels are explicitly presented as editorial interface examples, not as work by the firm.
- The briefing form validates only in the browser. It does not transmit or store information.
- There are no analytics, trackers, third-party scripts, remote fonts, runtime APIs, or form endpoints.
- Phone and e-mail links use the supplied public contact details. The address omits the disputed room number.
- The pages are marked `noindex, nofollow` and must not be published without a separate authorized process.

## Manual checks

Test the mobile menu with keyboard and touch, all portfolio filters, required and successful form states, reduced-motion behavior, and layouts at narrow mobile and desktop widths.
