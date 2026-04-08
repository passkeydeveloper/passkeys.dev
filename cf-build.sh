#!/bin/bash
set -e

DART_SASS_VERSION="1.99.0"

# Install Dart Sass
curl -sLO "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
tar -xzf "dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
export PATH="$PATH:$PWD/dart-sass"

# Install PostCSS dependencies
npm install

# Fetch full git history (needed for Hugo's enableGitInfo)
git fetch --unshallow

if [ "$CF_PAGES_BRANCH" == "production" ]; then
    hugo --gc --minify

elif [ "$CF_PAGES_BRANCH" == "main" ]; then
    hugo --gc --minify

else
    hugo --gc --minify --baseURL "$CF_PAGES_URL"
fi
