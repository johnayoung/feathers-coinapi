const ExchangeRates = require('./services/exchange-rates');
const Metadata = require('./services/metadata');
const OhlcvHistorical = require('./services/ohlcv-historical');
const OhlcvHistoricalAgg = require('./services/ohlcv-historical-agg');
const OhlcvLatest = require('./services/ohlcv-latest');
const OhlcvLatestAgg = require('./services/ohlcv-latest-agg');
const OrderbooksCurrent = require('./services/orderbooks-current');
const OrderbooksHistorical = require('./services/orderbooks-historical');
const OrderbooksLatest = require('./services/orderbooks-latest');
const Orderbooks3Current = require('./services/orderbooks-l3-current');
const QuotesCurrent = require('./services/quotes-current');
const QuotesHistorical = require('./services/quotes-historical');
const QuotesLatest = require('./services/quotes-latest');
const TradesHistorical = require('./services/trades-historical');
const TradesLatest = require('./services/trades-latest');

module.exports = {
  Metadata,
  ExchangeRates,
  OhlcvHistorical,
  OhlcvHistoricalAgg,
  OhlcvLatest,
  OhlcvLatestAgg,
  OrderbooksCurrent,
  OrderbooksHistorical,
  OrderbooksLatest,
  Orderbooks3Current,
  QuotesCurrent,
  QuotesHistorical,
  QuotesLatest,
  TradesHistorical,
  TradesLatest,
};
