const Cloudinary = require('cloudinary').v2;

module.exports = class BaseService {
  constructor(options = {}) {
    const { cloud_name, api_key, api_secret } = options;

    if (!options.cloud_name) {
      throw new Error('Cloudinary `cloud_name` needs to be provided');
    }

    if (!options.api_key) {
      throw new Error('Cloudinary `api_key` needs to be provided');
    }

    if (!options.api_secret) {
      throw new Error('Cloudinary `api_secret` needs to be provided');
    }

    const cloudinaryOptions = { cloud_name, api_key, api_secret };
    Cloudinary.config(cloudinaryOptions);

    this.cloudinary = Cloudinary;
    this.paginate = options.paginate = {};
    this.id = 'id';
  }
};
