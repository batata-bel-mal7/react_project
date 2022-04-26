import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Ripple from './Ripple'
type buttonType = {
  text: string
  width: number
  height: number
  color: string
  icon: React.FC
  onPress: () => void
}
export default function VariantSelectionButton({
  text,
  icon,
  width,
  height,
  color,
  onPress,
}: buttonType) {
  const Icon = icon
  const styles = StyleSheet.create({
    textStyle: {
      alignSelf: 'center',
      marginLeft: 8,
      marginRight: 17,
    },
    smallButton: {
      backgroundColor: 'white',
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
    <Ripple style={styles.smallButton} onTap={onPress}>
      <Icon />
      <Text style={styles.textStyle}>{text}</Text>
    </Ripple>
  )
}
