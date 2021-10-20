import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStacks from './navigation/navigation-stacks/root-stacks';

const App = () => {
  return (
    <NavigationContainer>
      <RootStacks />
    </NavigationContainer>
  );
};

export default App;
