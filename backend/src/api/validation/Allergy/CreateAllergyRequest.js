const validate = require("../validate");
const Joi = require('joi');

const createAllergySchema = Joi.object({
    allergy: Joi.string().required()
})

module.exports = validate(createAllergySchema);