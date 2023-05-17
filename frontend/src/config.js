/* eslint-disable */

const config = {
  env: process.env.REACT_APP_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    users: {
      getAllUsers: '/users/',
      signupUser: '/users/',
      login: '/login',
    },
    practitioner: {
      getAllPractitioners: '/practitioners/',
      createPractitioner: '/practitioners/',
      getPractitionersById: '/practitioners/',
      updatePractitionersById: '/practitioners/',
    },
  },
};

export default config;
