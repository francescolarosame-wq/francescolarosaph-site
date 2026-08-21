#!/usr/bin/env python3
"""
Generates WebP + AVIF variants for every image actually referenced by a live
HTML page, excluding anything under assets/images/clients/club-barman/ or
assets/video/club-barman/ (per explicit instruction — Club Barman assets stay
untouched). Originals are never modified, moved, or deleted.

Output mirrors the source tree under assets/images-optimized/, e.g.:
  assets/images/clients/wedding/wedding-001.jpg
    -> assets/images-optimized/clients/wedding/wedding-001-960w.webp
    -> assets/images-optimized/clients/wedding/wedding-001-960w.avif
    -> assets/images-optimized/clients/wedding/wedding-001-1600w.webp
    -> assets/images-optimized/clients/wedding/wedding-001-1600w.avif

Requires: cwebp, avifenc, sips (all present on this machine as of 2026-08-17).
Idempotent — skips any variant that already exists.
"""
import os
import re
import glob
import subprocess
import json
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

SRC_ROOT = "assets/images"
OUT_ROOT = "assets/images-optimized"
WIDTHS = [960, 1600]
WEBP_Q = 82
AVIF_Q = 58  # avifenc scale: 0=worst,100=best; ~58 ~ visually near-lossless for photos

def find_referenced_images():
    refs = set()
    for fname in glob.glob("*.html") + glob.glob("it/*.html"):
        content = open(fname, encoding="utf-8").read()
        base = os.path.dirname(fname)
        for m in re.finditer(r'(?:src|poster)="(\.[^"]+\.(?:jpg|jpeg|png))"', content, re.I):
            path = m.group(1).split("?")[0]
            full = os.path.normpath(os.path.join(base, path))
            refs.add(full)
        for m in re.finditer(r"url\('(\.[^']+\.(?:jpg|jpeg|png))'\)", content, re.I):
            path = m.group(1).split("?")[0]
            full = os.path.normpath(os.path.join(base, path))
            refs.add(full)
    refs = {r for r in refs if os.path.isfile(r)}
    refs = {r for r in refs if "club-barman" not in r.lower()}
    refs = {r for r in refs if r.startswith(SRC_ROOT + os.sep)}
    return sorted(refs)

def get_width(path):
    out = subprocess.run(["sips", "-g", "pixelWidth", path], capture_output=True, text=True).stdout
    m = re.search(r"pixelWidth:\s*(\d+)", out)
    return int(m.group(1)) if m else None

def main():
    images = find_referenced_images()
    print(f"Found {len(images)} referenced, non-Club-Barman images to optimize.")

    orig_total = 0
    webp_total = 0
    avif_total = 0
    generated = 0
    skipped = 0
    manifest = {}

    for src in images:
        rel = os.path.relpath(src, SRC_ROOT)
        base = os.path.splitext(rel)[0]
        dest_dir = os.path.join(OUT_ROOT, os.path.dirname(base))
        os.makedirs(dest_dir, exist_ok=True)
        name = os.path.basename(base)

        orig_size = os.path.getsize(src)
        orig_total += orig_size

        orig_width = get_width(src)
        widths_to_use = [w for w in WIDTHS if orig_width and w <= orig_width]
        if not widths_to_use:
            widths_to_use = [orig_width] if orig_width else [1600]

        variants = []
        for w in widths_to_use:
            webp_out = os.path.join(dest_dir, f"{name}-{w}w.webp")
            avif_out = os.path.join(dest_dir, f"{name}-{w}w.avif")

            if not os.path.isfile(webp_out):
                tmp = f"/tmp/_resize_{os.getpid()}_{w}.jpg"
                subprocess.run(["sips", "-Z", str(w), src, "--out", tmp],
                                capture_output=True)
                subprocess.run(["cwebp", "-quiet", "-q", str(WEBP_Q), tmp, "-o", webp_out],
                                capture_output=True)
                if not os.path.isfile(avif_out):
                    subprocess.run(["avifenc", "-q", str(AVIF_Q), "--speed", "6",
                                     tmp, avif_out], capture_output=True)
                os.remove(tmp)
                generated += 1
            else:
                skipped += 1

            if os.path.isfile(webp_out):
                webp_total += os.path.getsize(webp_out)
            if os.path.isfile(avif_out):
                avif_total += os.path.getsize(avif_out)

            variants.append(w)

        manifest[src] = {"orig_bytes": orig_size, "orig_width": orig_width, "widths": variants}

    with open("assets/images-optimized/manifest.json", "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"\nGenerated {generated} new variant files, skipped {skipped} existing.")
    print(f"Original total (referenced set): {orig_total/1024/1024:.2f} MB")
    print(f"WebP variant total (all widths): {webp_total/1024/1024:.2f} MB")
    print(f"AVIF variant total (all widths): {avif_total/1024/1024:.2f} MB")

if __name__ == "__main__":
    main()
