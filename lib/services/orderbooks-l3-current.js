const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    return this.coinapi.orderbooks3_current_data_all().catch(axiosErrorHandler);
  }

  get(id, params) {
    const { limit_levels } = params.query;

    return this.coinapi
      .orderbooks3_current_data_symbol(id, limit_levels)
      .catch(axiosErrorHandler);
  }
};
