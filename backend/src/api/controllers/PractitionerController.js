const pool = require('../../config');
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
      res.json(allPractitioners);
    } catch (err) {
      console.error(err.message);
    }
  },

  createPractitioner: async (req, res) => {
    try {
      const newPractitioner = await createPractitioner(req.body);
      res.json(newPractitioner);
    } catch (err) {
      console.error(err.message);
    }
  },

  getPractitionerById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const getPractitionerById = await getPractitionersById(id);
      res.json(getPractitionerById);
    } catch (err) {
      console.error(err.message);
    }
  },

  updatePractitionerById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { name, email } = req.body;
      const data = { name, email };
      const updatePractitioner = await updatePractitionerById(id, data);
      res.json(updatePractitioner);
    } catch (err) {
      console.error(err.message);
    }
  },

  deletePractitionerById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deletePractitioner = await deletePractitionerById(id);
      res.json(deletePractitioner);
    } catch (err) {
      console.error(err.message);
    }
  },
};
