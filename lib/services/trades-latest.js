const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { symbol_id, asset_id_base, asset_id_quote, limit } = query;

    if (asset_id_base) {
      return this.coinapi
        .trades_latest_data_all(asset_id_base, asset_id_quote, limit)
        .catch(axiosErrorHandler);
    }

    return this.coinapi
      .trades_latest_data_symbol(symbol_id, limit)
      .catch(axiosErrorHandler);
  }
};
