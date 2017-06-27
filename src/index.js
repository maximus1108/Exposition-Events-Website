import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {createStore} from 'redux';
import Store from './store.js';
import {Provider} from 'react-redux';
import './assets/scss/style.scss';

ReactDOM.render(
  <Provider store={ createStore(Store) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
