import { StyleSheet, Text, ViewStyle } from 'react-native'
import React from 'react'
import Ripple from './Ripple'

type buttonProps = {
  text: string
  width: ViewStyle['width']
  height: ViewStyle['height']
  onPress: () => void
}
export default function ErrorButton({
  text,
  width,
  height,
  onPress,
}: buttonProps) {
  const styles = StyleSheet.create({
    mediumButton: {
      width: width,
      height: height,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#58C0EA',
    },
    textStyle: {
      color: '#F6F6F9',
      alignSelf: 'center',
      fontFamily: 'Raleway-Bold',
      fontSize: 15,
    },
  })
  return (
    <Ripple style={styles.mediumButton} onTap={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </Ripple>
  )
}
