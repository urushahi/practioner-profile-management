/* eslint-disable */

const config = {
  env: process.env.REACT_APP_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    users: {
      getAllUsers: '/users/',
    },
    practitioner: {
      getAllPractitioners: '/practitioners/',
    },
  },
};

export default config;
