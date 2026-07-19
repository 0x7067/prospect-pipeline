# Prospect Pipeline

Private archival and continuation repository for prospect-generation work and
website rebuild evidence. It is a navigation layer around the existing source
archive, not a replacement for the live promotion workflow.

## Start here

- [Generated catalog](CATALOG.md) — projects grouped by collection and date.
- [Repository layout](docs/REPOSITORY_LAYOUT.md) — path conventions and safety
  boundaries.
- [Catalog generator](scripts/generate_catalog.py) — dependency-free catalog
  source.
- [Repository checker](scripts/check_repository.py) — deterministic links and
  freshness checks.

## Directory layout

```text
sources/
├── curitiba-rebuilds/
│   ├── YYYY-MM-DD/
│   │   ├── <project>/       # canonical live-promotion project path
│   │   └── date artifacts   # manifests/specifications kept at date level
│   ├── _briefs/             # collection-level control inputs
│   └── _fixtures/           # collection-level fixtures
└── prospect-batch/
    └── YYYY-MM-DD/
        └── <project>/       # batch-generation output
docs/                        # stable repository documentation
scripts/                     # small maintenance utilities
CATALOG.md                   # generated navigation index
```

The two source collections are intentionally distinct:

- `curitiba-rebuilds` contains dated rebuilds and the canonical paths used by
  the Curitiba promotion code. Preserve the complete
  `sources/curitiba-rebuilds/YYYY-MM-DD/<slug>` shape.
- `prospect-batch` contains batch outputs and should not be presented as a
  Curitiba rebuild or merged into that collection.

## Lifecycle

1. Source artifacts are produced under their collection/date/project path.
2. Evidence and control files remain alongside the relevant dated material.
3. Run the catalog generator after adding or removing source projects.
4. Run the checker, review the diff, and commit only the archival/navigation
   changes intended for this repository.

The catalog lists direct project directories only; nested implementation
folders and underscore-prefixed control directories are not promoted to
top-level projects.

## Maintenance commands

Run these from the repository root with Python 3.11+:

```bash
python3 scripts/generate_catalog.py
python3 scripts/check_repository.py
git diff --check
git status --short
```

The generator is deterministic. A clean second run should produce no diff.

## Safety boundaries

- Do not move, rename, delete, or rewrite existing content under `sources/`.
- Do not change the dated Curitiba canonical paths; live promotion depends on
  them.
- Do not publish, deploy, contact prospects, or alter external systems from
  this repository-maintenance workflow.
- Do not add secrets, runtime state, browser binaries, virtual environments,
  `node_modules`, caches, or other machine-local dependencies.

This private repository is for the owner's archival and continuation workflow.
