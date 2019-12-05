// this is to support both browser and node
const SDK =
  typeof window !== 'undefined'
    ? window.COIN_API_SDK
    : require('./coinapi').default;

module.exports = class BaseService {
  constructor(options = {}) {
    const { api_key } = options;

    if (!options.api_key) {
      throw new Error('CoinAPI `api_key` needs to be provided');
    }

    const COIN_API = new SDK(api_key);

    this.coinapi = this.coinapi;
    this.paginate = options.paginate = {};
    this.id = 'id';
  }
};
