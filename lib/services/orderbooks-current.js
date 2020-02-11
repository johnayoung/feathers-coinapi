const Base = require('./base');

const { asyncErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { filter_symbol_id } = query;
    return this.coinapi
      .orderbooks_current_data_all(filter_symbol_id)
      .catch(asyncErrorHandler);
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi
      .orderbooks_current_data_symbol(id)
      .catch(asyncErrorHandler);
  }
};
