import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button
        title="Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}
