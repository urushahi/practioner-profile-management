const Allergy = require('./Allergy/Allergy');
const Practitioner = require('./Practitioner/Practitioner');
const CreatePractitionerRequests = require('./Practitioner/CreatePractitionerRequests');
const CreateAllergy = require('./Allergy/CreateAllergyRequest');
const WorkingDays = require('./WorkingDays/WorkingDays');

const User = require('./User/User');
const CreateUserRequest = require('./User/CreateUserRequest');
const LoginRequest = require('./User/LoginRequest');
const AuthenticationResponse = require('./User/AuthenticationResponse');

module.exports = {
  User,
  Allergy,
  WorkingDays,
  LoginRequest,
  Practitioner,
  CreateAllergy,
  CreateUserRequest,
  AuthenticationResponse,
  CreatePractitionerRequests,
};
