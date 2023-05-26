// validates the request based on schema provided
// only throws error when validatiom fails
const validate = (schema) => (payload) => {
  const { error } = schema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    throw {
      message: 'Validation Failed',
      statusCode: 422,
      errors: formatValidationErrors(error),
    };
  }
};

// formats validation errors
const formatValidationErrors = (error) => {
  const errors = {};
  error.details.forEach((detail) => {
    const key = detail.path.join('.');
    const message = detail.message.replace(/['"]/g, '');
    if (!errors[key]) {
      errors[key] = [];
    }
    errors[key].push(message);
  });
  return errors;
};

module.exports = validate;
