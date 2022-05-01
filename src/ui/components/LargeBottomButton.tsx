import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import Ripple from './Ripple'

type buttonProps = {
  text: string
  color: string
  width: ViewStyle['width']
  height: ViewStyle['height']
  textColor: string
  onPress: () => void
}
export default function LargeBottomButton({
  text,
  color,
  width,
  height,
  textColor,
  onPress,
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
      color: textColor,
      alignSelf: 'center',
      fontSize: 18,
      fontFamily: 'Raleway',
      fontWeight: '700',
    },
  })

  return (
    <Ripple style={styles.LargeButton} onTap={onPress}>
      <View>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </Ripple>
  )
}
