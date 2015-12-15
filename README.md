# `underlink`

Productive for both client and server apps. Instead of relative paths:

```js
var env = require("../../../env")
```

Import relative to the project:

```js
var env = require("_/env")
```

Install with github and npm:

```sh
$ npm install --save aj0strow/underlink
```

You can use it as a command, like in an npm `postinstall` script:

```sh
$ node_modules/.bin/underlink
```

For some platforms, like Heroku, it doesn't work. In that case:

```js
require("underlink")("app")
```

**MIT License**
