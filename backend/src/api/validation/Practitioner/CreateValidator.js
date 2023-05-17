const Joi = require('joi');
const validate = require('./../validate');

const createPatientSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    contact: Joi.string().required(),
    dob: Joi.date().required(),
    start_time: Joi.required(),
    end_time: Joi.required(),
    working_days: Joi.array().items(Joi.number()).required(),
    is_icu_specialist: Joi.boolean()
});

module.exports = validate(createPatientSchema);