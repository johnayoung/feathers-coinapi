const errors = require('@feathersjs/errors');

module.exports = function errorHandler(error) {
  let feathersError = error;

  if (error.type) {
    switch (error.type) {
      default:
        feathersError = new errors.GeneralError('Unknown CoinAPI Error', error);
    }
  }

  return Promise.reject(feathersError);
};
