import { createSelector } from 'reselect';

const selectQuery = (state) => state.routing.getIn(['location', 'query']);
const selectAuth = (state) => state.auth;
const selectIsLoggingIn = (state) => selectAuth(state).get('isLoggingIn');
const selectAuthCode = (state) => selectQuery(state).get('code');

const makeSelectIsLoggingIn = () => createSelector(
  selectIsLoggingIn, (isLoggingIn) => isLoggingIn,
);
const makeSelectAuthCode = () => createSelector(
  selectAuthCode, (code) => code,
);

export {
  makeSelectIsLoggingIn,
  makeSelectAuthCode,
};
