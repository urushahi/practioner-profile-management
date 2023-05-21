import config from '../config';
import http from '../utils/http';
import allergiesList from '../entities/allergiesList';
import createAllergy from '../entities/createAllergy';
import allergyById from '../entities/allergyById';

export const fetchAllergies = async (payload = {}) => {
  const url = config.endpoints.allergies.getAllAllergies;
  const { data } = await http.get(url);
  return allergiesList.fromJson(data.data);
};

export const createAllergies = async (payload) => {
  const url = config.endpoints.allergies.createAllergy;
  const formattedPayload = createAllergy.toJson(payload);
  console.log(formattedPayload);
  return await http.post(url, formattedPayload);
};

export const getAllergyById = async (id) => {
  const url = config.endpoints.allergies.getAllergyById + id;
  const { data } = await http.get(url);
  return allergyById.fromJson(data.data);
};

export const updateAllergyById = async (payload) => {
  const { id } = payload;
  const url = config.endpoints.allergies.updateAllergyById + id;
  const formattedPayload = createAllergy.toJson(payload);
  return await http.put(url, formattedPayload);
};

export const deleteAllergyById = async (id) => {
  const url = config.endpoints.allergies.deleteAllergyById + id;
  return await http.delete(url);
};
