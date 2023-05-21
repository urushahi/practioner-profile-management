import http from '../utils/http';

import config from '../config';
import signupUser from '../entities/signupUser';

export const login = async (payload) => {
  const url = config.endpoints.users.signin;
  return await http.post(url, payload);
};

export const signup = async (payload) => {
  const url = config.endpoints.users.signupUser;
  const formattedPayload = signupUser.toJson(payload);
  return await http.post(url, formattedPayload);
};
