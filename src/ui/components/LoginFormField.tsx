/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text, ViewStyle } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const LoginFormField = ({
  value,
  onChangeText,
  icon,
  label,
  secureTextEntry,
  isShowable,
  placeHolder,
  style,
}: Partial<{
  value: string
  onChangeText: (text: string) => void
  icon: JSX.Element
  label: string
  secureTextEntry: boolean
  isShowable: boolean
  placeHolder: string
  style: ViewStyle
}>) => {
  return (
    //Todo: add onPress={() => setIsShowable(!isShowable)}
    <View
      style={[
        {
          borderBottomColor: '#C9C9C9',
          borderBottomWidth: 1,
        },
        style,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ marginRight: 10 }}>{icon}</View>
        <Text>{label}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 12,
        }}
      >
        <TextInput
          value={value}
          style={{ padding: 0, margin: 0, flex: 1 }}
          placeholder={placeHolder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {isShowable && (
          <TouchableOpacity onPress={() => console.log('show')}>
            <Text
              style={{
                color: '#5956E9',
                fontFamily: 'Raleway-SemiBold',
                paddingLeft: 10,
              }}
            >
              Show
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default LoginFormField
