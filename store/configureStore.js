import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);
const configureStore = () => store;

sagaMiddleware.run(sagas);

export default configureStore;
