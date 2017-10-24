import React from 'react'; 
import { MuiThemeProvider } from 'material-ui/styles';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import theme from './assets/theme';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
          <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
  , 
  document.getElementById('root')
);
registerServiceWorker();
