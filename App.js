import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';


const App = () => {
  return (
    <View style={styles.app}>
      <Text>Hello</Text>
      <Button title="Press me!"/>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
