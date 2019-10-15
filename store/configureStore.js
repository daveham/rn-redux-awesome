import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import sagas from '../sagas';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'AwesomeApp',
        shouldCatchErrors: true,
        trace: true,
      })
    : compose;

const sagaMonitor = {
  rootSagaStarted: desc => {
    // console.log('Root saga started', {
    //   effectId: desc.effectId,
    //   name: desc.saga.name || 'anonymous',
    //   args: desc.args,
    // });
  },
  effectTriggered: desc => {
    // console.log('Effect triggered', desc);
  },
  effectResolved: (effectId, result) => {
    // console.log('Effect resolved', { effectId, result });
  },
  effectRejected: (effectId, error) => {
    // console.log('Effect rejected', { effectId, error });
  },
  effectCancelled: effectId => {
    // console.log('Effect canceled', { effectId });
  },
  actionDispatched: () => {},
};

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(sagas);

export default () => store;
