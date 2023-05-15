import http from '../utils/http';

import config from '../config';
import signupUser from '../entities/signupUser';

// export const fetchAllPractitioners = async (payload = {}) => {
//   const url = config.endpoints.practitioner.getAllPractitioners;
//   const { data } = await http.get(url);
//   return practitionersList.fromJson(data);
// };

export const createUsers = async (payload) => {
  const url = config.endpoints.users.signupUser;
  const formattedPayload = signupUser.toJson(payload);
  console.log(formattedPayload);
  return await http.post(url, formattedPayload);
};

// export const getPractitionerById = async (id) => {
//   const url = config.endpoints.practitioner.getPractitionersById + id;
//   const { data } = await http.get(url);
//   return getPractitionersById.fromJson(data);
// };

// export const updatePractitionerById = async (payload) => {
//   const { id } = payload;
//   const url = config.endpoints.practitioner.updatePractitionersById + id;
//   const formattedPayload = createPractitioner.toJson(payload);
//   return await http.put(url, formattedPayload);
// };

// export const deletePractitionerById = async (id) => {
//   const url = config.endpoints.practitioner.updatePractitionersById + id;
//   return await http.delete(url);
// };
