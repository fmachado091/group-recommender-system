import request from '../utils/request';

export function fetchUserGroups(userId) {
  const endpoint = `api/user/${userId}/groups`;
  return request(endpoint);
}

export function fetchAllUsers() {
  const endpoint = 'api/user/all';
  return request(endpoint);
}
