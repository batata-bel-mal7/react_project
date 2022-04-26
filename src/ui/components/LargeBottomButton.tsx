import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ripple from './Ripple'

type buttonProps = {
  text: string
  color: string
  width: number
  height: number
}
export default function LargeBottomButton({
  text,
  color,
  width,
  height,
}: buttonProps) {
  const styles = StyleSheet.create({
    LargeButton: {
      width: width,
      height: height,
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
    <Ripple style={styles.LargeButton}>
      <View>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </Ripple>
  )
}
