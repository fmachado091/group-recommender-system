import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import blue from 'material-ui/colors/blue';
import User from '../User';

const styles = {
  avatar: {
    background: blue[100],
    color: blue[600],
  },
};

class AddUserDialog extends React.PureComponent {
  handleRequestClose = () => {
    this.props.onRequestClose();
  };

  handleListItemClick = (value) => () => {
    this.props.onRequestClose(value);
  };

  render() {
    const { classes, users, onRequestClose, ...other } = this.props;
    const userItems = users.map((user, index) => (
      <User name={user} index={index} key={user} onClick={this.handleListItemClick(user)} />
    ));

    return (
      <Dialog onRequestClose={this.handleRequestClose} {...other}>
        <DialogTitle>Add user to group</DialogTitle>
        <div>
          <List>
            {userItems}
          </List>
        </div>
      </Dialog>
    );
  }
}

AddUserDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(AddUserDialog);
