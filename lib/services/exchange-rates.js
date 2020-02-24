const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);

    try {
      const { asset_id_base, asset_id_quote, time } = query;

      if (!asset_id_quote) {
        return this.coinapi
          .exchange_rates_get_all_current_rates(asset_id_base)
          .catch(axiosErrorHandler);
      }

      return this.coinapi
        .exchange_rates_get_specific_rate(asset_id_base, asset_id_quote, time)
        .catch(axiosErrorHandler);
    } catch (e) {
      return axiosErrorHandler(e);
    }
  }

  get(id, params) {
    const query = normalizeQuery(params);
    const { asset_id_base, asset_id_quote, time } = query;

    return this.coinapi
      .exchange_rates_get_specific_rate(asset_id_base, asset_id_quote, time)
      .catch(axiosErrorHandler);
  }
};
