#!/bin/bash
# publish.sh — Convert a LaTeX file to a Hugo blog post and optionally push to live site
#
# Usage:
#   ./publish.sh my-article.tex                    # convert only
#   ./publish.sh my-article.tex --push             # convert + push live
#   ./publish.sh my-article.tex --title "My Title" # override title

set -euo pipefail

TEX_FILE="${1:?Usage: ./publish.sh <file.tex> [--push] [--title \"Title\"]}"
PUSH=false
CUSTOM_TITLE=""

shift
while [[ $# -gt 0 ]]; do
  case $1 in
    --push) PUSH=true; shift ;;
    --title) CUSTOM_TITLE="$2"; shift 2 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

BASENAME=$(basename "$TEX_FILE" .tex)
SLUG=$(echo "$BASENAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g')
DATE=$(date +%Y-%m-%d)
OUTPUT="content/posts/${SLUG}.md"

if [[ -n "$CUSTOM_TITLE" ]]; then
  TITLE="$CUSTOM_TITLE"
else
  TITLE=$(echo "$BASENAME" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
fi

echo "Converting $TEX_FILE → $OUTPUT"

BODY=$(/usr/local/bin/pandoc "$TEX_FILE" \
  --from=latex \
  --to=markdown \
  --mathjax \
  --wrap=none \
  2>/dev/null)

cat > "$OUTPUT" << EOF
---
title: "${TITLE}"
date: ${DATE}
math: true
---

${BODY}
EOF

echo "Created: $OUTPUT"

if $PUSH; then
  echo "Building and pushing..."
  git add -A
  git commit -m "Add post: ${TITLE}"
  git push origin main
  echo "Live at https://diverge.blog/posts/${SLUG}/"
fi
