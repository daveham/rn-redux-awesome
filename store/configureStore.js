import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import ReactotronConfig from '../ReactotronConfig';

import rootReducer from '../reducers';
import sagas from '../sagas';

let sagaMiddleware;
if (__DEV__) {
  const sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
} else {
  sagaMiddleware = createSagaMiddleware();
}

const getMiddleware = () => {
  return applyMiddleware(sagaMiddleware);
};

let store;
if (__DEV__) {
  store = createStore(
    rootReducer,
    compose(
      getMiddleware(),
      ReactotronConfig.createEnhancer(),
    ),
  );
} else {
  store = createStore(rootReducer, compose(getMiddleware()));
}
const configureStore = () => store;

sagaMiddleware.run(sagas);

export default configureStore;
