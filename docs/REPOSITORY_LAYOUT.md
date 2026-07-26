# Repository layout

This document defines the stable organization layer around the prospect
archive. It deliberately does not reorganize the project/site content under
`sources/`.

## Collections

### `sources/curitiba-rebuilds/`

Dated Curitiba rebuilds, reviews, briefs, variants, manifests, and validation
evidence. Its canonical project path is:

```text
sources/curitiba-rebuilds/YYYY-MM-DD/<project-slug>/
```

The date is part of the identity. Keep the full path unchanged because live
promotion code depends on date-preserving canonical paths. Underscore-prefixed
directories such as `_briefs` and `_fixtures` are control/input areas, not
projects.

### `sources/prospect-batch/`

Batch-generation outputs and their evidence. Its equivalent path is:

```text
sources/prospect-batch/YYYY-MM-DD/<project-slug>/
```

This is a separate collection. A project appearing in both collections is
reported separately in the catalog; do not infer that one is a continuation of
the other from the slug alone.

## Artifact taxonomy

- **Project artifacts** — files and directories below a direct
  `YYYY-MM-DD/<project-slug>/` directory.
- **Date-level artifacts** — manifests, specs, scripts, or captures directly
  inside a dated collection directory.
- **Control artifacts** — underscore-prefixed directories/files used for
  briefs, fixtures, comparisons, or other coordination. They remain evidence
  but are not catalog projects. The generator also treats the existing
  date-level `comparisons/` evidence directory as a control area.
- **Repository navigation** — `README.md`, `CATALOG.md`, `docs/`, and
  `scripts/`; these may be maintained without changing source artifacts.
- **Pages publication** — `scripts/build_pages_site.py` creates a sanitized
  `_site/` artifact. Only `_site/` is deployable; never publish the repository
  root or `sources/` directly. See [PAGES_PUBLICATION.md](PAGES_PUBLICATION.md).

## Naming rules

- Collection names are fixed: `curitiba-rebuilds` and `prospect-batch`.
- Dated directories use zero-padded ISO dates: `YYYY-MM-DD`.
- Project slugs are lowercase, hyphen-separated names; preserve existing slugs
  exactly when adding navigation links.
- Use relative Markdown links so navigation works in GitHub and local clones.
- Keep generated output deterministic and sorted by collection, date, and
  project slug.

## What must not move

Do not move, rename, or delete anything under `sources/`. In particular,
preserve every `sources/curitiba-rebuilds/YYYY-MM-DD/<slug>` path. Purely
organizational work belongs in the root documentation, `docs/`, and
`scripts/`, plus the generated root catalog.

### Immutable versus updatable content

Not everything under a project directory has the same status.

**Immutable — never edit or regenerate.** These record what was observed or
shipped at a point in time, and rewriting them would falsify the record:

- Original-site evidence: `original-captures/`, `evidence/`, `screenshots/`,
  `comparison/`, `review/`, `verification/`, `.pipeline-validation-captures/`,
  and date-level `comparisons/`.
- Deployment records: `PUBLICATION_MANIFEST.json` and
  `PUBLICATION_RECEIPT.json`. The receipt pins a deployment date, URL, and the
  manifest hash; regenerating either breaks that chain.
- The dated directory and project slug themselves.

**Updatable by an improvement pass.** The deliverable itself is expected to be
improved over time, so a branding, accessibility, or bug-fix pass may edit:

- `index.html`, `styles.css`, `script.js`, `proposal.html`, `rationale.html`,
  and any additional pages a site serves.
- `assets/` files the pages actually reference, including adding new assets.
- `SOURCE_MANIFEST.md` and `CHECKSUMS.sha256`, which must be updated to stay
  truthful when the files above change. New assets are recorded in the
  manifest with their origin; `CHECKSUMS.sha256` is refreshed so it verifies
  against current bytes.

A pass that edits a site must leave it in a verified state: pages render with
no broken assets or hidden sections, no console errors, and every internal
link resolves.

Do not add secrets, runtime state, generated browser binaries, virtual
environments, `node_modules`, caches, or large build dependencies. Existing
source evidence should remain visible rather than being hidden by broad ignore
patterns.

## Maintenance workflow

```bash
python3 scripts/generate_catalog.py
python3 scripts/check_repository.py
git diff --check
git status --short
```

Review the resulting catalog and source-path diff before committing. The
generator only reads source directories and writes the requested catalog; it
does not mutate project content.