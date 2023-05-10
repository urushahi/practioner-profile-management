import http from '../utils/http';

import config from '../config';
import fromJson from '../entities/practitionersList';

export const fetchAllPractitioners = async (payload = {}) => {
  const url = config.endpoints.practitioner.getAllPractitioners;
  const { data } = await http.get(url);
  return fromJson(data);
};
