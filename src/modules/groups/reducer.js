import { fromJS } from 'immutable';
import { handle } from 'redux-pack';
import { CREATE_GROUP, FETCH_GROUP_USERS, REMOVE_USER, ADD_USER } from './constants';

const initialState = fromJS([]);

function handleCreateGroup(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      const id = action.payload.group_id;
      return prevState.concat({ id, users: [action.meta.creatorId] });
    }
  });
}

function handleFetchGroupUsers(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      return prevState.concat({ id: action.meta.groupId, users: action.payload});
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
    case FETCH_GROUP_USERS:
      return handleFetchGroupUsers(state, action);
    case CREATE_GROUP:
      return handleCreateGroup(state, action);
    case ADD_USER:
    case REMOVE_USER:
      return handleGroupAction(state, action);
    default:
      return state;
  }
};
