import { fromJS } from 'immutable';
import { handle } from 'redux-pack';
import { ATTEMPT_LOGIN, FETCH_LOGIN, UPDATE_USER_INFO } from './constants';

const initialState = fromJS({
  isLoggingIn: false,
});

function handleLoginAttempt(state) {
  return state.set('isLoggingIn', true);
}

function updateUserInfo(state, { payload }) {
  return state.merge({ userInfo: payload });
}

function handleFetchLogin(state, action) {
  return handle(state, action, {
    success: (prevState) => {
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return updateUserInfo(prevState, action);
    }
  });
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return handleLoginAttempt(state, action);
    case FETCH_LOGIN:
      return handleFetchLogin(state, action);
    case UPDATE_USER_INFO:
      return updateUserInfo(state, action)
    default:
      return state;
  }
};
