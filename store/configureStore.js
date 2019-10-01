import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';
import ReactotronConfig from '../ReactotronConfig';

import rootReducer from '../reducers';
import sagas from '../sagas';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const getMiddleware = () => {
  const middlewares = [sagaMiddleware];
  return applyMiddleware(...middlewares);
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
