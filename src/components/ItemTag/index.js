import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import './ItemTag.css';

const styles = theme => ({
  item: {
    animation: 'rolldown .7s 1',
  },
  text: {
    color: 'white',
    paddingLeft: theme.spacing.unit * 2,
  }
});

function ItemTag({ classes, avatar, text, subtext, onClick}) {
  return (
    <div className={classes.item}>
      <ListItem button className={classes.root} color="primary" onClick={onClick}>
        { avatar }
        <ListItemText primary={text} secondary={subtext} />
      </ListItem>
    </div>
  )
}

ItemTag.propTypes = {
  classes: PropTypes.shape({
    item: PropTypes.string,
    text: PropTypes.string,
  }),
  avatar: PropTypes.element,
  text: PropTypes.string,
  subtext: PropTypes.string,
  onClick: PropTypes.func,
};

export default withStyles(styles)(ItemTag);