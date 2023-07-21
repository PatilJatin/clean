
const { StatusCodes } = require('http-status-codes');

const ApiError = require('../abstractions/apiError');


const addErrorHandler = (err, req, res, next) => {
  if (err) {
    const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
   
    const body = {
      fields: err.fields,
      message: err.message || 'An error occurred during the request.',
      name: err.name,
      status,
      stack: '',
    };

    res.status(status).json(body);
  }
  next();
};

module.exports = addErrorHandler;
