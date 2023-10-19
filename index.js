/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const AppRoot = () => {
  return (
    // <Provider store={store}>
    //   <App />
    // </Provider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => AppRoot);
