import { postRequest } from '../utils/request';
import { JUKIFY_CLIENT_ID, SPOTIFY_AUTH_URL } from './constants';

export const buildQueryStrings = (obj) =>
  Object.keys(obj).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

export function attemptLogin() {
  const query = buildQueryStrings({
    client_id: JUKIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: `${process.env.REACT_APP_BASE_URI}/login`,
    state: 'csrfToken',
  });
  const endpoint = `${SPOTIFY_AUTH_URL}?${query}`;
  
  return window.location.href = endpoint;
}

export function fetchLogin(code) {
  const endpoint = 'api/login';
  return postRequest(endpoint, { code, redirect_uri: `${process.env.REACT_APP_BASE_URI}/login` });
}

export function isLoggedIn() {
  return !!localStorage.getItem('userInfo');
}
