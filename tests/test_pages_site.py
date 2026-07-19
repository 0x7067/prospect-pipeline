from __future__ import annotations

import hashlib
import json
import shutil
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "scripts" / "build_pages_site.py"
VERIFY = ROOT / "scripts" / "verify_pages_site.py"


class PagesSiteTest(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.sources = Path(self.tmp.name) / "sources"
        self.output = Path(self.tmp.name) / "_site"
        direct = self.sources / "alpha" / "2026-01-01" / "same-slug"
        nested_parent = self.sources / "alpha" / "2026-01-02" / "nested-slug"
        duplicate = self.sources / "beta" / "2026-01-01" / "same-slug"
        for path in (direct, nested_parent / "kimi-variant", duplicate):
            (path / "assets").mkdir(parents=True)
        html = """<!doctype html><html><head><link rel='stylesheet' href='css/site.css'>
<link rel='icon' href='assets/icon.svg'><meta charset='utf-8'></head><body>
<form action='/submit'><input name='x'><button>Send</button></form>
<img src='assets/hero.svg' srcset='assets/hero.svg 1x'><a href='/assets/icon.svg'>asset</a>
<script type='module' src='js/app.js'></script></body></html>"""
        css = "body{background:url('../assets/hero.svg')} @import url('theme.css');"
        theme = "@font-face{src:url('../assets/font.woff2')}"
        js = "import './module.js'; console.log('ok')"
        for base in (direct, duplicate):
            (base / "css").mkdir()
            (base / "js").mkdir()
            (base / "css/site.css").write_text(css)
            (base / "css/theme.css").write_text(theme)
            (base / "js/app.js").write_text(js)
            (base / "js/module.js").write_text("export const ok = true")
            (base / "assets/hero.svg").write_text("<svg/>")
            (base / "assets/icon.svg").write_text("<svg/>")
            (base / "assets/font.woff2").write_bytes(b"font")
            (base / "receipt.json").write_text("private")
            (base / "screenshot.png").write_bytes(b"private")
            (base / "index.html").write_text(html)
        variant = nested_parent / "kimi-variant"
        (variant / "styles.css").write_text("body{background:url('assets/nested.svg')}")
        (variant / "assets/nested.svg").write_text("<svg/>")
        (variant / "index.html").write_text("<html><head><link rel='stylesheet' href='styles.css'></head><body>Nested</body></html>")
        (nested_parent / "receipt.json").write_text("private")


    def tearDown(self) -> None:
        self.tmp.cleanup()

    def run_build(self) -> subprocess.CompletedProcess[str]:
        return subprocess.run([sys.executable, str(BUILD), "--sources", str(self.sources), "--output", str(self.output)], text=True, capture_output=True)

    def test_sanitized_deterministic_build_and_verification(self) -> None:
        result = self.run_build()
        self.assertEqual(result.returncode, 0, result.stderr)
        manifest = json.loads((self.output / "public-manifest.json").read_text())
        self.assertEqual(len(manifest["sites"]), 3)
        routes = {site["public_path"] for site in manifest["sites"]}
        self.assertIn("sites/alpha/2026-01-02/nested-slug/", routes)
        self.assertIn("sites/beta/2026-01-01/same-slug/", routes)
        self.assertTrue((self.output / "sites/alpha/2026-01-02/nested-slug/index.html").exists())
        self.assertFalse(any(p.name in {"receipt.json", "screenshot.png"} for p in self.output.rglob("*")))
        exported = (self.output / "sites/alpha/2026-01-01/same-slug/index.html").read_text()
        self.assertIn("unofficial concept redesign", exported.lower())
        self.assertIn('name="robots"', exported)
        self.assertIn("preventDefault", exported)
        self.assertNotIn('action="', exported)
        self.assertNotIn('method="', exported)
        self.assertTrue((self.output / "sites/alpha/2026-01-01/same-slug/js/module.js").exists())
        self.assertIn("prospect-pipeline/sites/alpha/2026-01-01/same-slug/assets/icon.svg", exported)
        first = hashlib.sha256(b"".join(p.read_bytes() for p in sorted(self.output.rglob("*")) if p.is_file())).hexdigest()
        self.assertEqual(self.run_build().returncode, 0)
        second = hashlib.sha256(b"".join(p.read_bytes() for p in sorted(self.output.rglob("*")) if p.is_file())).hexdigest()
        self.assertEqual(first, second)
        checked = subprocess.run([sys.executable, str(VERIFY), "--site", str(self.output)], text=True, capture_output=True)
        self.assertEqual(checked.returncode, 0, checked.stderr)

    def test_path_traversal_and_symlink_escape_are_blocked(self) -> None:
        bad = self.sources / "escape" / "2026-01-01" / "bad"
        bad.mkdir(parents=True)
        (self.sources / "outside.txt").write_text("do not copy")
        (bad / "index.html").write_text("<img src='../outside.txt'>")
        result = self.run_build()
        self.assertNotEqual(result.returncode, 0)
        shutil.rmtree(self.sources / "escape")
        symlink_project = self.sources / "symlink" / "2026-01-01" / "bad"
        symlink_project.mkdir(parents=True)
        (symlink_project / "assets").mkdir()
        link = symlink_project / "assets" / "escape.txt"
        try:
            link.symlink_to(self.sources / "outside.txt")
        except OSError:
            self.skipTest("symlinks unavailable")
        (symlink_project / "index.html").write_text("<img src='assets/escape.txt'>")
        result = self.run_build()
        self.assertNotEqual(result.returncode, 0)


if __name__ == "__main__":
    unittest.main()