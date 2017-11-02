import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  root: {
    color: 'white',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function GroupsAppBar({ classes, userName }) {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton className={classes.menuButton} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          {userName}'s Groups
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

GroupsAppBar.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string,
    menuButton: PropTypes.string,
  }),
};

export default withStyles(styles)(GroupsAppBar)