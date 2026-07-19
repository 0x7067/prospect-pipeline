# Site review

## Scope

Current local static concept reviewed against `PRODUCT.md`, `DESIGN.md`, and `prospect.json`. This document records implementation checks only; it is not an approval, publication authorization, audit receipt, or visual verdict.

## Evidence boundary

- The page identifies the business only as an architecture and interiors office in Curitiba/PR.
- Public phone, contact e-mail, careers e-mail, street address, neighborhood, city, and state match the supplied prospect record.
- The room number is omitted because the supplied sources conflict.
- No WhatsApp number, team roster, project, client, award, testimonial, metric, credential, process, or outcome is claimed.
- Every portfolio example and architectural photograph is visibly labeled as illustrative and not attributed to the firm.

## Experience coverage

- Semantic landmarks, skip link, heading order, labeled controls, visible focus, and descriptive alternative text.
- Responsive sticky navigation with an accessible mobile toggle and Escape handling.
- Keyboard-operable portfolio filters with `aria-pressed` state.
- Inert briefing form with required, e-mail error, and success states; no endpoint, request, or storage.
- Local self-hosted fonts and images; no tracking or runtime third-party dependency.
- Content remains visible without JavaScript; motion respects `prefers-reduced-motion`.

## Remaining limitations

- Portfolio content is deliberately demonstrative because no approved project inventory was supplied.
- Contact actions using `tel:` and `mailto:` can open local device applications; they do not submit data automatically.
- Pinned detector status is clean (schema 3, exit 0, zero findings in raw and design-aware modes) for build `ed761e198928cf25d1df31d09b1962864d2e06bd9a28ebb086635ea34a2ece43`, receipt dated 2026-07-19T13:39:23Z.
- Current and proposed desktop/mobile captures completed successfully. The proposed build had no console errors, page errors, failed requests, or horizontal overflow; the current public site emitted its own mixed-content and analytics request errors during capture.
- Visual inspection found and corrected a reveal-animation defect that had hidden portfolio cards in long-page captures; the final captures show all four examples.
- This local study is not authorized for publication or outreach.
