const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const {
      symbol_id,
      period_id,
      time_start,
      time_end = null,
      limit = null,
    } = query;

    return this.coinapi
      .ohlcv_historic_data(symbol_id, period_id, time_start, time_end, limit)
      .catch(axiosErrorHandler);
  }
};
