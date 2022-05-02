import React from 'react'
import { View } from 'react-native'

type HeaderProps = Partial<{
  leftComponent: JSX.Element
  rightComponent: JSX.Element
  middleComponent: JSX.Element
  disableRightComponent: boolean
}>

const Header = (props: HeaderProps) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        minHeight: 80,
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>{props.leftComponent}</View>
      <View style={{ flex: 8, marginHorizontal: 10 }}>
        {props.middleComponent}
      </View>
      {!props.disableRightComponent && (
        <View style={{ flex: 1 }}>{props.rightComponent}</View>
      )}
    </View>
  )
}

export default Header
