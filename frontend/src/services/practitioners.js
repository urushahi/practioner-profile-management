import http from '../utils/http';

import config from '../config';
import practitionersList from '../entities/practitionersList';
import createPractitioner from '../entities/createPractitioner';
import getPractitionersById from '../entities/practitionersById';

export const fetchAllPractitioners = async (payload = {}) => {
  const url = config.endpoints.practitioner.getAllPractitioners;
  const { data } = await http.get(url);
  return practitionersList.fromJson(data.data);
};

export const createPractioners = async (payload) => {
  const url = config.endpoints.practitioner.createPractitioner;
  const formattedPayload = createPractitioner.toJson(payload);
  return await http.post(url, formattedPayload);
};

export const getPractitionerById = async (id) => {
  const url = config.endpoints.practitioner.getPractitionersById.replace(
    ':id',
    id
  );
  const { data } = await http.get(url);
  return getPractitionersById.fromJson(data.data);
};

export const updatePractitionerById = async (payload) => {
  const { id } = payload;
  const url = config.endpoints.practitioner.updatePractitionersById.replace(
    ':id',
    id
  );
  const formattedPayload = createPractitioner.toJson(payload);
  return await http.put(url, formattedPayload);
};

export const deletePractitionerById = async (id) => {
  const url = config.endpoints.practitioner.deletePractitionersById.replace(
    ':id',
    id
  );
  return await http.delete(url);
};
