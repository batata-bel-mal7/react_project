import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type buttonProps = {
  text: string
  color: string
}
export default function LargeBottomButton({ text, color }: buttonProps) {
  const styles = StyleSheet.create({
    LargeButton: {
      width: 255,
      height: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: color,
    },
    textStyle: {
      color: '#F6F6F9',
      alignSelf: 'center',
      fontSize: 18,
      fontFamily: 'Raleway',
      fontWeight: '700',
    },
  })

  return (
    <View>
      <TouchableOpacity style={styles.LargeButton}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
