#!/usr/bin/env node

var argv = process.argv.slice(2)
require("./index.js")(argv.shift())
