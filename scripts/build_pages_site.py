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


# Sector rules are evaluated in order; the first match wins. Keeping this
# ordered (rather than a per-slug table) means new projects are grouped
# automatically, and anything unmatched lands in the final catch-all.
SECTOR_RULES: tuple[tuple[str, tuple[str, ...]], ...] = (
    ("Odontologia", ("odonto", "dental", "dentist")),
    ("Veterinária", ("veterin",)),
    # Architecture is checked before education: several studios describe
    # themselves by the sectors they build for ("arquitetura para escolas"),
    # and the practice is what should group them.
    ("Arquitetura e engenharia", ("arquitetur", "architecture", "engenharia", "engineering", "interiores", "construç")),
    ("Educação", ("curso", "educa", "ensino", "escola", "colegio", "colégio", "school", "training", "treinamento", "formação", "pedagog")),
    ("Serviços profissionais", ("contabil", "contábil", "accounting", "advocacia", "advogad", "jurídic", "juridic", "coworking", "fiscal")),
    ("Saúde e bem-estar", ("clinic", "clínic", "medic", "médic", "saúde", "saude", "health", "psiqui", "psicolog", "neuro", "cirurgia", "surgery", "dermat", "fisioterap", "homeopat", "estétic", "estetic", "elder-care", "home-care", "cuidador")),
    ("Hospedagem", ("hotel", "pousada", "hospedagem", "hospitality")),
    ("Gastronomia e eventos", ("restaurante", "restaurant", "trattoria", "buffet", "catering", "gastronom", "peixe", "frutos do mar", "churrasc", "eventos")),
    ("Casa e interiores", ("marcenaria", "móveis", "moveis", "jardim", "landscap", "garden")),
)
SECTOR_FALLBACK = "Outros"


def site_metadata(site: Site) -> tuple[str, str]:
    """Return (business name, category) for a site, falling back to its slug.

    The brief lives beside the site, or one level up when the built page is a
    nested variant. Only the display name and category are read; the rest of
    the brief stays private and is never copied into the artifact.
    """
    for candidate in (site.source_root / "prospect.json", site.source_root.parent / "prospect.json"):
        try:
            data = json.loads(candidate.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            continue
        if isinstance(data, dict):
            name = str(data.get("business_name") or "").strip()
            category = str(data.get("category") or "").strip()
            if name:
                return name, category
    return site.slug, ""


def sector_for(name: str, category: str, slug: str) -> str:
    haystack = f"{category} {slug} {name}".lower()
    for sector, keywords in SECTOR_RULES:
        if any(keyword in haystack for keyword in keywords):
            return sector
    return SECTOR_FALLBACK


LANDING_STYLE = (
    ":root{color-scheme:light dark;--bg:#f6f7f9;--fg:#18202a;--muted:#5b6672;--card:#fff;--line:#e2e6eb;"
    "--accent:#075985;--ok:#1a7f47;--tweak:#a8600a;--redo:#b3261e}"
    "@media(prefers-color-scheme:dark){:root{--bg:#11151a;--fg:#e8ecf1;--muted:#9aa6b2;--card:#171d24;"
    "--line:#28313b;--accent:#7cc4ec;--ok:#5cc98d;--tweak:#e0a94f;--redo:#f28b82}}"
    "*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);"
    "font:16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}"
    ".wrap{max-width:1180px;margin:0 auto;padding:1.25rem 1.25rem 5rem}"
    ".notice{padding:.8rem 1rem;background:#fff4cc;border:1px solid #c28a00;border-radius:10px;color:#3d2c00;font-size:.9rem}"
    "h1{font-size:clamp(1.5rem,4vw,2rem);margin:1.2rem 0 .3rem;letter-spacing:-.01em}"
    ".lede{color:var(--muted);margin:0 0 1rem;font-size:.95rem}"
    ".bar{position:sticky;top:0;z-index:20;display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;"
    "padding:.7rem 0;margin-bottom:.5rem;background:var(--bg);border-bottom:1px solid var(--line)}"
    ".bar .grow{flex:1 1 auto}"
    ".progress{font-weight:600;font-size:.9rem}"
    ".progress em{font-style:normal;color:var(--muted);font-weight:400}"
    "button,.btn{font:inherit;font-size:.83rem;padding:.34rem .7rem;border:1px solid var(--line);"
    "border-radius:999px;background:var(--card);color:inherit;cursor:pointer;text-decoration:none;display:inline-block}"
    "button:hover,.btn:hover{border-color:var(--accent)}"
    "button.on{background:var(--accent);border-color:var(--accent);color:#fff}"
    ".sector{margin:1.8rem 0 0}"
    ".sector h2{font-size:1rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);"
    "margin:0 0 .8rem;padding-bottom:.45rem;border-bottom:1px solid var(--line)}"
    ".sector h2 span{font-weight:400;text-transform:none;letter-spacing:0}"
    ".grid{display:grid;gap:.85rem;align-items:start;grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}"
    ".card{display:flex;flex-direction:column;gap:.45rem;padding:.9rem 1rem;background:var(--card);"
    "border:1px solid var(--line);border-left:4px solid var(--line);border-radius:12px}"
    ".card[data-status=approved]{border-left-color:var(--ok)}"
    ".card[data-status=tweak]{border-left-color:var(--tweak)}"
    ".card[data-status=redo]{border-left-color:var(--redo)}"
    ".card h3{margin:0;font-size:1rem;line-height:1.3}"
    ".card .cat{color:var(--muted);font-size:.85rem}"
    ".card .meta{color:var(--muted);font-size:.74rem;letter-spacing:.03em}"
    ".flag{display:inline-block;margin-left:.4rem;padding:0 .38rem;border:1px solid var(--line);"
    "border-radius:999px;font-size:.7rem;color:var(--muted)}"
    ".row{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center}"
    ".rate button[data-status=approved].on{background:var(--ok);border-color:var(--ok)}"
    ".rate button[data-status=tweak].on{background:var(--tweak);border-color:var(--tweak)}"
    ".rate button[data-status=redo].on{background:var(--redo);border-color:var(--redo)}"
    ".note{width:100%;font:inherit;font-size:.87rem;padding:.5rem .6rem;border:1px solid var(--line);"
    "border-radius:8px;background:var(--bg);color:inherit;resize:vertical;min-height:2.4rem}"
    ".note:focus{outline:2px solid var(--accent);outline-offset:1px}"
    ".frame{border:1px solid var(--line);border-radius:8px;overflow:hidden;background:#fff;height:280px}"
    ".frame iframe{border:0;transform-origin:0 0;display:block}"
    "#out textarea{width:100%;min-height:220px;font:13px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;"
    "padding:.7rem;border:1px solid var(--line);border-radius:10px;background:var(--card);color:inherit}"
    ".hide{display:none!important}"
    "@media print{.bar,.actions,.rate,.frame{display:none!important}}"
)

# Review console. Kept dependency-free and inert on load: state lives in
# localStorage, previews are only created when asked for, and the export is
# plain Markdown so it can be pasted straight back into a chat.
LANDING_SCRIPT = """
(function(){
var KEY='prospect-review-v1';
var state={};
try{state=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){state={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}}
var cards=[].slice.call(document.querySelectorAll('.card'));
function entry(k){return state[k]||(state[k]={})}
function reviewed(){return cards.filter(function(c){var e=state[c.dataset.key]||{};return e.status||(e.note||'').trim()}).length}
function paint(){
  cards.forEach(function(c){
    var e=state[c.dataset.key]||{};
    if(e.status){c.setAttribute('data-status',e.status)}else{c.removeAttribute('data-status')}
    c.querySelectorAll('.rate button').forEach(function(b){b.classList.toggle('on',b.dataset.status===e.status)});
    var n=c.querySelector('.note'); if(document.activeElement!==n){n.value=e.note||''}
  });
  var done=reviewed();
  document.getElementById('count').innerHTML=done+' / '+cards.length+' <em>reviewed</em>';
  filter();
}
function filter(){
  var f=document.querySelector('.filters button.on').dataset.filter;
  cards.forEach(function(c){
    var e=state[c.dataset.key]||{}, s=e.status||'', show;
    if(f==='all'){show=true}
    else if(f==='pending'){show=!s&&!(e.note||'').trim()}
    else{show=s===f}
    c.classList.toggle('hide',!show);
  });
  document.querySelectorAll('.sector').forEach(function(sec){
    var any=sec.querySelectorAll('.card:not(.hide)').length;
    sec.classList.toggle('hide',!any);
  });
}
document.addEventListener('click',function(ev){
  var b=ev.target.closest('button'); if(!b)return;
  if(b.dataset.status){
    var c=b.closest('.card'), e=entry(c.dataset.key);
    e.status = e.status===b.dataset.status ? '' : b.dataset.status;
    save(); paint(); return;
  }
  if(b.dataset.filter){
    document.querySelectorAll('.filters button').forEach(function(x){x.classList.toggle('on',x===b)});
    filter(); return;
  }
  if(b.classList.contains('pv')){
    var card=b.closest('.card'), box=card.querySelector('.frame');
    if(box){box.remove();b.textContent='Preview';return}
    box=document.createElement('div'); box.className='frame';
    var mobile=b.dataset.w==='m', w=mobile?390:1280, h=mobile?1400:1000;
    var scale=(card.clientWidth-34)/w, f=document.createElement('iframe');
    f.src=card.dataset.href; f.width=w; f.height=h;
    f.loading='lazy'; f.setAttribute('title','Preview of '+card.dataset.name);
    f.style.transform='scale('+scale+')';
    box.style.height=Math.min(280,Math.round(h*scale))+'px';
    box.appendChild(f); card.appendChild(box); b.textContent='Hide';
    return;
  }
});
document.addEventListener('input',function(ev){
  if(!ev.target.classList.contains('note'))return;
  entry(ev.target.closest('.card').dataset.key).note=ev.target.value;
  save();
  var done=reviewed();
  document.getElementById('count').innerHTML=done+' / '+cards.length+' <em>reviewed</em>';
});
document.getElementById('copy').addEventListener('click',function(){
  var buckets={redo:[],tweak:[],approved:[],comment:[]};
  var labels={redo:'Redo',tweak:'Needs tweaks',approved:'Approved',comment:'Comments (no verdict given)'};
  var any=false;
  cards.forEach(function(c){
    var e=state[c.dataset.key]||{}, note=(e.note||'').trim();
    if(!e.status&&!note)return;
    any=true;
    var line='- **'+c.dataset.name+'** ('+c.dataset.sector+')'+(note?' — '+note:'');
    buckets[e.status||'comment'].push(line);
  });
  var md='# Site review feedback\\n\\n'+reviewed()+' of '+cards.length+' sites reviewed.\\n';
  ['redo','tweak','approved','comment'].forEach(function(k){
    if(!buckets[k].length)return;
    md+='\\n## '+labels[k]+' ('+buckets[k].length+')\\n\\n'+buckets[k].join('\\n')+'\\n';
  });
  if(!any){md='No feedback recorded yet.'}
  var out=document.getElementById('out'), ta=out.querySelector('textarea');
  ta.value=md; out.hidden=false; ta.focus(); ta.select();
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(md).then(function(){
      var s=document.getElementById('status'); s.textContent='Copied to clipboard - paste it back to Claude.';
    },function(){});
  }
  out.scrollIntoView({block:'nearest'});
});
document.getElementById('clear').addEventListener('click',function(){
  if(!confirm('Clear all recorded verdicts and notes?'))return;
  state={};save();paint();
  document.getElementById('out').hidden=true;document.getElementById('status').textContent='';
});
paint();
})();
"""


def landing(manifest: list[Site], base: str) -> str:
    entries = []
    for site in manifest:
        name, category = site_metadata(site)
        entries.append((sector_for(name, category, site.slug), name, category, site))

    sectors: dict[str, list[tuple[str, str, Site]]] = {}
    for sector, name, category, site in entries:
        sectors.setdefault(sector, []).append((name, category, site))

    order = [sector for sector, _ in SECTOR_RULES if sector in sectors]
    if SECTOR_FALLBACK in sectors:
        order.append(SECTOR_FALLBACK)

    esc = html.escape
    out = [
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="robots" content="noindex,nofollow,noarchive">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        "<title>Concept demo review</title><style>" + LANDING_STYLE + "</style></head><body><div class=\"wrap\">"
        '<div class="notice" role="note"><strong>Unofficial concept redesign demos.</strong> '
        "These are not the businesses' official websites.</div><main>"
        "<h1>Concept demo review</h1>"
        f'<p class="lede">{len(manifest)} sites, grouped by sector. Give each a verdict, add a note where '
        "something should change, then use <strong>Copy feedback</strong> and paste the result back to Claude. "
        "Your verdicts are stored in this browser only.</p>"
        '<div class="bar">'
        '<span class="progress" id="count">0 / 0 <em>reviewed</em></span>'
        '<span class="filters row">'
        '<button type="button" data-filter="all" class="on">All</button>'
        '<button type="button" data-filter="pending">Not reviewed</button>'
        '<button type="button" data-filter="redo">Redo</button>'
        '<button type="button" data-filter="tweak">Needs tweaks</button>'
        '<button type="button" data-filter="approved">Approved</button>'
        "</span><span class=\"grow\"></span>"
        '<button type="button" id="copy">Copy feedback</button>'
        '<button type="button" id="clear">Clear</button>'
        "</div>"
        '<div id="out" hidden><p id="status" class="lede"></p><textarea readonly aria-label="Feedback to copy"></textarea></div>'
    ]
    for sector in order:
        items = sorted(sectors[sector], key=lambda row: (row[0].casefold(), row[2].public_path))
        out.append(
            f'<section class="sector"><h2>{esc(sector)} <span>({len(items)})</span></h2><div class="grid">'
        )
        for name, category, site in items:
            href = base + site.public_path
            flag = '<span class="flag">variant</span>' if site.nested else ""
            out.append(
                f'<article class="card" data-key="{esc(site.public_path, True)}" '
                f'data-name="{esc(name, True)}" data-sector="{esc(sector, True)}" data-href="{esc(href, True)}">'
                f"<h3>{esc(name)}</h3>"
            )
            if category:
                out.append(f'<span class="cat">{esc(category)}</span>')
            out.append(
                f'<span class="meta">{esc(site.collection)} · {esc(site.date)}{flag}</span>'
                f'<span class="row actions">'
                f'<a class="btn" href="{href}" target="_blank" rel="noopener">Open ↗</a>'
                f'<button type="button" class="pv" data-w="d">Preview</button>'
                f'<button type="button" class="pv" data-w="m">Mobile</button>'
                f"</span>"
                f'<span class="row rate" role="group" aria-label="Verdict for {esc(name, True)}">'
                f'<button type="button" data-status="approved">Approved</button>'
                f'<button type="button" data-status="tweak">Needs tweaks</button>'
                f'<button type="button" data-status="redo">Redo</button>'
                f"</span>"
                f'<textarea class="note" rows="2" placeholder="What should change?" '
                f'aria-label="Notes for {esc(name, True)}"></textarea>'
                "</article>"
            )
        out.append("</div></section>")
    out.append("</main></div><script>" + LANDING_SCRIPT + "</script></body></html>")
    return "".join(out)


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
