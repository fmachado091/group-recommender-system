import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { attemptLogin, fetchUserInfo } from '../../modules/auth/actions';
import {
  makeSelectIsLoggingIn,
  makeSelectAuthCode,
  makeSelectIsLoggedIn,
} from './selectors';
import Login from '../../components/Login';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
  isLoggingIn: makeSelectIsLoggingIn(),
  code: makeSelectAuthCode(),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: () => dispatch(attemptLogin()),
  fetchUserInfo: (code) => dispatch(fetchUserInfo(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
