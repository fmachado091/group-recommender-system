import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { attemptLogin } from '../../modules/auth/actions';
import { makeSelectIsLoggingIn, makeSelectAuthCode } from './selectors';
import Home from '../../components/Home';

const mapStateToProps = createStructuredSelector({
  isLoggingIn: makeSelectIsLoggingIn(),
  code: makeSelectAuthCode(),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: () => dispatch(attemptLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
