const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getUsers: () => {
    try {
      const data = prisma.user.findMany();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  createUser: (data) => {
    const { name, email } = data;
    const User = {
      name,
      email,
    };

    try {
      const createUser = prisma.user.create({ data: User });
      return createUser;
    } catch (err) {
      console.log(err);
    }
  },
  getUsersById: (id) => {
    try {
      const data = prisma.user.findUnique({
        where: {
          id,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  },

  updateUserById: (id, data) => {
    try {
      // const {name,email} = data;
      const user = prisma.user.update({
        where: {
          id,
        },
        data,
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  },
  deleteUserById: (id, data) => {
    try {
      // const {name,email} = data;
      const deleteUser = prisma.user.delete({
        where: {
          id,
        },
      });
      return deleteUser;
    } catch (err) {
      console.log(err);
    }
  },
};
