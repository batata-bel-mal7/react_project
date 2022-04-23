import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LargeBottomButton from '../components/LargeBottomButton'
import ErrorButton from '../components/ErrorButton'

export default function Test() {
  return (
    <View>
      <View style={styles.container}>
        <LargeBottomButton text="Button" color="#5956E9" />
      </View>
      <View style={styles.container}>
        <ErrorButton text="Button" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
  },
})
