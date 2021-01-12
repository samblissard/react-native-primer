import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

export default function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter % 5 === 0) {
      Alert.alert('Counter is divisible by 5')
    }
  }, [counter])

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Button title="Increment!" onPress={() => setCounter(counter + 1)} />
      <Button title="Decerement!" onPress={() => setCounter(counter - 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
