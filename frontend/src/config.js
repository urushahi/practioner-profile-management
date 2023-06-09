/* eslint-disable */

const config = {
  env: process.env.REACT_APP_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    users: {
      getAllUsers: '/users/',
      signupUser: '/users/signup',
      signin: '/users/signin',
      generateToken: '/users/access-token',
    },
    practitioner: {
      getAllPractitioners: '/practitioners/',
      createPractitioner: '/practitioners/',
      getPractitionersById: '/practitioners/:id',
      updatePractitionersById: '/practitioners/:id',
      deletePractitionersById: '/practitioners/:id',
    },
    allergies: {
      getAllAllergies: '/allergies/',
      createAllergy: '/allergies/',
      getAllergyById: '/allergies/:id',
      updateAllergyById: '/allergies/:id',
      deleteAllergyById: '/allergies/:id',
    },
  },
};

export default config;
