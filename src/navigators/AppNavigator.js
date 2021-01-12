import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Counter from '../screens/Counter';
import ScrollableList from '../screens/ScrollableList';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Contacts" component={ScrollableList} />
    </Stack.Navigator>
  );
}
