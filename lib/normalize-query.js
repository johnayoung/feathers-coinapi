const convertDateFieldsToDate = require('./convert-dates');

module.exports = function normalizeQuery(params) {
  let query = { ...params.query };

  query = convertDateFieldsToDate(query);

  return query;
};
