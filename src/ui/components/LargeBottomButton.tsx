import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useState } from 'react'

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
  const [rippleOverflow, setRippleOverflow] = useState(false)

  return (
    <View style={styles.LargeButton}>
      <TouchableNativeFeedback
        onPress={() => {
          setRippleOverflow(!rippleOverflow)
        }}
        background={TouchableNativeFeedback.Ripple('#e3e3e3', rippleOverflow)}
      >
        <View>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}
