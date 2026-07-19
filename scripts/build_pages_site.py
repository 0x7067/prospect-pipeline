#!/usr/bin/env python3
"""Build a sanitized, deterministic GitHub Pages artifact from prospect demos."""
from __future__ import annotations

import argparse
import html
import json
import posixpath
import re
import shutil
from dataclasses import dataclass
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urldefrag, urlsplit, urlunsplit

DEFAULT_BASE = "/prospect-pipeline/"
PUBLIC_PREFIX = "sites/"
EXTERNAL_SCHEMES = {"http", "https", "mailto", "tel", "data", "javascript", "blob", "sms"}
REF_ATTRS = {"src", "href", "poster", "data-src", "data-background", "data-poster"}
CSS_EXTENSIONS = {".css"}
HTML_EXTENSIONS = {".html", ".htm"}
JS_EXTENSIONS = {".js", ".mjs"}


@dataclass(frozen=True)
class Site:
    collection: str
    date: str
    slug: str
    source_root: Path
    nested: bool

    @property
    def public_path(self) -> str:
        return f"sites/{self.collection}/{self.date}/{self.slug}/"


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.references: list[str] = []
        self.inline_css: list[str] = []
        self.in_style = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for key, value in attrs:
            if value is not None and (key.lower() in REF_ATTRS or key.lower() == "srcset"):
                self.references.extend(parse_srcset(value) if key.lower() == "srcset" else [value])
        self.in_style = tag.lower() == "style"

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)
        self.in_style = False

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "style":
            self.in_style = False

    def handle_data(self, data: str) -> None:
        if self.in_style:
            self.inline_css.append(data)

    def handle_entityref(self, name: str) -> None:
        if self.in_style:
            self.inline_css.append(f"&{name};")

    def handle_charref(self, name: str) -> None:
        if self.in_style:
            self.inline_css.append(f"&#{name};")


def parse_srcset(value: str) -> list[str]:
    return [part.strip().split()[0] for part in value.split(",") if part.strip()]


def normalize_base(value: str) -> str:
    value = "/" + value.strip("/") + "/"
    return value if value != "//" else "/"


def discover(sources: Path) -> list[Site]:
    sites: list[Site] = []
    for collection in sorted(p for p in sources.iterdir() if p.is_dir() and not p.is_symlink() and not p.name.startswith((".", "_"))):
        for date in sorted(p for p in collection.iterdir() if p.is_dir() and not p.is_symlink() and not p.name.startswith((".", "_"))):
            for project in sorted(p for p in date.iterdir() if p.is_dir() and not p.is_symlink() and not p.name.startswith((".", "_"))):
                direct = project / "index.html"
                if direct.is_file() and not direct.is_symlink():
                    sites.append(Site(collection.name, date.name, project.name, project, False))
                    continue
                variants = [p for p in project.iterdir() if p.is_dir() and p.name == "kimi-variant" and (p / "index.html").is_file() and not p.is_symlink()]
                if len(variants) == 1:
                    sites.append(Site(collection.name, date.name, project.name, variants[0], True))
    return sites


def local_target(reference: str, current: Path, root: Path, base: str, site: Site) -> tuple[Path | None, str | None]:
    raw = html.unescape(reference).strip().strip("\"'")
    if not raw or raw.startswith("#"):
        return None, None
    parts = urlsplit(raw)
    if parts.scheme.lower() in EXTERNAL_SCHEMES or parts.netloc:
        return None, None
    path = parts.path
    if not path:
        return None, None
    if path.startswith("/"):
        relative = path.lstrip("/")
        target = root / relative
        public = base + site.public_path + relative
    else:
        relative = posixpath.normpath(posixpath.join(current.relative_to(root).parent.as_posix(), path))
        target = root / relative
        public = None
    try:
        resolved = target.resolve(strict=True)
        resolved.relative_to(root.resolve())
    except (FileNotFoundError, RuntimeError, ValueError):
        raise ValueError(f"unsafe or missing local reference {reference!r} in {current}")
    if resolved.is_dir():
        resolved = (resolved / "index.html").resolve(strict=True)
        resolved.relative_to(root.resolve())
    suffix = "" if not parts.query and not parts.fragment else "?" + parts.query if parts.query else ""
    if parts.fragment:
        suffix += "#" + parts.fragment
    if public is not None:
        return resolved, public + suffix
    return resolved, None


def css_references(text: str) -> list[str]:
    found: list[str] = []
    for match in re.finditer(r"(?:url|@import)\s*\(\s*(['\"]?)(.*?)\1\s*\)", text, re.I | re.S):
        found.append(match.group(2).strip())
    return found


def js_references(text: str) -> list[str]:
    """Return static local module imports; URL filtering happens in local_target."""
    pattern = r"(?:\bimport\s*(?:\(|(?:[^;]*?\bfrom\s*)?)|\bexport\s+[^;]*?\bfrom\s*)[\"']([^\"']+)[\"']"
    return [match.group(1).strip() for match in re.finditer(pattern, text, re.S)]


def rewrite_root_absolute(text: str, base: str, site: Site) -> str:
    prefix = base + site.public_path
    # Rewrite only resource/navigation attributes; do not alter form actions.
    text = re.sub(
        r"((?:src|href|poster|data-src|data-background|data-poster)\s*=\s*)([\"'])(/[^\"']*)\2",
        lambda m: m.group(1) + m.group(2) + prefix + m.group(3).lstrip("/") + m.group(2),
        text,
        flags=re.I,
    )
    text = re.sub(r"url\(\s*([\"']?)(/[^\"')\s]+)\1\s*\)", lambda m: "url(" + m.group(1) + prefix + m.group(2).lstrip("/") + m.group(1) + ")", text, flags=re.I)
    return text


def inject_html(text: str, base: str, site: Site) -> str:
    text = rewrite_root_absolute(text, base, site)
    meta = ('<meta name="robots" content="noindex,nofollow,noarchive">'
            '<style id="prospect-demo-safety-style">.prospect-demo-notice{position:relative;z-index:2147483647;'
            'box-sizing:border-box;width:100%;padding:.65rem 1rem;background:#fff4cc;color:#332500;'
            'border-bottom:1px solid #c28a00;font:600 14px/1.4 system-ui,sans-serif;text-align:center}'
            '.prospect-demo-form-message{padding:.5rem;background:#fff4cc;color:#332500}</style>')
    banner = ('<aside class="prospect-demo-notice" role="note" aria-label="Demo notice">'
              "<strong>Unofficial concept redesign.</strong> This is a design demo, not the business's official website.</aside>")
    if re.search(r"<head\b", text, re.I):
        text = re.sub(r"(<head\b[^>]*>)", r"\1" + meta, text, count=1, flags=re.I)
    else:
        text = meta + text
    if re.search(r"<body\b", text, re.I):
        text = re.sub(r"(<body\b[^>]*>)", r"\1" + banner, text, count=1, flags=re.I)
    else:
        text = banner + text
    message = '<p class="prospect-demo-form-message" role="status" hidden>This form is disabled in this concept demo.</p>'
    def disabled_form(match: re.Match[str]) -> str:
        attrs = match.group(1)
        attrs = re.sub(r"\s+(?:action|method|target|onsubmit)\s*=\s*(?:[\"'][^\"']*[\"']|[^\s>]+)", "", attrs, flags=re.I)
        return '<form' + attrs.rstrip() + ' onsubmit="return false" data-prospect-demo-form>' + message
    text = re.sub(r"<form\b([^>]*)>", disabled_form, text, flags=re.I)
    guard = ('<script>document.addEventListener("submit",function(event){event.preventDefault();'
             'var form=event.target;if(form&&form.matches("form")){var message=form.querySelector(".prospect-demo-form-message");'
             'if(message){message.hidden=false;}}},true);</script>')
    if re.search(r"</body>", text, re.I):
        text = re.sub(r"</body>", guard + "</body>", text, count=1, flags=re.I)
    else:
        text += guard
    return text


def copy_site(site: Site, output: Path, base: str) -> None:
    destination = output / site.public_path
    queue: list[tuple[Path, Path]] = [(site.source_root / "index.html", destination / "index.html")]
    copied: set[Path] = set()
    while queue:
        source, target = queue.pop(0)
        source = source.resolve(strict=True)
        source.relative_to(site.source_root.resolve())
        if source in copied:
            continue
        copied.add(source)
        target.parent.mkdir(parents=True, exist_ok=True)
        if source.suffix.lower() in HTML_EXTENSIONS:
            text = source.read_text(encoding="utf-8", errors="strict")
            parser = ReferenceParser()
            parser.feed(text)
            refs = parser.references + [ref for css in parser.inline_css for ref in css_references(css)]
            text = inject_html(text, base, site)
            target.write_text(text, encoding="utf-8", newline="\n")
        elif source.suffix.lower() in CSS_EXTENSIONS:
            text = source.read_text(encoding="utf-8", errors="strict")
            refs = css_references(text)
            text = rewrite_root_absolute(text, base, site)
            target.write_text(text, encoding="utf-8", newline="\n")
        elif source.suffix.lower() in JS_EXTENSIONS:
            text = source.read_text(encoding="utf-8", errors="strict")
            refs = js_references(text)
            target.write_text(text, encoding="utf-8", newline="\n")
        else:
            target.write_bytes(source.read_bytes())
            refs = []
        for reference in refs:
            try:
                child, rewritten = local_target(reference, source, site.source_root, base, site)
            except ValueError as exc:
                # Missing optional favicon/video references should not make an otherwise usable demo unsafe.
                if "unsafe" in str(exc):
                    raise
                continue
            if child is None:
                continue
            relative = child.relative_to(site.source_root.resolve())
            child_target = destination / relative
            queue.append((child, child_target))


def landing(manifest: list[Site], base: str) -> str:
    groups: dict[str, dict[str, list[Site]]] = {}
    for site in manifest:
        groups.setdefault(site.collection, {}).setdefault(site.date, []).append(site)
    lines = ['<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Prospect concept demos</title><style>body{font:16px system-ui,sans-serif;max-width:960px;margin:0 auto;padding:2rem;color:#18202a}a{color:#075985}.notice{padding:1rem;background:#fff4cc;border:1px solid #c28a00;border-radius:8px}li{margin:.45rem 0}</style></head><body><div class="notice" role="note"><strong>Unofficial concept redesign demos.</strong> These are not the businesses\' official websites.</div><main><h1>Prospect concept demos</h1><p>Browse <strong>%d</strong> sanitized demos across <strong>%d</strong> collections.</p>' % (len(manifest), len(groups))]
    for collection in sorted(groups):
        lines.append(f"<section><h2>{html.escape(collection)}</h2>")
        for date in sorted(groups[collection]):
            lines.append(f"<h3>{html.escape(date)}</h3><ul>")
            for site in sorted(groups[collection][date], key=lambda s: s.slug):
                lines.append(f'<li><a href="{base}{site.public_path}">{html.escape(site.slug)}</a></li>')
            lines.append("</ul></section>")
    lines.append('</main></body></html>')
    return "".join(lines)


def build(sources: Path, output: Path, base: str) -> list[Site]:
    sites = discover(sources.resolve())
    if output.exists():
        if output.is_symlink():
            raise ValueError("output must not be a symlink")
        shutil.rmtree(output)
    output.mkdir(parents=True)
    for site in sites:
        copy_site(site, output, base)
    output.joinpath("index.html").write_text(landing(sites, base), encoding="utf-8", newline="\n")
    output.joinpath("404.html").write_text('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive"><title>Demo not found</title></head><body><aside class="prospect-demo-notice" role="note"><strong>Unofficial concept redesign.</strong> This is a design demo, not the business\'s official website.</aside><h1>Demo not found</h1><p><a href="' + base + '">Return to demos</a></p></body></html>\n', encoding="utf-8", newline="\n")
    output.joinpath(".nojekyll").write_bytes(b"")
    safe = [{"collection": s.collection, "date": s.date, "slug": s.slug, "public_path": s.public_path} for s in sites]
    output.joinpath("public-manifest.json").write_text(json.dumps({"sites": safe}, indent=2, sort_keys=True) + "\n", encoding="utf-8", newline="\n")
    return sites


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sources", type=Path, default=Path("sources"))
    parser.add_argument("--output", type=Path, default=Path("_site"))
    parser.add_argument("--base-path", default=DEFAULT_BASE)
    args = parser.parse_args()
    try:
        sites = build(args.sources, args.output, normalize_base(args.base_path))
    except (OSError, ValueError, UnicodeError) as exc:
        parser.error(str(exc))
    print(f"Built {len(sites)} sites in {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
