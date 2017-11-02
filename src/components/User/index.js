import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import purple from 'material-ui/colors/purple';
import blueGrey from 'material-ui/colors/blueGrey';
import Avatar from 'material-ui/Avatar';
import ItemTag from '../ItemTag';

const CLASSES = ['purpleAvatar', 'greenAvatar', 'greyAvatar'];
const styles = theme => ({
  avatar: {
    color: '#fff',
  },
  purpleAvatar: { backgroundColor: purple['A200'] },
  greenAvatar: { backgroundColor: green['A200'] },
  greyAvatar: { backgroundColor: blueGrey['A200'] }
});

function User({ classes, name, index, onClick }) {
  const avatarClassName = `${classes.avatar} ${classes[CLASSES[index % 3]]}`; 
  const avatar = (<Avatar className={avatarClassName}> {name.charAt(0).toUpperCase()} </Avatar>);
  return (
    <ItemTag avatar={avatar} text={name} onClick={onClick} />
  )
}

User.propTypes = {
  classes: PropTypes.shape({
    avatar: PropTypes.string,
    purpleAvatar: PropTypes.string,
    greenAvatar: PropTypes.string,
    greyAvatar: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,  
};

export default withStyles(styles)(User)
