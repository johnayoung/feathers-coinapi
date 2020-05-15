const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const {
      asset_id_base,
      asset_id_quote,
      period_id,
      time_start,
      time_end = null,
      limit = null,
    } = query;

    return this.coinapi
      .ohlcv_historic_data_agg(
        asset_id_base,
        asset_id_quote,
        period_id,
        time_start,
        time_end,
        limit
      )
      .catch(axiosErrorHandler);
  }
};
