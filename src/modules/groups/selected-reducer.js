import { fromJS } from 'immutable';
import { OPEN_ADD_USER, CLOSE_ADD_USER } from './constants';

const initialState = fromJS({});

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_ADD_USER:
      return state.set('id', action.groupId);
    case CLOSE_ADD_USER:
      return initialState;
    default:
      return state;
  }
}
