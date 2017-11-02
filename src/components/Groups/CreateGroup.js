import React from 'react';
import PropTypes from 'prop-types';
import GroupAdd from 'material-ui-icons/GroupAdd';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = (theme) => ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
});

function CreateGroupButton({ classes, onClick }) {
  return (
    <Button fab dense color="accent" onClick={onClick} classes={classes}>
      <GroupAdd />
    </Button>    
  );
}

CreateGroupButton.propTypes = {
  classes: PropTypes.shape({
    fab: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default withStyles(styles)(CreateGroupButton);
