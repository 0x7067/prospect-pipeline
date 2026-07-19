# Prospect Pipeline

Private archival and continuation repository for prospect-generation work and website rebuild evidence. Its GitHub Pages workflow publishes sanitized concept demos only; it never uploads the repository root or `sources/` wholesale.

## Start here

- [Published demo architecture](docs/PAGES_PUBLICATION.md) — discovery, routes, sanitization, and deployment boundaries.
- [Generated catalog](CATALOG.md) — source projects grouped by collection and date.
- [Repository layout](docs/REPOSITORY_LAYOUT.md) — path conventions and source safety boundaries.
- [Catalog generator](scripts/generate_catalog.py) — dependency-free catalog source.
- [Repository checker](scripts/check_repository.py) — deterministic links and freshness checks.

## Directory layout

```text
sources/                    # private archive; never deploy directly
scripts/build_pages_site.py  # dependency-free sanitized exporter
scripts/verify_pages_site.py # dependency-free public artifact checker
_site/                      # generated deployable artifact only
.github/workflows/pages.yml  # builds, verifies, uploads only _site, deploys Pages
docs/
```

## Safe Pages build

Run from the repository root:

```bash
python3 scripts/build_pages_site.py --sources sources --output _site --base-path /prospect-pipeline/
python3 scripts/verify_pages_site.py --site _site
python3 -m unittest discover -s tests -p 'test_*.py'
```

Only `_site` is deployable. Do not configure Pages to publish the repository root or `sources/`. The generated output is rebuilt from scratch, contains only resources referenced by selected demo pages, and includes a safe `public-manifest.json`, landing page, `404.html`, and `.nojekyll`.

## Source collections

- `curitiba-rebuilds` contains dated rebuilds and their archival evidence.
- `prospect-batch` contains batch-generation output and its evidence.

Do not move, rename, delete, or modify existing content under `sources/`. Do not add secrets, runtime state, browser artifacts, caches, or external publication activity.

## Maintenance commands

```bash
python3 scripts/generate_catalog.py
python3 scripts/check_repository.py
git diff --check
git status --short
```

The catalog and Pages exporter are deterministic; a clean second run should produce no diff in tracked source or generated output bytes.
