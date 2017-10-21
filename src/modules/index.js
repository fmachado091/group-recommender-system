import { combineReducers } from 'redux'
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import auth from './auth/reducer';

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default combineReducers({
  routing: routeReducer,
  auth,
})