#!/bin/bash

SKILL_DIR="skills/building-components/references"
mkdir -p "$SKILL_DIR"

# Find all non-localized .mdx files (exclude *.XX.mdx where XX is language code)
for src in content/docs/*.mdx; do
  filename=$(basename "$src")

  # Skip localized files (pattern: name.XX.mdx where XX is 2-letter code)
  if [[ "$filename" =~ \.[a-z]{2}\.mdx$ ]]; then
    continue
  fi

  # Skip index.mdx (site content, not spec)
  if [[ "$filename" == "index.mdx" ]]; then
    continue
  fi

  dest="${SKILL_DIR}/${filename}"

  # Copy and strip Video MDX components that won't render
  sed -E '/<Video[^>]*\/>/d' "$src" > "$dest"
  echo "Synced: $filename"
done
