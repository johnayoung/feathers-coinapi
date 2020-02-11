const Base = require('./base');

const { asyncErrorHandler } = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    if (params && params.query && params.query.type) {
      switch (params.query.type) {
        case 'assets':
          return this.coinapi.metadata_list_assets().catch(asyncErrorHandler);
        case 'exchanges':
          return this.coinapi
            .metadata_list_exchanges()
            .catch(asyncErrorHandler);
        case 'symbols':
          return this.coinapi.metadata_list_symbols().catch(asyncErrorHandler);
        default:
          return this.coinapi
            .metadata_list_exchanges()
            .catch(asyncErrorHandler);
      }
    }
    return this.coinapi.metadata_list_exchanges().catch(asyncErrorHandler);
  }
};
