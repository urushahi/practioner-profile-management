const Joi = require('joi');
const validate = require('./../validate');

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match',
    }),
});

module.exports = validate(createUserSchema); // from validate.js
