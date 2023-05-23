import axios from 'axios';
import config from '../config';

import * as tokenService from '../services/token';
import { generateToken } from '../services/auth';
import { redirect } from 'react-router';
import { routes } from '../constants/routes';

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

let subscribers = []; // holds original requests before access token expires which are trigerred with new access token
function onAccessTokenFetched(access_token) {
  // takes new access token as parameter and filters the subscriver array and executes each with new accesc token
  subscribers = subscribers.filter((callback) => callback(access_token));
}

function addSubscriber(callback) {
  // pushes original request to subscribers array with callback functions
  //  that append new access token in the header and exceutes the response next
  subscribers.push(callback);
}

http.interceptors.response.use(
  (response) => {
    return response; // return the response if error not occured
  },
  async (error) => {
    const originalRequest = error.config;
    const { statusCode, message } = error.response.data;

    if (statusCode === 403 && message === 'Access token has expired') {
      try {
        const response = await generateToken();
        const newAccessToken = response.data.data.access_token;
        tokenService.setAccessToken(newAccessToken);
        onAccessTokenFetched(newAccessToken);

        // handles the retry of original failed request with new access token
        // - It is a promise which is resolved when original request is retried with new updated token
        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber((access_token) => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`;
            resolve(axios(originalRequest));
          });
        });

        return retryOriginalRequest; // effectively retries original request
      } catch (err) {
        // Handle refresh token error if necessary
        console.error('Refresh token error:', err);
        // Redirect to login page or show an error message
        redirect(routes.LOGIN);
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);
export default http;
