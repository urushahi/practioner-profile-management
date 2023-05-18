const express = require('express');
const router = express.Router();
const AllergyController = require('./../controllers/AllergyController');

router.get('/', AllergyController.getAllergies);

router.post('/', AllergyController.createAllergy);

router.get('/:id', AllergyController.getAllergyById);

router.delete('/:id', AllergyController.deleteAllergyById);

router.put('/:id', AllergyController.updateAllergyById);

module.exports = router;
