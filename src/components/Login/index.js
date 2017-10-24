import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Logo from '../Logo';
import styles from './styles';
import './Login.css';

class Login extends React.PureComponent {
  componentWillMount() {
    const { code, fetchUserInfo, isLoggedIn } = this.props;
    if(code && !isLoggedIn) {
      fetchUserInfo(code)
    }
  }

  render() {
    const { classes, isLoggedIn, onLoginClick } = this.props;

    return(
      <div className={classes.root}>
        <div className={classes.content}>
          <header className={classes.header}>
            <Logo rotating className={classes.logo} />
            <h1 className="Login-title">Welcome to Jukify</h1>
            <p className={classes.lowerText}> You're about to have an awesome experience with your friends, but first: </p>
          </header>
          <Button 
            raised 
            color="primary" 
            className={classes.button} 
            onClick={onLoginClick}
            disabled={isLoggedIn}
          >
            Login to Spotify
          </Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.object,
  classes: PropTypes.shape({
    button: PropTypes.string,
    header: PropTypes.string,
  }),
  code: PropTypes.string,
  fetchUserInfo: PropTypes.func,
  goToGroups: PropTypes.func,
  onLoginClick: PropTypes.func,
}

export default withStyles(styles)(Login);
