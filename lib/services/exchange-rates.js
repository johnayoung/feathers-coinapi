const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    return this.coinapi.exchange_rates_get_all_current_rates(query);
  }

  get(id) {
    return this.coinapi.exchange_rates_get_specific_rate();
  }
};
