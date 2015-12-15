var assert = require("assert")

var pkg = require("_/package.json")
assert.equal(pkg.name, "testapp")
