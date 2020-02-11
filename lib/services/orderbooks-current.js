const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { filter_symbol_id } = query;
    return this.coinapi
      .orderbooks_current_data_all(filter_symbol_id)
      .catch(axiosErrorHandler);
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi
      .orderbooks_current_data_symbol(id)
      .catch(axiosErrorHandler);
  }
};
