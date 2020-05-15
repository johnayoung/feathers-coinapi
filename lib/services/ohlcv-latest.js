const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const {
      symbol_id,
      asset_id_base,
      asset_id_quote,
      period_id,
      limit,
    } = query;

    if (asset_id_base) {
      return this.coinapi
        .ohlcv_latest_data_agg(asset_id_base, asset_id_quote, period_id, limit)
        .catch(axiosErrorHandler);
    }

    return this.coinapi
      .ohlcv_latest_data(symbol_id, period_id, limit)
      .catch(axiosErrorHandler);
  }
};
