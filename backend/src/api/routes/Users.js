const express = require('express');

const router = express.Router();
const controller = require('../controllers/UserControlller');

//signup
router.post('/signup', controller.signUp);

//login
router.post('/signin', controller.signIn);

module.exports = router;
