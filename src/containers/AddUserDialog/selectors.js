import { createSelector } from 'reselect';

const selectSelectedGroup = (state) => state.selectedGroup.get('id');
const selectUsers = (state) => state.users;

export const makeSelectUsers = () => createSelector(
  selectUsers, (users) => users.toJS(),
);

export const makeSelectSelectedGroup = () => createSelector(
  selectSelectedGroup, (selectedGroup) => selectedGroup,
);
