const Base = require('./base');

const { axiosErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    if (params && params.query && params.query.type) {
      switch (params.query.type) {
        case 'assets':
          return this.coinapi.metadata_list_assets().catch(axiosErrorHandler);
        case 'exchanges':
          return this.coinapi
            .metadata_list_exchanges()
            .catch(axiosErrorHandler);
        case 'symbols':
          return this.coinapi.metadata_list_symbols().catch(axiosErrorHandler);
        default:
          return this.coinapi
            .metadata_list_exchanges()
            .catch(axiosErrorHandler);
      }
    }
    return this.coinapi.metadata_list_exchanges().catch(axiosErrorHandler);
  }
};
