const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

module.exports = {
  // getUsers: () => {
  //   try {
  //     const data = prisma.user.findMany();
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  createUser: (data) => {
    const { name, email, password } = data;
    const User = {
      name,
      email,
      password,
    };

    //     const saltRounds = 10;
    // bcrypt.genSalt(saltRounds, (err, salt) => {
    //   // Handle the salt generation error if any
    //   if (err) {
    //     console.error('Error generating salt:', err);
    //     return;
    //   }

    //   // Use the salt for hashing or other operations
    //   // Example:
    //   const password = 'myPassword';
    //   bcrypt.hash(password, salt, (err, hash) => {
    //     // Handle the hash generation error if any
    //     if (err) {
    //       console.error('Error generating hash:', err);
    //       return;
    //     }

    //     // Store the hash in the database or use it as needed
    //     console.log('Hash:', hash);
    //   });
    // });

    try {
      const createUser = prisma.user.create({ data: User });
      return createUser;
    } catch (err) {
      console.log(err);
    }
  },
  // getUsersById: (id) => {
  //   try {
  //     const data = prisma.user.findUnique({
  //       where: {
  //         id,
  //       },
  //     });
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  // updateUserById: (id, data) => {
  //   try {
  //     // const {name,email} = data;
  //     const user = prisma.user.update({
  //       where: {
  //         id,
  //       },
  //       data,
  //     });
  //     return user;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // deleteUserById: (id, data) => {
  //   try {
  //     // const {name,email} = data;
  //     const deleteUser = prisma.user.delete({
  //       where: {
  //         id,
  //       },
  //     });
  //     return deleteUser;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
