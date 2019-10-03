import { createActions } from 'redux-actions';

export const {
  incrementCounter,
  decrementCounter,
  requestIncrementCounter,
  requestDecrementCounter,
  requestGithubData,
} = createActions(
  'INCREMENT_COUNTER',
  'DECREMENT_COUNTER',
  'REQUEST_INCREMENT_COUNTER',
  'REQUEST_DECREMENT_COUNTER',
  'REQUEST_GITHUB_DATA',
  { prefix: 'awesome' },
);
