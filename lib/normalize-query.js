const convertDateFieldsToDate = require('./convert-dates');

module.exports = function normalizeQuery(params) {
  let query = Object.assign({}, params.query);

  if (query.$limit) {
    query.limit = query.$limit;
    delete query.$limit;
  }

  query = convertDateFieldsToDate(query);

  return query;
};
