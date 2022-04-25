import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type buttonType = {
  text: string
  width: number
  height: number
  color: string
}
export default function VariantSelectionButton({
  text,
  width,
  height,
  color,
}: buttonType) {
  const styles = StyleSheet.create({
    textStyle: {
      alignSelf: 'center',
      marginLeft: 8,
      marginRight: 17,
    },
    smallButton: {
      width: width,
      height: height,
      borderColor: '#e3e3e3',
      borderWidth: 1,
      justifyContent: 'center',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'row',
    },
    circle: {
      backgroundColor: color,
      width: 16,
      height: 16,
      alignSelf: 'center',
      borderRadius: 100,
      marginLeft: 13,
    },
  })

  return (
    <View>
      <TouchableOpacity style={styles.smallButton}>
        <View style={styles.circle}></View>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
