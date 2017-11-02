import { fromJS } from 'immutable';
import { handle } from 'redux-pack';
import { FETCH_USERS } from './constants';

const initialState = fromJS([]);

function handleFetchUsers(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      return prevState.merge(action.payload);
    },
  })
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return handleFetchUsers(state, action);
    default:
      return state;
  }
};
