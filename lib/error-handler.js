const {
  BadRequest,
  NotAuthenticated,
  PaymentError,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  Timeout,
  Conflict,
  Unprocessable,
  GeneralError,
  NotImplemented,
  Unavailable,
} = require('@feathersjs/errors');

function errorHandler(status, statusText) {
  switch (status) {
    case 400:
      throw new BadRequest(statusText);
    case 401:
      throw new NotAuthenticated(statusText);
    case 402:
      throw new PaymentError(statusText);
    case 403:
      throw new Forbidden(statusText);
    case 404:
      throw new NotFound(statusText);
    case 405:
      throw new MethodNotAllowed(statusText);
    case 406:
      throw new NotAcceptable(statusText);
    case 408:
      throw new Timeout(statusText);
    case 409:
      throw new Conflict(statusText);
    case 422:
      throw new Unprocessable(statusText);
    case 500:
      throw new GeneralError(statusText);
    case 501:
      throw new NotImplemented(statusText);
    case 503:
      throw new Unavailable(statusText);
    default:
      throw new GeneralError(statusText);
  }
}

function errorHandlerReturn(status, statusText) {
  switch (status) {
    case 400:
      return new BadRequest(statusText);
    case 401:
      return new NotAuthenticated(statusText);
    case 402:
      return new PaymentError(statusText);
    case 403:
      return new Forbidden(statusText);
    case 404:
      return new NotFound(statusText);
    case 405:
      return new MethodNotAllowed(statusText);
    case 406:
      return new NotAcceptable(statusText);
    case 408:
      return new Timeout(statusText);
    case 409:
      return new Conflict(statusText);
    case 422:
      return new Unprocessable(statusText);
    case 500:
      return new GeneralError(statusText);
    case 501:
      return new NotImplemented(statusText);
    case 503:
      return new Unavailable(statusText);
    default:
      return new GeneralError(statusText);
  }
}

function axiosErrorHandler(error) {
  // Error 😨
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    errorHandler(error.response.status, error.response.data);
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    console.log(error.request);
    errorHandler(500, 'The request was made, but no response was received.');
  } else {
    // Something happened in setting up the request and triggered an Error
    console.log('Error', error.message);
    errorHandler(500, `There was an error in setting up the request: ${error}`);
  }
  console.log(error);
}

module.exports = {
  errorHandler,
  errorHandlerReturn,
  axiosErrorHandler,
};
