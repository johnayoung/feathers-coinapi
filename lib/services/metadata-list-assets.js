const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    // TODO (EK): Handle pagination
    return this.coinapi.metadata_list_assets();
  }
};
