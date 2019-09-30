import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppView from './components/AppView';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppView />
    </Provider>
  );
};

export default App;
