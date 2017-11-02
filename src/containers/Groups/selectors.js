import { createSelector } from 'reselect';
import { selectUserInfo } from '../Login/selectors';

const selectGroups = (state) => state.groups;

const makeSelectGroups = () => createSelector(
  selectGroups, (groups) => groups.toJS(),
);

const makeSelectUser = () => createSelector(
  selectUserInfo, (userInfo) => ({
    name: userInfo.get('display_name'),
    id: userInfo.get('id'),
  }), 
);

export {
  makeSelectGroups,
  makeSelectUser,
}
