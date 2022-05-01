import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import Ripple from './Ripple'
import Rive from 'rive-react-native'

type buttonProps = {
  text: string
  color: string
  width: ViewStyle['width']
  height: ViewStyle['height']
  textColor: string
  onPress: () => void
  loading?: boolean
}
export default function LargeBottomButton({
  text,
  color,
  width,
  height,
  textColor,
  onPress,
  loading,
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
      fontFamily: 'Raleway-Bold',
    },
  })
  return loading ? (
    <View style={[styles.LargeButton, { overflow: 'hidden' }]}>
      <View>
        <Rive
          resourceName={'loader'}
          style={{
            height: 100,
          }}
        />
      </View>
    </View>
  ) : (
    <Ripple
      style={[styles.LargeButton, { overflow: 'hidden' }]}
      onTap={() => (loading ? {} : onPress())}
    >
      <View>
        {loading ? (
          <Rive
            resourceName={'loader'}
            style={{
              height: 100,
            }}
          />
        ) : (
          <Text style={styles.textStyle}>{text}</Text>
        )}
      </View>
    </Ripple>
  )
}
