import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Routes from './routes';
import history from './services/history';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  </Provider>
);

export default App;
