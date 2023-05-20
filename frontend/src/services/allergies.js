import config from '../config';
import http from '../utils/http';
import allergiesList from '../entities/allergiesList';

export const fetchAllergies = async (payload = {}) => {
  const url = config.endpoints.allergies.getAllAllergies;
  const { data } = await http.get(url);
  return allergiesList.fromJson(data.data);
};
