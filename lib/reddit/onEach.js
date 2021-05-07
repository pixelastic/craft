const curatedAuthors = require('./curatedAuthors.js');
const _ = require('golgoth/lodash');
/**
 * Custom method to enhance a record before saving it to disk
 * @param {object} record Record as extracted from reddinx
 * @returns {object} Updated record
 **/
module.exports = (record) => {
  // Mark as curated
  const authorName = _.get(record, 'author.name');
  record.score.isCurated = _.includes(curatedAuthors, authorName);

  return record;
};
