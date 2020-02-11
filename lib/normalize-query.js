const convertDateFieldsToDate = require('./convert-dates');

module.exports = function normalizeQuery(params) {
  let query = Object.assign({}, params.query);

  query = convertDateFieldsToDate(query);

  return query;
};
