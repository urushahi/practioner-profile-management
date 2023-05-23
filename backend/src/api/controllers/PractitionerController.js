const validateCreatePractictioner = require('./../validation/Practitioner/CreateValidator');
const {
  validationFailedResponse,
  errorResponse,
  successResponse,
} = require('./../helpers/apiResponse');
const {
  getPractitioners,
  createPractitioner,
  getPractitionersById,
  updatePractitionerById,
  deletePractitionerById,
} = require('../services/PractitionerServices');

module.exports = {
  getPractitioners: async (req, res) => {
    try {
      const allPractitioners = await getPractitioners();
      return res.status(200).json(successResponse(allPractitioners));
    } catch (err) {
      return res.status(500).json(errorResponse());
    }
  },

  createPractitioner: async (req, res) => {
    try {
      await validateCreatePractictioner(req.body);
      const newPractitioner = await createPractitioner(req);
      return res.status(200).json(successResponse(newPractitioner));
    } catch (err) {
      if (err.message === 'Validation Failed') {
        const response = validationFailedResponse(err.errors);
        return res.status(response.statusCode).json(response);
      }
      if (err.message === 'Email already exists') {
        const response = errorResponse(err.message, 409);
        return res.status(409).json(response);
      }
      return res.status(500).json(errorResponse());
    }
  },

  getPractitionerById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const getPractitionerById = await getPractitionersById(id);
      return res.status(200).json(successResponse(getPractitionerById));
    } catch (err) {
      if (err.message === 'Practitioner not found') {
        return res.status(404).json(errorResponse(err.message, 404));
      }
      return res.status(500).json(errorResponse());
    }
  },

  updatePractitionerById: async (req, res) => {
    try {
      await validateCreatePractictioner(req.body);
      const id = Number(req.params.id);
      const data = req.body;
      const updatePractitioner = await updatePractitionerById(id, data);
      return res.status(200).json(successResponse(updatePractitioner));
    } catch (err) {
      if (err.message === 'Validation Failed') {
        const response = validationFailedResponse(err.errors);
        return res.status(response.statusCode).json(response);
      }
      if (err.message === 'Practitioner not found') {
        return res.status(404).json(errorResponse(err.message, 404));
      }
      return res.status(500).json(errorResponse());
    }
  },

  deletePractitionerById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deletePractitioner = await deletePractitionerById(id);
      return res.status(200).json(successResponse());
    } catch (err) {
      if (err.message === 'Practitioner not found') {
        return res.status(404).json(errorResponse(err.message, 404));
      }
      return res.status(500).json(errorResponse());
    }
  },
};
