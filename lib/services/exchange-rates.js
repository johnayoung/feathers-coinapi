const Base = require('./base');

const { asyncErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);

    try {
      const { asset_id_base, asset_id_quote, time } = query;

      if (!asset_id_quote) {
        return this.coinapi
          .exchange_rates_get_all_current_rates(asset_id_base)
          .catch(asyncErrorHandler);
      }

      return this.coinapi
        .exchange_rates_get_specific_rate(asset_id_base, asset_id_quote, time)
        .catch(asyncErrorHandler);
    } catch (e) {
      return asyncErrorHandler(e);
    }
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { asset_id_base, asset_id_quote, time } = query;

    return this.coinapi
      .exchange_rates_get_specific_rate(asset_id_base, asset_id_quote, time)
      .catch(asyncErrorHandler);
  }
};
