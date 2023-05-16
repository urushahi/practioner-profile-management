const express = require('express');

const router = express.Router();
const controller = require('../controllers/PractitionerController');

// create practitioner
router.post('/', controller.createPractitioner);

// get all practitioners

router.get('/', controller.getPractitioners);
// get user by id

router.get('/:id', controller.getPractitionerById);

// // update user by id

router.put('/:id', controller.updatePractitionerById);

// // delete a user

router.delete('/:id', controller.deletePractitionerById);

module.exports = router;
