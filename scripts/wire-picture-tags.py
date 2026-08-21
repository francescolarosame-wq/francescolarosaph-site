#!/usr/bin/env python3
"""
Wires <picture><source avif><source webp><img fallback></picture> into every
<img> tag whose src matches an entry in assets/images-optimized/manifest.json,
and upgrades matching inline `background-image:url('...')` declarations to a
cascading image-set() with AVIF/WebP sources (falling back safely to the
original url() for browsers that don't understand image-set()).

Originals are never touched — this only rewrites HTML markup to reference the
already-generated WebP/AVIF variants (see optimize-referenced-images.py).
Idempotent: skips <img> tags already wrapped in <picture>.
"""
import os
import re
import glob
import json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

SRC_ROOT = "assets/images"
OUT_ROOT = "assets/images-optimized"
SIZES_DEFAULT = "(max-width: 700px) 100vw, 960px"

manifest = json.load(open(os.path.join(OUT_ROOT, "manifest.json")))
# manifest keys are like "assets/images/clients/x/y.jpg" relative to repo root

def variant_paths(src_key, html_dir):
    """Return (avif_srcset, webp_srcset) as relative paths from html_dir."""
    entry = manifest[src_key]
    rel = os.path.relpath(src_key, SRC_ROOT)
    base = os.path.splitext(rel)[0]
    widths = entry["widths"]
    avif_parts = []
    webp_parts = []
    for w in widths:
        avif_full = os.path.join(OUT_ROOT, f"{base}-{w}w.avif")
        webp_full = os.path.join(OUT_ROOT, f"{base}-{w}w.webp")
        if os.path.isfile(avif_full):
            rel_path = os.path.relpath(avif_full, html_dir)
            avif_parts.append(f"{rel_path} {w}w")
        if os.path.isfile(webp_full):
            rel_path = os.path.relpath(webp_full, html_dir)
            webp_parts.append(f"{rel_path} {w}w")
    return ", ".join(avif_parts), ", ".join(webp_parts)

def resolve_src_key(html_dir, src_attr):
    path = src_attr.split("?")[0]
    full = os.path.normpath(os.path.join(html_dir, path))
    return full if full in manifest else None

img_tag_re = re.compile(r'<img\b([^>]*?)\bsrc="([^"]+)"([^>]*)/?>', re.I)
bg_re = re.compile(r"background-image:\s*url\('([^']+)'\)", re.I)

def process_img_match(m, html_dir, already_picture_ranges, full_content, match_start):
    before_attrs, src_attr, after_attrs = m.group(1), m.group(2), m.group(3)
    key = resolve_src_key(html_dir, src_attr)
    if not key:
        return None
    avif_srcset, webp_srcset = variant_paths(key, html_dir)
    if not avif_srcset and not webp_srcset:
        return None
    full_img = m.group(0)
    sources = ""
    if avif_srcset:
        sources += f'<source type="image/avif" srcset="{avif_srcset}" sizes="{SIZES_DEFAULT}">\n    '
    if webp_srcset:
        sources += f'<source type="image/webp" srcset="{webp_srcset}" sizes="{SIZES_DEFAULT}">\n    '
    return f"<picture>\n    {sources}{full_img}\n  </picture>"

def process_html(fname):
    content = open(fname, encoding="utf-8").read()
    html_dir = os.path.dirname(fname) or "."
    changed = False

    # Skip <img> tags already inside a <picture> block
    picture_spans = [m.span() for m in re.finditer(r"<picture\b.*?</picture>", content, re.S | re.I)]

    def in_picture(pos):
        return any(s <= pos < e for s, e in picture_spans)

    out = []
    last_end = 0
    for m in img_tag_re.finditer(content):
        if in_picture(m.start()):
            continue
        replacement = process_img_match(m, html_dir, picture_spans, content, m.start())
        if replacement is None:
            continue
        out.append(content[last_end:m.start()])
        out.append(replacement)
        last_end = m.end()
        changed = True
    out.append(content[last_end:])
    content = "".join(out) if changed else content

    # Background-image url() -> image-set() cascade
    def bg_repl(m):
        path = m.group(1)
        key = resolve_src_key(html_dir, path)
        if not key:
            return m.group(0)
        avif_srcset, webp_srcset = variant_paths(key, html_dir)
        entry_widths = manifest[key]["widths"]
        if not entry_widths:
            return m.group(0)
        biggest = max(entry_widths)
        rel_base = os.path.splitext(os.path.relpath(key, SRC_ROOT))[0]
        avif_full = os.path.join(OUT_ROOT, f"{rel_base}-{biggest}w.avif")
        webp_full = os.path.join(OUT_ROOT, f"{rel_base}-{biggest}w.webp")
        if not (os.path.isfile(avif_full) and os.path.isfile(webp_full)):
            return m.group(0)
        avif_rel = os.path.relpath(avif_full, html_dir)
        webp_rel = os.path.relpath(webp_full, html_dir)
        return (
            f"background-image:url('{path}'); "
            f"background-image:-webkit-image-set(url('{webp_rel}') 1x); "
            f"background-image:image-set(url('{avif_rel}') type('image/avif'), "
            f"url('{webp_rel}') type('image/webp'), url('{path}') type('image/jpeg'))"
        )

    new_content = bg_re.sub(bg_repl, content)
    if new_content != content:
        content = new_content
        changed = True

    if changed:
        open(fname, "w", encoding="utf-8").write(content)
    return changed

def main():
    files = glob.glob("*.html") + glob.glob("it/*.html")
    total_changed = 0
    for fname in files:
        if process_html(fname):
            total_changed += 1
            print(f"updated: {fname}")
    print(f"\n{total_changed} files updated.")

if __name__ == "__main__":
    main()
