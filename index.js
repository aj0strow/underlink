var fs = require("fs")
var path = require("path")
var mkdirp = require("mkdirp")

module.exports = function (dir) {
  var root = process.cwd()
  var src = path.resolve(root, dir || ".")
  var dest = path.resolve(root, "node_modules/_")
  
  // Ensure node modules
  mkdirp(path.resolve(root, "node_modules"))
  
  // Symlink to underscore
  
  try {
    fs.unlinkSync(dest)
  } catch (e) {}

  fs.symlinkSync(src, dest)
}
