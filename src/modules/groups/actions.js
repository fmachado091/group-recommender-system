import {
  CREATE_GROUP,
  FETCH_GROUP_USERS,
  OPEN_ADD_USER,
  CLOSE_ADD_USER,
  REMOVE_USER,
  ADD_USER,
} from './constants';
import { 
  createGroup as requestGroupCreation,
  fetchGroupUsers as requestGroupUsers,
  addUserToGroup,
  removeUserFromGroup as requestUserRemoval,
} from '../../api/groups';
import {
  fetchUserGroups as requestUserGroups
} from '../../api/user';

export function fetchUserGroups(userId) {
  return async (dispatch, getState) => {
    const userGroups = await requestUserGroups(userId);
    userGroups.map((groupId) => dispatch(fetchGroupUsers(groupId)));
  }
}

export function openAddUserDialog(groupId) {
  return {
    type: OPEN_ADD_USER,
    groupId,
  }
}

export function closeAddUserDialog(selectedUser) {
  return (dispatch, getState) => {
    if (selectedUser) {
      const groupId = getState().selectedGroup.get('id');
      dispatch(fetchAddUserToGroup(groupId, selectedUser));
    }
    dispatch({ type: CLOSE_ADD_USER });
  }
}

export function fetchAddUserToGroup(groupId, selectedUser) {
  return {
    type: ADD_USER,
    meta: {
      groupId,
    },
    promise: addUserToGroup(groupId, selectedUser),
  }
}

export function fetchGroupUsers(groupId) {
  return {
    type: FETCH_GROUP_USERS,
    meta: {
      groupId,
    },
    promise: requestGroupUsers(groupId),
  }
}

export function removeUserFromGroup(groupId, userId) {
  return {
    type: REMOVE_USER,
    meta: {
      groupId,
      userId,
    },
    promise: requestUserRemoval(groupId, userId),
  }
}

export function createGroup({ name, id: creatorId }) {
  return {
    type: CREATE_GROUP,
    meta: {
      creatorId,
    },
    promise: requestGroupCreation(creatorId),
  }
}
