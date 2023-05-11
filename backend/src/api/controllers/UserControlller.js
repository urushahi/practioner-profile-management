const pool = require('../../config');
const {
  getUsers,
  createUser,
  getUsersById,
  updateUserById,
  deleteUserById,
} = require('../services/UserServices');

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
};
