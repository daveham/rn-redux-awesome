import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import configureStore from './store/configureStore';
import AppView from './components/AppView';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#03a9f4',
    accent: '#e64a19',
    success: '#4caf50',
  },
};

const App = () => {
  return (
    <ReduxProvider store={configureStore()}>
      <PaperProvider theme={theme}>
        <AppView />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
