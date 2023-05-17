const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  getUsers: () => {
    try {
      const data = prisma.user.findMany();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  createUser: async (data) => {
    const { name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const User = {
      name,
      email,
      password: hashedPassword,
    };

    // login: async (data) => {
    //   try {
    //     const data = prisma.user.findMany();
    //     const { password } = data;
    //     const passwordMatch = await bcrypt.compare(password, password);
    //     if (!passwordMatch) {
    //       return res.status(401).json({ error: 'Invalid credentials' });
    //     }

    //     // Generate a JWT token
    //     const token = jwt.sign({ id }, 'your-secret-key');
    //     console.log(token);
    //     return token;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

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
  getUsersById: async (payload) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: payload.email,
        },
      });
      if (!user) {
        return { error: 'Invalid credentials' };
      }
      // Compare the provided password with the stored hash
      const passwordMatch = await bcrypt.compare(
        payload.password,
        user.password
      );

      if (!passwordMatch) {
        return { error: 'Invalid credentials' };
      }

      const token = await jwt.sign(payload, 'secretKey');

      return { token: token };
    } catch (error) {
      return error.message;
    }
  },

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
