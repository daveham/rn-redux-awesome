import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';

import { actions } from '../actions';
const {
  incrementCounter,
  decrementCounter,
  requestIncrementCounter,
  requestDecrementCounter,
} = actions;

const delayP = ms => new Promise(resolve => setTimeout(resolve, ms));

function* delayedIncrementSaga() {
  yield delay(1000); // use delay effect
  yield put(incrementCounter());
}

function* delayedDecrementSaga() {
  yield call(delayP, 2000); // use delay promise
  yield put(decrementCounter());
}

function* counterSagas() {
  yield all([
    takeLatest(requestIncrementCounter, delayedIncrementSaga),
    takeLatest(requestDecrementCounter, delayedDecrementSaga),
  ]);
}

function* observeSaga() {
  while (true) {
    console.log('observeSaga', yield take('*'));
  }
}

export default function* rootSaga() {
  yield all([counterSagas(), observeSaga()]);
}
