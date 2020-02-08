const _ = require('lodash');

const dateFields = ['time', 'time_start', 'time_end'];

/**
 * Converts date fields from string to Date object
 * @param {*} query Query object from request
 */
function convertDateFieldsToDate(query) {
  try {
    // Query is query object from request
    return _.reduce(
      query,
      function(result, value, property) {
        if (
          dateFields.includes(property) &&
          !_.isDate(value)
          // !_.isNil(query[property]) &&
          // query[property] !== ''
        ) {
          result[property] = new Date(query[property]);
        } else {
          result[property] = value;
        }
        return result;
      },
      {}
    );
  } catch (e) {
    return query;
  }
}

module.exports = convertDateFieldsToDate;
