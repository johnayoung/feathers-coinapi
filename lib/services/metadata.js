const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    if (params && params.query && params.query.type) {
      switch (params.query.type) {
        case 'assets':
          return this.coinapi.metadata_list_assets();
        case 'exchanges':
          return this.coinapi.metadata_list_exchanges();
        case 'symbols':
          return this.coinapi.metadata_list_symbols();
        default:
          return this.coinapi.metadata_list_exchanges();
      }
    }
    return this.coinapi.metadata_list_exchanges();
  }
};