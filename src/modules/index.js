import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import users from './users/reducer';
import selectedGroup from './groups/selected-reducer';
import groups from './groups/reducer';
import auth from './auth/reducer';

export default combineReducers({
  router: routerReducer,
  users,
  groups,
  selectedGroup,
  auth,
})
