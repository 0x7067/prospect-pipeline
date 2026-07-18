# Penha Moraes Arquitetura — reconstruction study

Evidence-bounded static redesign pilot for the verified public website of Penha Moraes Arquitetura.

## Pages

- `index.html` — production-realistic, public-facing proposed website. It intentionally contains no pitch, redesign, diagnostic, or non-affiliation language.
- `proposal.html` — separate proposal, diagnosis, evidence, redesign rationale, disclosure, and limitations.
- `rationale.html` — compatibility redirect to `proposal.html`.

## Local preview

Serve this directory with any static HTTP server; for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` for the proposed production site and `http://localhost:8080/proposal.html` for the proposal.

## Evidence and safeguards

- Business-specific statements are derived from `prospect.json`, `PRODUCT.md`, and the preserved source brief.
- The production page does not claim that editorial architecture photography depicts the firm's work.
- Contact actions use direct `tel:` and `mailto:` links; there is no simulated form submission.
- The unsolicited-study disclosure and non-affiliation statement are confined to `proposal.html`.
- Publication requires a current, build-bound approval and verification record.

## Verification state

The current build must be rechecked whenever a production file or proposed screenshot changes. Historical review and publication receipts remain build-bound and do not validate later edits.
