import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App } from './containers/App';
import { configureStore } from './store';
import registerServiceWorker from './registerServiceWorker';

import './variables.css';
import './reset.css';
import './main.css';

const history  = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
