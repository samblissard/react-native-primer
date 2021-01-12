import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button
        title="Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
