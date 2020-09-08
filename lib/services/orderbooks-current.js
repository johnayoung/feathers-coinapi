const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    return this.coinapi.orderbooks_current_data_all();
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi.orderbooks_current_data_symbol(id);
  }
};
