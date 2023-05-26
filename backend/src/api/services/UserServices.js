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
    const User = {
      name,
      email,
      password: hashedPassword,
    };
    try {
      // check if email already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        throw new Error('Email already exists');
      }
      const createUser = prisma.user.create({ data: User });
      // const { password: _password, ...userWithoutPassword } = createUser; //spread operator use gareko yo
      return createUser;
    } catch (err) {
      throw err;
    }
  },

  checkUser: async (data) => {
    try {
      const user = prisma.user.findUnique({
        where: data,
      });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (err) {
      throw err;
    }
  },

  getUsersById: async ({ email, password }) => {
    try {
      const user = prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Compare the provided password with the stored hash
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user.id }, 'your-secret-key');

      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ error: 'Failed to login' });
    }
  },
};
