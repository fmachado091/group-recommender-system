import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectUser, makeSelectGroups } from './selectors';
import { fetchAllUsers } from '../../modules/users/actions';
import { createGroup, fetchUserGroups, openAddUserDialog, removeUserFromGroup } from '../../modules/groups/actions';
import Groups from '../../components/Groups';

class Container extends React.PureComponent {
  componentWillMount() {
    const { fetchUsers, fetchGroups, user: { id: userId } } = this.props
    fetchGroups(userId);
    fetchUsers();
  }

  render() {
    return (<Groups {...this.props} />);
  }
}

const mapStateToProps = createStructuredSelector({
  groups: makeSelectGroups(),
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch, { history }) => ({
  fetchUsers: () => dispatch(fetchAllUsers()),  
  fetchGroups: (userId) => dispatch(fetchUserGroups(userId)),
  onRemoveUserClick: (groupId) => (userId) => () => dispatch(removeUserFromGroup(groupId, userId)),
  onNewGroupClicked: (user) => () => dispatch(createGroup(user)),
  onAddUserClicked: (groupId) => () => dispatch(openAddUserDialog(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
