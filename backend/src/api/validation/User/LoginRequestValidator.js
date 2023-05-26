const Joi = require('joi');
const validate = require('./../validate');

const LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


module.exports = validate(LoginSchema);