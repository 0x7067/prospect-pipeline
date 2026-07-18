# Penha Moraes Arquitetura — selected production candidate

The canonical production candidate is **Kimi V2**, selected on 2026-07-18 after comparing the AFK primary build with the Kimi V2 iteration.

## Pages

- `index.html` — public-facing proposed website.
- `proposal.html` — separate proposal, diagnosis, evidence, disclosure, and limitations.
- `rationale.html` — compatibility redirect to `proposal.html`.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/` for the selected site and `http://localhost:8080/proposal.html` for the proposal.

## Verification

The selected Kimi V2 build passed its independent style gate with an average score of 4.17/5. Browser verification passed at 1440x900 and 390x844 for the index and proposal pages with no console errors, page errors, request failures, or horizontal overflow. Mobile menu open/close behavior was verified.

Evidence is preserved in `iterations/kimi/v2/review/`.

## Archive

The former AFK primary build is preserved under `iterations/afk-primary/` as historical comparison material. It is not a second canonical or live candidate.

## Publication boundary

This selection does not authorize publication or outreach. Any external publication requires a fresh, current, build-bound human approval for this selected file set.
