#!/bin/bash

NGINX_PATH="$1"

npm install
npm run build
cp -r dist/* "$NGINX_PATH/"