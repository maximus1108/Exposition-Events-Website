import {combineReducers} from 'redux';
import {showWelcome} from './views/welcome/reducer.js';
import {current} from './components/nav/reducer.js';

const Store = combineReducers({
  showWelcome,
  current
});

export default Store;
