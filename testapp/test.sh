#! /bin/bash

set -e

if [ -d node_modules ]
then
  rm -rf node_modules
fi

npm install .. 2>/dev/null
node_modules/.bin/underlink

node test.js
echo "test ok"
