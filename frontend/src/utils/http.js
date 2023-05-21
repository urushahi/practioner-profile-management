import axios from 'axios';
import config from '../config';
// import { BrowserRoutes as history } from '../routes/routes';

import * as tokenService from '../services/token';

// import { REQUEST_TIMEOUT } from 'constants/errors';
// import { routes } from '../routes';

const AUTHORIZATION_HEADER = 'Authorization';

/**
 * Build authorization header
 *
 * @param {string} accessToken
 * @returns {string}
 */
function buildAuthHeader(accessToken) {
  return `Bearer ${accessToken}`;
}

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: REQUEST_TIMEOUT.TIME,
});

/**
 * Interceptor to add authentication header for all requests.
 *
 */
http.interceptors.request.use(
  (request) => {
    const accessToken = tokenService.getAccessToken();

    if (accessToken) {
      request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(accessToken);
    }

    return request;
  },
  (requestError) => {
    throw requestError;
  }
);

// http.interceptors.response.use(
//   (response) => response,
//   /**
//    * This interceptor checks if the response had a 401 status code, which means
//    * that the access token used for the request has expired. It then refreshes
//    * the access token and resends the original request.
//    */
//   (error) => {
//     const { response } = error;

//     // if (gotUnauthorizedError(response)) {
//     //   tokenService.clear();
//     //   if (location.pathname !== "/login") {
//     //     return history.navigate(routes.LOGIN);
//     //   }
//     // }

//     // if (gotPageNotFoundError(response)) {
//     //   return history.navigate(routes.PAGE_NOT_FOUND);
//     // }

//     // if (gotAccessDeniedError(response)) {
//     //   return history.push({ pathname: PUBLIC_ROUTES.ACCESS_DENIED, state: { status: response?.status } });
//     // }

//     // if (location.pathname !== "/login" && error.code === "ECONNABORTED") {
//     //   return history.navigate(routes.REQUEST_TIMEOUT);
//     // }
//     return Promise.reject(error); //eslint-disable-line
//   }
// );

/**
 * Returns true if the response status is set as 401.
 *
 * @param {Object} response Axios response object.
 * @returns {boolean}
 */
// const gotUnauthorizedError = (response) =>
//   response && response.status && response.status === 401;

// // const gotAccessDeniedError = response => response && response.status && response.status === 403;

// const gotPageNotFoundError = (response) =>
//   response && response.status && response.status === 404;

export default http;
