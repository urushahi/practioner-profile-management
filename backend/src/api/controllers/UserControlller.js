const {
  getUsers,
  createUser,
  getUsersById,
  updateUserById,
  deleteUserById,
  checkUser,
} = require('../services/UserServices');

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
} = require('./../services/AuthenticationService');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const allUsers = await getUsers();
      res.json(allUsers);
    } catch (err) {
      console.error(err.message);
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await createUser(req.body);
      res.json(newUser);
    } catch (err) {
      console.error(err.message);
    }
  },

  getUserById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const getUserById = await getUsersById(id);
      res.json(getUserById);
    } catch (err) {
      console.error(err.message);
    }
  },

  login: async (req, res) => {
    try {
      const getUserById = await getUsersById(req.body);
      res.json(getUserById);
    } catch (err) {
      console.error(err.message);
    }
  },
  updateUserById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { name, email } = req.body;
      const data = { name, email };
      const updateUser = await updateUserById(id, data);
      res.json(updateUser);
    } catch (err) {
      console.error(err.message);
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const deleteUser = await deleteUserById(id);
      res.json(deleteUser);
    } catch (err) {
      console.error(err.message);
    }
  },

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

      const { password: cryptedPassword, id } = userData;
      await checkPassword(cryptedPassword, password);

      const access_token = generateToken(id);

      return res
        .status(200)
        .json(successResponse({ access_token }, 'Login successful'));
    } catch (err) {
      console.log(err);

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
};
