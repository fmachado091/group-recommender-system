import { JUKIFY_CLIENT_ID, SPOTIFY_AUTH_URL } from './constants';

export const buildQueryStrings = (obj) =>
  Object.keys(obj).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

export function attemptLogin(houseId) {
  const query = buildQueryStrings({
    client_id: JUKIFY_CLIENT_ID,
    response_type: 'code',
    redirect_uri: 'http://local.jukify.us',
    state: 'csrfToken',
  });
  const endpoint = `${SPOTIFY_AUTH_URL}?${query}`;
  
  return window.location.href = endpoint;
}