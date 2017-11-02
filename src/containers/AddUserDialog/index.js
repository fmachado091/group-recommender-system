import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectSelectedGroup, makeSelectUsers } from './selectors';
import { closeAddUserDialog } from '../../modules/groups/actions';
import AddUserDialog from '../../components/Group/AddUserDialog';

class Container extends React.PureComponent {
  render() {
    const { selectedGroup, groupId, ...dialogProps } = this.props;
    return (<AddUserDialog open={selectedGroup === groupId} {...dialogProps} />)
  }
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  selectedGroup: makeSelectSelectedGroup(),
});

const mapDispatchToProps = (dispatch) => ({
  onRequestClose: (selectedUser) => dispatch(closeAddUserDialog(selectedUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
