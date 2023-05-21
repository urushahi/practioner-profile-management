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
    },
    practitioner: {
      getAllPractitioners: '/practitioners/',
      createPractitioner: '/practitioners/',
      getPractitionersById: '/practitioners/',
      updatePractitionersById: '/practitioners/',
      deletePractitionersById: '/practitioners/',
    },
    allergies: {
      getAllAllergies: '/allergies/',
      createAllergy: '/allergies/',
      getAllergyById: '/allergies/',
      updateAllergyById: '/allergies/',
      deleteAllergyById: '/allergies/',
    },
  },
};

export default config;
