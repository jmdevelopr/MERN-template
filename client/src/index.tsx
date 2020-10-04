import React from 'react';
import { render } from 'react-dom';
import './styles/index.scss';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/rootReducer';
import thunk from 'redux-thunk';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
