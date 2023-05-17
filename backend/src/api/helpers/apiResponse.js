const successResponse = (data, message = 'Success', statusCode = 200) => {
  return {
    success: true,
    message,
    data,
    statusCode,
  };
};

const errorResponse = (message = 'Internal Server Error', statusCode = 500) => {
  return {
    success: false,
    message,
    statusCode,
  };
};

const validationFailedResponse = (errors) => {
  return {
    success: false,
    message: 'Validation failed.',
    errors,
    statusCode: 422,
  };
};

module.exports = {
  successResponse,
  errorResponse,
  validationFailedResponse,
};
