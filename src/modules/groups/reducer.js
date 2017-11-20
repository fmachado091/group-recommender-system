import { fromJS } from 'immutable';
import { handle } from 'redux-pack';
import { CREATE_GROUP, FETCH_GROUP_USERS, REMOVE_USER, ADD_USER, ADD_GROUP } from './constants';

const initialState = fromJS([]);

function handleCreateGroup(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      const id = action.payload.group_id;
      const { creatorId, creatorName } = action.meta;
      return prevState.concat({ id, users: [{ id: creatorId, name: creatorName}] });
    }
  });
}

function handleAddGroup(state, action) {
  return state.concat(action.group);
}

function handleFetchGroupPlaylist(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      const groupId = action.meta.groupId;
      return prevState.map((group) => groupId === group.id ? { ...group, playlist: action.payload.playlist_url } : group);
    }
  });
}

function handleGroupAction(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      const groupId = action.meta.groupId;
      return prevState.map((group) => groupId === group.id ? { id: groupId, users: action.payload.group } : group);
    },
  });
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return handleAddGroup(state, action);
    case CREATE_GROUP:
      return handleCreateGroup(state, action);
    case ADD_USER:
    case REMOVE_USER:
      return handleGroupAction(state, action);
    default:
      return state;
  }
};
