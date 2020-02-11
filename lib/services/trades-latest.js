const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi.trades_latest_data_all(limit).catch(axiosErrorHandler);
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { limit } = query;
    return this.coinapi
      .trades_latest_data_symbol(id, limit)
      .catch(axiosErrorHandler);
  }
};
