import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const NotFound = Loadable({
  loader: () => import('./components/NotFound'),
  loading: Loading,
});

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
})

function App(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
