#!/bin/bash

if [ "$CF_PAGES_BRANCH" == "production" ]; then
    git fetch --unshallow && hugo --gc --minify

elif [ "$CF_PAGES_BRANCH" == "staging" ]; then
    # Adds the CF pages URL as the Hugo base URL
    git fetch --unshallow && hugo --gc --minify --baseUrl $CF_PAGES_URL

else
    # Else run the dev script
    hugo server
fi
