import { createSelector } from 'reselect';

const selectQuery = (state) => state.router.location.query;
const selectAuth = (state) => state.auth;
const selectUserInfo = (state) => selectAuth(state).get('userInfo');
const selectIsLoggingIn = (state) => selectAuth(state).get('isLoggingIn');
const selectAuthCode = (state) => selectQuery(state).code;

const makeSelectIsLoggingIn = () => createSelector(
  selectIsLoggingIn, (isLoggingIn) => isLoggingIn,
);

const makeSelectAuthCode = () => createSelector(
  selectAuthCode, (code) => code,
);

const makeSelectUserInfo = () => createSelector(
  selectUserInfo, (userInfo) => userInfo.toJS(),
);

const makeSelectIsLoggedIn = () => createSelector(
  selectUserInfo, (userInfo) => !!(userInfo),
);

export {
  makeSelectIsLoggingIn,
  makeSelectAuthCode,
  makeSelectIsLoggedIn,
  makeSelectUserInfo,
};
