const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { asset_id_base, asset_id_quote, period_id, limit } = query;
    return this.coinapi
      .ohlcv_latest_data_agg(asset_id_base, asset_id_quote, period_id, limit)
      .catch(axiosErrorHandler);
  }
};
