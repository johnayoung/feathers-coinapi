const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { filter_symbol_id } = query;
    return this.coinapi.orderbooks_current_data_all(filter_symbol_id);
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi.orderbooks_current_data_symbol(id);
  }
};
