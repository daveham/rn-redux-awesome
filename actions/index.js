import { createActions } from 'redux-actions';

export const actions = createActions(
  'INCREMENT_COUNTER',
  'DECREMENT_COUNTER',
  'REQUEST_INCREMENT_COUNTER',
  'REQUEST_DECREMENT_COUNTER',
  { prefix: 'awesome' },
);
