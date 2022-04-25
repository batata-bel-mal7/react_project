import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ItemCounter() {
  const [counter, setCounter] = useState(1)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          setCounter(counter - 1)
        }}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          setCounter(counter + 1)
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
  Button: {
    backgroundColor: '#7DCCEC',
    width: 20,
    height: 20,
    alignItems: 'center',
    borderRadius: 4,
  },

  counter: {
    marginHorizontal: 7,
  },
})
