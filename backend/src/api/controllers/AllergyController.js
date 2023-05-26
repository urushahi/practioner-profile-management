const {
  getAllergies,
  createAllergy,
  getAllergyById,
  deleteAllergyByID,
  updateAllergyById,
} = require('../services/AllergyService');
const {
  successResponse,
  errorResponse,
  validationFailedResponse,
} = require('../helpers/apiResponse');
const validateAllergyRequest = require('../validation/Allergy/CreateAllergyRequest');

module.exports = {
  getAllergies: async (req, res) => {
    try {
      const allergies = await getAllergies();
      return res.status(200).json(successResponse(allergies));
    } catch (err) {
      return res.status(500).json(errorResponse());
    }
  },

  createAllergy: async (req, res) => {
    try {
      const { allergy } = req.body;
      await validateAllergyRequest(req.body);
      const allergyDetail = await createAllergy({ allergy });
      return res.status(201).json(successResponse(allergyDetail));
    } catch (err) {
      if (err.message === 'Validation Failed') {
        return res.status(422).json(validationFailedResponse(err.errors));
      }
      return res.status(500).json(errorResponse());
    }
  },

  getAllergyById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const allergy = await getAllergyById(id);
      return res.status(200).json(successResponse(allergy));
    } catch (err) {
      if (err.message === 'Data not found') {
        return res.status(400).json(errorResponse('Not Found', 400));
      }
      return res.status(500).json(errorResponse());
    }
  },

  deleteAllergyById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      await deleteAllergyByID(id);
      return res.status(200).json(successResponse('success'));
    } catch (err) {
      if (err.message === 'Data not found') {
        return res.status(400).json(errorResponse('Not Found', 400));
      }
      return res.status(500).json(errorResponse());
    }
  },

  updateAllergyById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      await validateAllergyRequest(req.body);
      const { allergy } = req.body;
      const a = await updateAllergyById(id, { allergy });
      return res.status(200).json(successResponse(a));
    } catch (err) {
      if (err.message === 'Validation Failed') {
        return res.status(422).json(validationFailedResponse(err.errors));
      }
      if (err.message === 'Data not found') {
        return res.status(400).json(errorResponse('Not Found', 400));
      }
      return res.status(500).json(errorResponse());
    }
  },
};
