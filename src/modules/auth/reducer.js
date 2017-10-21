import { fromJS } from 'immutable';
import { ATTEMPT_LOGIN } from './constants';

const initialState = fromJS({
  isLoggingIn: false,
});

function handleLoginAttempt(state) {
  return state.set({ isLoggingIn: true });
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN:
      return handleLoginAttempt(state, action);
    default:
      return state;
  }
};
