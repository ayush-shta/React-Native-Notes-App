import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootStacks from './navigation/navigation-stacks/root-stacks';

import {persistor, store} from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStacks />
        </NavigationContainer>
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
