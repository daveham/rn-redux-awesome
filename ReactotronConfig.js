import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
// import sagaPlugin from 'reactotron-redux-saga';

let reactotron;

if (__DEV__) {
  reactotron = Reactotron.useReactNative()
    .configure({ name: 'AwesomeProject' })
    .setAsyncStorageHandler(AsyncStorage)
  // .use(reduxPlugin())
  // .use(sagaPlugin());
  // .connect();

  console.tron = Reactotron;
}

export default reactotron;
