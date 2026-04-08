#!/bin/bash
set -e

HUGO_VERSION="0.158.0"
DART_SASS_VERSION="1.98.0"

# Install Hugo Extended
curl -sLO "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
tar -xzf "hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
export PATH="$PWD:$PATH"

# Install Dart Sass
curl -sLO "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
tar -xzf "dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
export PATH="$PWD/dart-sass:$PATH"

# Install PostCSS dependencies
npm install

# Fetch full git history (needed for Hugo's enableGitInfo)
git fetch --unshallow

if [ "$CF_PAGES_BRANCH" == "main" ]; then
    hugo --gc --minify

else
    hugo --gc --minify --baseURL "$CF_PAGES_URL"
fi
