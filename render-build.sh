###!/usr/bin/env bash
### exit on errors -o err exit
##export PUPPETEER_CACHE_DIR=E:\tmdb-scraper\.cache\puppeteer
##export PUPPETEER_DOWNLOAD_PATH=/tmp/puppeteer-cache
###npm install
### npm run build # uncomment if required
##
### Store/pull Puppeteer cache with build cache
##if [[ ! -d $PUPPETEER_CACHE_DIR ]]; then
##  echo "...Copying Puppeteer Cache from Build Cache"
##  cp -R $XDG_CACHE_HOME/puppeteer/ $PUPPETEER_CACHE_DIR
##else
##  echo "...Storing Puppeteer Cache in Build Cache"
##  cp -R $PUPPETEER_CACHE_DIR $XDG_CACHE_HOME
##fi
##!/usr/bin/env bash
## exit on errors
##set -o err exit
#
## Set Puppeteer cache directory (Windows path)
##!/usr/bin/env bash
## exit on errors
##!/usr/bin/env bash
## exit on errors
#set -o errexit
#
## Set Puppeteer cache directory
#export PUPPETEER_CACHE_DIR=C:\\temp\\puppeteer-cache
## Set Puppeteer download path
#export PUPPETEER_DOWNLOAD_PATH=C:\\temp\\puppeteer-cache
#
## Set XDG_CACHE_HOME if not already set
#if [[ -z "$XDG_CACHE_HOME" ]]; then
#  #export XDG_CACHE_HOME=~/.cache
#  export XDG_CACHE_HOME=E:\\tmdb-scraper\\.cache
#  echo "XDG_CACHE_HOME not set. Defaulting to $XDG_CACHE_HOME"
#fi
#
## Store/pull Puppeteer cache with build cache
#if [[ ! -d $PUPPETEER_CACHE_DIR ]]; then
#  echo "...Copying Puppeteer Cache from Build Cache"
#  cp -R "$XDG_CACHE_HOME/puppeteer/" "$PUPPETEER_CACHE_DIR"
#else
#  echo "...Storing Puppeteer Cache in Build Cache"
#  cp -R "$PUPPETEER_CACHE_DIR" "$XDG_CACHE_HOME/puppeteer"
#fi
#!/bin/bash
#!/bin/bash
set -o errexit  # Exit on any error

# Set Puppeteer cache directory (use /tmp/ for Render)
export PUPPETEER_CACHE_DIR=/tmp/puppeteer-cache
export PUPPETEER_DOWNLOAD_PATH=/tmp/puppeteer-cache

# Set XDG_CACHE_HOME if not already set
if [[ -z "$XDG_CACHE_HOME" ]]; then
  export XDG_CACHE_HOME=/tmp/.cache
  echo "XDG_CACHE_HOME not set. Defaulting to $XDG_CACHE_HOME"
fi

# Ensure cache directories exist
mkdir -p "$PUPPETEER_CACHE_DIR"
mkdir -p "$XDG_CACHE_HOME/puppeteer"

# Copy Puppeteer cache if it exists
if [[ -d "$XDG_CACHE_HOME/puppeteer" ]]; then
  echo "...Copying Puppeteer Cache from Build Cache"
  cp -R "$XDG_CACHE_HOME/puppeteer/" "$PUPPETEER_CACHE_DIR" || echo "No cache found, skipping copy."
else
  echo "No existing Puppeteer cache found. Skipping copy."
fi

# Store Puppeteer cache for future builds
echo "...Storing Puppeteer Cache in Build Cache"
cp -R "$PUPPETEER_CACHE_DIR" "$XDG_CACHE_HOME/puppeteer"
