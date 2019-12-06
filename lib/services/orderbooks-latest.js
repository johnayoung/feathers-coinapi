const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { symbol_id, limit_levels, limit } = query;
    return this.coinapi.orderbooks_latest_data(symbol_id, limit_levels, limit);
  }
};
