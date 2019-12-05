const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    // TODO (EK): Handle pagination
  }

  get(id) {}

  create(data) {
    const { file, ...rest } = data;
    return this.cloudinary.uploader.upload(file, rest).catch(errorHandler);
  }

  patch(...args) {}

  update(id, data) {
    // return this.cloudinary.v2.uploader(id, data).catch(errorHandler);
  }
};
