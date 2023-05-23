import http from '../utils/http';

import config from '../config';
import signupUser from '../entities/signupUser';

import * as tokenService from './token';
import { getRefreshToken } from './token';

export const login = async (payload) => {
  const url = config.endpoints.users.signin;
  return await http.post(url, payload);
};

export const signup = async (payload) => {
  const url = config.endpoints.users.signupUser;
  const formattedPayload = signupUser.toJson(payload);
  return await http.post(url, formattedPayload);
};

/**
 * Log out of the system.
 *
 * @param {string} refreshToken
 */
export async function logout() {
  tokenService.clear();
  localStorage.removeItem('persist:userAuth');
}
export const generateToken = async () => {
  const url = config.endpoints.users.generateToken;
  const payload = { refresh_token: getRefreshToken() };
  return await http.post(url, payload);
};
