const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    return this.coinapi.quotes_current_data_all().catch(axiosErrorHandler);
  }

  get(id, params) {
    return this.coinapi.quotes_current_data_symbol(id).catch(axiosErrorHandler);
  }
};
