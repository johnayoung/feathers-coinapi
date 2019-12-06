const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi.quotes_latest_data_all(limit);
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi.quotes_latest_data_symbol(id, limit);
  }
};
