const Joi = require('joi');
const validate = require('../validate');

const RequestTokenSchema = Joi.object({
  refresh_token: Joi.string().required(),
});

module.exports = validate(RequestTokenSchema);
