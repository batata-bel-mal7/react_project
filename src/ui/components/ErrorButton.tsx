import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

type buttonProps = {
  text: string
}
export default function ErrorButton({ text }: buttonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.mediumButton}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mediumButton: {
    width: 214,
    height: 50,
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
