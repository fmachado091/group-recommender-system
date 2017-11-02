import request, { postRequest } from '../utils/request';

export function createGroup(creatorId) {
  const endpoint = '/api/group';
  return postRequest(endpoint, { creator_id: creatorId });
}

export function fetchGroupUsers(groupId) {
  const endpoint = `/api/group/${groupId}`;
  return request(endpoint);
}

export function addUserToGroup(groupId, user) {
  const endpoint = `/api/group/${groupId}`;
  return postRequest(endpoint, { user_id: user });
}

export function removeUserFromGroup(groupId, user) {
  const endpoint = `/api/group/${groupId}`;
  return request(endpoint, { 
    method: 'DELETE',
    body: JSON.stringify({ user_id: user })
  });  
}
