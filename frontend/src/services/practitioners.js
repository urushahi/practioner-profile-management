import http from '../utils/http';

import config from '../config';
import fromJson from '../entities/practitionersList';
import toJson from '../entities/createPractitioner';

export const fetchAllPractitioners = async (payload = {}) => {
  const url = config.endpoints.practitioner.getAllPractitioners;
  const { data } = await http.get(url);
  return fromJson(data);
};

export const createPractioners = async (payload) => {
  const url = config.endpoints.practitioner.createPractitioner;
  const formattedPayload = toJson(payload);
  return await http.post(url, formattedPayload);
};
