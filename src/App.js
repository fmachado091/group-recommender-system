import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { updateUserInfo } from './modules/auth/actions';
import { PrivateRoute } from './utils/routing';
import Loading from './components/Loading';

const NotFound = Loadable({
  loader: () => import('./components/NotFound'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./containers/Login'),
  loading: Loading,
})

class App extends React.PureComponent {
  componentWillMount() {
    this.props.registerUserInfo();
  }

  render() {
    return(
      <Switch>
        <PrivateRoute path="/" exact  component={NotFound} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

// TODO: Make syncWithLocalStorage work and drop this (I know it's ugly =/)
function mapDispatchToProps(dispatch) {
  const userInfo = localStorage.getItem('userInfo');
  return {
    registerUserInfo: (routes) => dispatch(updateUserInfo(userInfo)),
    dispatch,
  };
}

App.propTypes = {
  registerUserInfo: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(App);
