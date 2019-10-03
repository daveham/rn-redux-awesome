import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { incrementCounter, decrementCounter } from '../actions';

const counter = handleActions(
  {
    [incrementCounter]: (state, action) => state + 1,
    [decrementCounter]: (state, action) => state - 1,
  },
  0,
);

export default combineReducers({ counter });
