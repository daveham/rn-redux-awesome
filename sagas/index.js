import {
  all,
  call,
  delay,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  incrementCounter,
  decrementCounter,
  requestIncrementCounter,
  requestDecrementCounter,
  requestGithubData,
} from '../actions';

const delayP = ms => new Promise(resolve => setTimeout(resolve, ms));

function* delayedIncrementSaga() {
  yield delay(1000); // use delay effect
  yield put(incrementCounter());
}

function* delayedDecrementSaga() {
  yield call(delayP, 2000); // use delay promise
  yield put(decrementCounter());
}

function* apiCallSaga() {
  yield call(() => {
    return axios
      .get('https://api.github.com/users/phantomjs')
      .then(response => {
        console.log('axios', { data: response.data });
      })
      .catch(error => {
        console.log('axios', { error });
      });
  });
}

function* counterSagas() {
  yield all([
    takeLatest(requestIncrementCounter, delayedIncrementSaga),
    takeLatest(requestDecrementCounter, delayedDecrementSaga),
    takeEvery(requestGithubData, apiCallSaga),
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
