# feathers-coinapi

[![Build Status](https://travis-ci.org/feathersjs/plugins.png?branch=master)](https://travis-ci.org/feathersjs/plugins)

> **Unofficial** Feathers plugin service for CoinAPI

## Installation

```
npm install feathers-coinapi --save
```

## Documentation

TBD

## Complete Example

Here's an example of a Feathers server that uses `coinapi`.

```js
const feathers = require("@feathersjs/feathers");
const plugin = require("feathers-coinapi");

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(plugin());
```

## License

Copyright (c) 2019

Licensed under the [MIT license](LICENSE).
