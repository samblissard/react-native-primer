import React from 'react';
import Counter from './src/screens/Counter';
import Contacts from './src/screens/Contacts';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';

const App = () => {
  return (
    // <Counter />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
