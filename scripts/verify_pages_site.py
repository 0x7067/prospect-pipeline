#!/usr/bin/env python3
"""Verify the sanitized Pages artifact without third-party dependencies."""
from __future__ import annotations

import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

BASE = "/prospect-pipeline/"
EXTERNAL = {"http", "https", "mailto", "tel", "data", "javascript", "blob", "sms"}
FORBIDDEN_EXTENSIONS = {".md", ".markdown", ".map", ".lock", ".spec", ".log", ".prompt"}
FORBIDDEN_DIRS = {"evidence", "review", "verification", "comparison", ".agents", ".claude", ".github"}
TRACKER_PATTERN = re.compile(r"googletagmanager|google-analytics|connect\.facebook\.net|static\.hotjar\.com|clarity\.ms|plausible\.io|mixpanel", re.I)


class HTMLRefs(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.refs: list[str] = []
        self.style = False
        self.styles: list[str] = []
        self.forms: list[dict[str, str | None]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() == "form":
            self.forms.append(dict(attrs))
        for key, value in attrs:
            if value and key.lower() in {"src", "href", "poster", "data-src", "data-background", "data-poster"}:
                self.refs.append(value)
            if value and key.lower() == "srcset":
                self.refs.extend(part.strip().split()[0] for part in value.split(",") if part.strip())
        self.style = tag.lower() == "style"

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "style":
            self.style = False

    def handle_data(self, data: str) -> None:
        if self.style:
            self.styles.append(data)


def css_refs(text: str) -> list[str]:
    return [m.group(2).strip() for m in re.finditer(r"(?:url|@import)\s*\(\s*(['\"]?)(.*?)\1\s*\)", text, re.I | re.S)]


def check_ref(ref: str, current: Path, root: Path, errors: list[str]) -> None:
    ref = ref.strip().strip("\"'")
    if not ref or ref.startswith("#"):
        return
    parts = urlsplit(ref)
    if parts.scheme.lower() in EXTERNAL or parts.netloc:
        return
    raw = parts.path
    rooted = raw.startswith(BASE)
    if rooted:
        raw = raw[len(BASE):]
    elif raw.startswith("/"):
        # A root absolute URL not rewritten to the Pages base is a broken local route.
        errors.append(f"{current.relative_to(root)} has unscoped root URL: {ref}")
        return
    candidate = ((root if rooted else current.parent) / raw).resolve()
    try:
        candidate.relative_to(root.resolve())
    except ValueError:
        errors.append(f"{current.relative_to(root)} escapes _site: {ref}")
        return
    if not candidate.exists():
        errors.append(f"{current.relative_to(root)} references missing local path: {ref}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", type=Path, default=Path("_site"))
    args = parser.parse_args()
    root = args.site.resolve()
    errors: list[str] = []
    manifest_path = root / "public-manifest.json"
    if not manifest_path.exists():
        errors.append("missing public-manifest.json")
        sites = []
    else:
        data = json.loads(manifest_path.read_text())
        sites = data.get("sites", [])
        for site in sites:
            route = site.get("public_path", "")
            index = root / route / "index.html"
            if not index.is_file():
                errors.append(f"manifest route has no index.html: {route}")
    for path in root.rglob("*"):
        if path.is_dir():
            if path.name in FORBIDDEN_DIRS:
                errors.append(f"forbidden internal directory in artifact: {path.relative_to(root)}")
            continue
        if path.name.startswith(".") and path.name != ".nojekyll":
            errors.append(f"hidden file in artifact: {path.relative_to(root)}")
        if path.suffix.lower() in FORBIDDEN_EXTENSIONS or path.name in {"package.json", "package-lock.json", "yarn.lock", "pnpm-lock.yaml"}:
            errors.append(f"forbidden internal file in artifact: {path.relative_to(root)}")
        if path.suffix.lower() == ".json" and path.name != "public-manifest.json":
            errors.append(f"metadata JSON in artifact: {path.relative_to(root)}")
        if path.suffix.lower() in {".html", ".htm"}:
            text = path.read_text(encoding="utf-8")
            if TRACKER_PATTERN.search(text):
                errors.append(f"tracker reference in artifact: {path.relative_to(root)}")
            if not re.search(r'<meta[^>]+name=["\']robots["\'][^>]+noindex,nofollow,noarchive', text, re.I):
                errors.append(f"missing noindex meta: {path.relative_to(root)}")
            if "unofficial concept redesign" not in text.lower():
                errors.append(f"missing demo notice: {path.relative_to(root)}")
            parser_html = HTMLRefs()
            parser_html.feed(text)
            for form in parser_html.forms:
                if any(name in form for name in ("action", "method", "target")):
                    errors.append(f"active form endpoint in artifact: {path.relative_to(root)}")
                if form.get("onsubmit") != "return false" or "data-prospect-demo-form" not in form:
                    errors.append(f"form is not disabled: {path.relative_to(root)}")
            for ref in parser_html.refs + [r for css in parser_html.styles for r in css_refs(css)]:
                check_ref(ref, path, root, errors)
        elif path.suffix.lower() == ".css":
            for ref in css_refs(path.read_text(encoding="utf-8")):
                check_ref(ref, path, root, errors)
        elif path.suffix.lower() in {".js", ".mjs"} and TRACKER_PATTERN.search(path.read_text(encoding="utf-8")):
            errors.append(f"tracker reference in artifact: {path.relative_to(root)}")
    if errors:
        print("Pages verification failed:")
        print("\n".join(f"- {error}" for error in sorted(set(errors))))
        return 1
    print(f"Pages verification passed: {len(sites)} routes, safe artifact at {root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
