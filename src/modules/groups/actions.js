import {
  CREATE_GROUP,
  ADD_GROUP,
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
  fetchGroupPlaylist as requestGroupPlaylist,
} from '../../api/groups';
import {
  fetchUserGroups as requestUserGroups
} from '../../api/user';

export function fetchUserGroups(userId) {
  return async (dispatch, getState) => {
    const userGroups = await requestUserGroups(userId);
    userGroups.map((groupId) => {
      dispatch(fetchGroupInfo(groupId))    
    });
  }
}

export function fetchGroupInfo(groupId) {
  return async (dispatch, getState) => {
    const groupUsers = await requestGroupUsers(groupId);
    const groupPlaylistResponse = await requestGroupPlaylist(groupId);
    dispatch(addGroup(groupId, groupUsers, groupPlaylistResponse.playlist_url));
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

export function addGroup(id, users, playlist) {
  return {
    type: ADD_GROUP,
    group: {
      id,
      users,
      playlist,
    }
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

export function createGroup({ name: creatorName, id: creatorId }) {
  return {
    type: CREATE_GROUP,
    meta: {
      creatorId,
      creatorName,
    },
    promise: requestGroupCreation(creatorId),
  }
}
