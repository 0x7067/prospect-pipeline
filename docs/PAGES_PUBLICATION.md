# Public Pages publication

The Pages deployment is a deliberately narrow export pipeline:

```text
sources/<collection>/YYYY-MM-DD/<slug>/index.html
                                  │
                                  ├─ direct project root, or exactly one historical kimi-variant/index.html
                                  ▼
                       scripts/build_pages_site.py
                                  │
                                  ▼
_site/index.html                 landing page
_site/sites/<collection>/<date>/<slug>/  sanitized demo
_site/public-manifest.json       collection/date/slug/public_path only
```

## Discovery and routes

A project is publishable when its direct root contains `index.html`. Four historical Curitiba projects lack a direct entry point but have exactly one `kimi-variant/index.html`; the exporter publishes that variant under the parent slug and never exposes `kimi-variant` in the URL.

Every demo route is:

```text
/prospect-pipeline/sites/<collection>/<YYYY-MM-DD>/<slug>/
```

The collection remains part of the route, so duplicate slugs in different collections are distinct.

The root landing page is a review console rather than a plain index. Every route is a card grouped by business sector, showing the business name and category read from that project's `prospect.json`, plus the collection and date, which is what distinguishes two builds that share a business name. A site published from a `kimi-variant` is marked `variant`. Sector assignment comes from the ordered keyword rules in `SECTOR_RULES`; a project matching none of them is grouped under `Outros`, so a new project is never dropped from the index. Only the business name and category are read from the brief — no other field is copied into the artifact, and `prospect.json` itself is never published.

Each card carries a verdict (`Approved` / `Needs tweaks` / `Redo`), a free-text note, and inline desktop and mobile previews that are only created when requested. A sticky toolbar reports review progress, filters the grid by verdict (including "not reviewed"), and exports the collected feedback as Markdown grouped by verdict, ready to paste back into a chat. A note left without a verdict is exported under "Comments (no verdict given)" rather than being assumed to mean anything.

Review state is held in `localStorage` under `prospect-review-v1`, so it is per-browser, never uploaded, and never part of the build. The console is inert until interacted with: no network calls, no external dependencies, and with JavaScript disabled the cards still list every site with a working link.

## Sanitization boundary

The exporter starts with the selected index page and recursively follows safe local HTML and CSS runtime references: stylesheets, icons, images, video posters, `srcset`, module scripts, CSS `url()`/`@import`, and same-project HTML pages. External URLs, anchors, contact links, and data URLs are not copied. Path traversal and symlink escapes are rejected. Root-absolute local resources are rewritten to the repository Pages base path.

The export does not copy source directories wholesale. Briefs, receipts, manifests, specifications, prompts, source captures, evidence, logs, review/verification screenshots, Markdown, package metadata, lock files, maps, hidden files, and agent state remain private unless a runtime file is explicitly referenced (and metadata/internal formats are rejected by the verifier). Existing `sources/` content is read-only from this workflow.

Every exported HTML page receives:

- a visible accessible notice identifying it as an unofficial concept redesign, not the business's official website;
- `noindex,nofollow,noarchive` robots metadata;
- a capture-phase submit guard, `onsubmit="return false"`, and an accessible disabled-demo message for forms.

## Build and verification

```bash
python3 scripts/build_pages_site.py --sources sources --output _site --base-path /prospect-pipeline/
python3 scripts/verify_pages_site.py --site _site
```

The output directory is deleted and recreated on each build. Sorting, fixed text, and newline normalization make repeated builds byte-stable. The verifier checks manifest routes, required `index.html` files, forbidden internal formats, page notices/noindex metadata, and local HTML/CSS references.

## GitHub Actions boundary

`.github/workflows/pages.yml` runs on pushes to `main` and manual dispatch. It uses least-privilege Pages permissions, builds and verifies `_site`, uploads only `_site` with the maintained Pages artifact action, and deploys that artifact. The workflow never uploads the repository root or `sources/` wholesale. Configure GitHub Pages to use the workflow; `_site` is the only deployable artifact.
