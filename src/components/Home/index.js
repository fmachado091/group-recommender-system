import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import logo from './logo.svg';
import './Home.css';

const styles = (theme) => ({
  button: {
    margin: `${2 * theme.spacing.unit}px auto`,
    color: 'white',
  },
});

function Home({ classes, isLoggingIn, onLoginClick }) {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1 className="Home-title">Welcome to Jukify</h1>
      </header>
      <Button 
        raised 
        color="primary" 
        className={classes.button} 
        onClick={onLoginClick}
        disabled={isLoggingIn}
      >
        Login to Spotify
      </Button>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
  }),
  isLoggingIn: PropTypes.bool,
  onLoginClick: PropTypes.func,
}

export default withStyles(styles)(Home);
