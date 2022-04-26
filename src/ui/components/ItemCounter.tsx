import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ItemCounter({
  count,
  onIncrement,
  onDecrement,
}: {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          onDecrement()
        }}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          onIncrement()
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
