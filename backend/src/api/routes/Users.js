const express = require('express');

const router = express.Router();
const controller = require('../controllers/UserControlller');

// get all users
router.get('/', controller.getUsers);

// create user
router.post('/', controller.createUser);

// get user by id

router.get('/:id', controller.getUserById);

// update user by id

router.put('/:id', controller.updateUserById);

// delete a user

router.delete('/:id', controller.deleteUserById);

module.exports = router;
