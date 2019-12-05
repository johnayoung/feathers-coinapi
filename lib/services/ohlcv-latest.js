const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { symbol_id, period_id, limit } = query;
    return this.coinapi.ohlcv_latest_data(symbol_id, period_id, limit);
  }
};
