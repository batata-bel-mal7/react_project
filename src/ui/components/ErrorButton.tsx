import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Ripple from './Ripple'

type buttonProps = {
  text: string
  width: number
  height: number
}
export default function ErrorButton({ text, width, height }: buttonProps) {
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
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: 15,
    },
  })
  return (
    <Ripple style={styles.mediumButton}>
      <Text style={styles.textStyle}>{text}</Text>
    </Ripple>
  )
}
