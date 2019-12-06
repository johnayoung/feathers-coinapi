const ExchangeRates = require('./services/exchange-rates');
const Metadata = require('./services/metadata');
const OhlcvHistorical = require('./services/ohlcv-historical');
const OhlcvLatest = require('./services/ohlcv-latest');
const OrderbooksCurrent = require('./services/orderbooks-current');
const OrderbooksHistorical = require('./services/orderbooks-historical');
const OrderbooksLatest = require('./services/orderbooks-latest');
const QuotesCurrent = require('./services/quotes-current');
const QuotesHistorical = require('./services/quotes-historical');
const QuotesLatest = require('./services/quotes-latest');
const TradesHistorical = require('./services/trades-historical');
const TradesLatest = require('./services/trades-latest');

module.exports = {
  Metadata,
  ExchangeRates,
  OhlcvHistorical,
  OhlcvLatest,
  OrderbooksCurrent,
  OrderbooksHistorical,
  OrderbooksLatest,
  QuotesCurrent,
  QuotesHistorical,
  QuotesLatest,
  TradesHistorical,
  TradesLatest,
};
