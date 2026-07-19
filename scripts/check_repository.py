#!/usr/bin/env python3
"""Run deterministic repository navigation and catalog checks."""

from __future__ import annotations

import re
from pathlib import Path
import subprocess
import sys


LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")


def check_links(repo_root: Path, document: Path) -> list[str]:
    errors: list[str] = []
    for target in LINK_RE.findall(document.read_text(encoding="utf-8")):
        target = target.split("#", 1)[0].strip()
        if not target or "://" in target or target.startswith("mailto:"):
            continue
        resolved = (document.parent / target).resolve()
        try:
            resolved.relative_to(repo_root.resolve())
        except ValueError:
            errors.append(f"{document.relative_to(repo_root)} links outside repository: {target}")
            continue
        if not resolved.exists():
            errors.append(f"{document.relative_to(repo_root)} links to missing path: {target}")
    return errors


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    errors: list[str] = []
    for relative in ("README.md", "CATALOG.md"):
        document = repo_root / relative
        if not document.exists():
            errors.append(f"Missing required document: {relative}")
        else:
            errors.extend(check_links(repo_root, document))

    result = subprocess.run(
        [sys.executable, str(repo_root / "scripts" / "generate_catalog.py"), "--check"],
        cwd=repo_root,
        text=True,
        capture_output=True,
        check=False,
    )
    if result.returncode:
        errors.append(result.stderr.strip() or "Catalog freshness check failed")

    if errors:
        print("Repository checks failed:", file=sys.stderr)
        print("\n".join(f"- {error}" for error in errors), file=sys.stderr)
        return 1
    print("Repository checks passed: README/catalog links and catalog freshness are valid.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())