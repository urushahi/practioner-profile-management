const { createUser, checkUser } = require('../services/UserServices');

const {
  validationFailedResponse,
  errorResponse,
  successResponse,
} = require('./../helpers/apiResponse');
const CreateUserRequestValidator = require('./../validation/User/CreateUserRequestValidator');
const LoginRequestValidator = require('./../validation/User/LoginRequestValidator');
const {
  checkPassword,
  generateToken,
  generateRefreshToken,
  validateRefreshToken,
} = require('./../services/AuthenticationService');

module.exports = {
  signUp: async (req, res) => {
    try {
      await CreateUserRequestValidator(req.body); // calls validate() from validation/users/createUserRequestValidator/
      const newUser = await createUser(req.body);
      res
        .status(201) // 201 status code - new data created
        .json(successResponse(newUser, 'User Created successfully', 201));
    } catch (err) {
      if (err.message === 'Validation Failed') {
        const response = validationFailedResponse(err.errors);
        return res.status(response.statusCode).json(response);
      }
      if (err.message === 'Email already exists') {
        return res.status(409).json(errorResponse(err.message, 409));
      }
      return res.status(500).json(errorResponse());
    }
  },

  signIn: async (req, res) => {
    try {
      await LoginRequestValidator(req.body);
      const { email, password } = req.body;
      const userData = await checkUser({ email });

      if (!userData) {
        throw new Error('User not found');
      }

      const { password: cryptedPassword, id, name } = userData;
      await checkPassword(cryptedPassword, password);

      const access_token = generateToken(id); // token provided for access
      const refresh_token = generateRefreshToken(id); // token provided for access

      return res
        .status(200)
        .json(
          successResponse(
            { access_token, refresh_token, email, name },
            'Login successful'
          )
        );
    } catch (err) {
      if (err.message === 'Validation Failed') {
        return res.status(422).json(validationFailedResponse(err.errors));
      }

      if (err.message === 'User not found') {
        return res.status(404).json(errorResponse('Email not found', 404));
      }

      if (err.message === 'Password donot match') {
        return res
          .status(400)
          .json(errorResponse('Email or password do not match', 400));
      }

      return res.status(500).json(errorResponse());
    }
  },

  generateAccessToken: async (req, res) => {
    try {
      const { refresh_token } = req.body;
      const data = validateRefreshToken(refresh_token);

      const { userId } = data;

      const access_token = generateToken(userId); // token provided for access

      return res
        .status(200)
        .json(successResponse({ access_token }, 'New Acces Token generated'));
    } catch (err) {
      if (err.message === 'Refresh Token Error') {
        return res.status(400).json(errorResponse('Invalid Refresh Token'));
      }
      return res.status(500).json(errorResponse());
    }
  },
};
