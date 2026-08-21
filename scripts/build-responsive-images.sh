#!/usr/bin/env bash
# Generates responsive WebP variants for every JPG/PNG under assets/images/,
# without touching or deleting a single original.
#
# Output mirrors the source tree under assets/images-optimized/, e.g.:
#   assets/images/clients/wedding/wedding-001.jpg
#     -> assets/images-optimized/clients/wedding/wedding-001-480w.webp
#     -> assets/images-optimized/clients/wedding/wedding-001-960w.webp
#     -> assets/images-optimized/clients/wedding/wedding-001-1600w.webp
#
# Requires: cwebp (brew install webp), sips (macOS built-in).
# Idempotent — re-running skips any variant that already exists, so it's
# safe to run repeatedly as new photos are added.
#
# This script only GENERATES files. It does not edit any HTML — wiring
# <picture>/srcset into the markup is a separate, reviewable step (see
# AUDIT-REPORT.md, Part 13, for why that's kept separate).

set -euo pipefail

SRC_DIR="assets/images"
OUT_DIR="assets/images-optimized"
WIDTHS=(480 960 1600)
QUALITY=80

if ! command -v cwebp >/dev/null; then
  echo "cwebp not found — install with: brew install webp" >&2
  exit 1
fi

count=0
skipped=0
orig_total=0
webp_total=0

find "$SRC_DIR" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) | while IFS= read -r src; do
  rel="${src#"$SRC_DIR"/}"
  base="${rel%.*}"
  dest_dir="$OUT_DIR/$(dirname "$base")"
  mkdir -p "$dest_dir"
  name="$(basename "$base")"

  for w in "${WIDTHS[@]}"; do
    out="$dest_dir/${name}-${w}w.webp"
    if [ -f "$out" ]; then
      continue
    fi
    tmp="$(mktemp -t resize).jpg"
    sips -Z "$w" "$src" --out "$tmp" >/dev/null 2>&1
    cwebp -quiet -q "$QUALITY" "$tmp" -o "$out" >/dev/null 2>&1
    rm -f "$tmp"
    echo "generated: $out"
  done
done

echo "Done. Originals in $SRC_DIR were not modified."
