import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Checkbox({
  index,
  selected,
}: {
  index: any
  selected: number
}) {
  const styles = StyleSheet.create({
    outerCircle: {
      borderColor: '#5956E9',
      borderWidth: 1,
      width: 20,
      height: 20,
      borderRadius: 50,
      justifyContent: 'center',
    },
    innerCircle: {
      width: 10,
      height: 10,
      alignSelf: 'center',
      backgroundColor: '#5956E9',
      borderRadius: 50,
    },
  })
  return (
    <View style={styles.outerCircle}>
      {selected === index && <View style={styles.innerCircle}></View>}
    </View>
  )
}
