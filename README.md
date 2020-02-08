# feathers-coinapi

> **Unofficial** Feathers plugin service for CoinAPI

## Installation

```
npm install feathers-coinapi --save
```

## Documentation

Please refer to the [CoinAPI Docs](https://docs.coinapi.io/) for options that can be passed.

### Available Services

The following services are supported and map to the appropriate Stripe resource:

- `ExchangeRates`
- `Metadata`
- `OhlcvHistorical`
- `OhlcvLatest`
- `OrderbooksCurrent`
- `OrderbooksHistorical`
- `OrderbooksLatest`
- `QuotesCurrent`
- `QuotesLatest`
- `TradesHistorical`
- `TradesLatest`

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
