module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      description: 'Email of the user',
    },
    name: {
      type: 'string',
      description: 'Name of the user',
    },
    password: {
      type: 'string',
      description: 'Password of the user',
    },
    confirm_password: {
      type: 'string',
      description: 'Confirmation password',
    },
  },
  required: ['email', 'password', 'confirm_password'],
};
