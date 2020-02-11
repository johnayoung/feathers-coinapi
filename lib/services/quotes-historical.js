const Base = require('./base');

const { asyncErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { symbol_id, time_start, time_end, limit } = query;
    return this.coinapi
      .quotes_historical_data(symbol_id, time_start, time_end, limit)
      .catch(asyncErrorHandler);
  }
};
