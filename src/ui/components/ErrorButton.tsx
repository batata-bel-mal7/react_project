import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
    <View>
      <TouchableOpacity style={styles.mediumButton}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
