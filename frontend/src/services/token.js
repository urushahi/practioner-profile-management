import * as storage from '../utils/storage';

/**
 * Persist token to storage.
 *
 * @param {{accessToken, refresToken}} params
 */
export function persist({ accessToken }) {
  setAccessToken(accessToken);
}

/**
 * Get access token from storage.
 *
 * @returns {string}
 */

export function getAccessToken() {
  return storage.get('access-token');
}

/**
 * Set access token to storage.
 *
 * @param {string} accessToken
 */
export function setAccessToken(accessToken) {
  storage.set('access-token', accessToken);
}

/**
 * Get refresh token from storage.
 *
 * @returns {string}
 */
export function getRefreshToken() {
  return storage.get('refresh-token');
}

/**
 * Set refresh token to storage.
 *
 * @param {string} refreshToken
 * @returns {string}
 */
export function setRefreshToken(refreshToken) {
  return storage.set('refresh-token', refreshToken);
}

/**
 * Clear tokens.
 */
export function clear() {
  storage.clear();
}

/**
 * parse jwt token
 */
export const parseJwt = (token) => {
  if (!token) return null;

  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};
