# Repair receipt

- **Project:** `/opt/data/projects/curitiba-rebuilds/2026-07-17/anarco-restaurante`
- **Repair:** Added an inline/static-detector line-height fallback in `index.html`, including explicit pixel line-height pairs for long-form text. The linked `styles.css` remains unchanged because its existing typography rules already pass browser validation.
- **Validation:** `/opt/data/.venvs/curitiba/bin/python /opt/data/scripts/validate_curitiba_site.py ...`
- **Result:** `status=pass` — detector clean, browser matrix passed, Node check passed.
- **Build ID:** `69b16c0b276ae3276dab4f44ecef7a8c7b807e779ffea191d9a9d634803d6c9d`
- **Pipeline state:** Updated `.pipeline-task.json` from `failed` to `completed`.
- **Scope:** Local repair only; nothing was published or pushed.
- **Timestamp:** 2026-07-25T17:01:14-03:00
