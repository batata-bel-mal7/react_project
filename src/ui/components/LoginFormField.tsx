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
  error,
}: Partial<{
  value: string
  onChangeText: (text: string) => void
  icon: JSX.Element
  label: string
  secureTextEntry: boolean
  isShowable: boolean
  placeHolder: string
  style: ViewStyle
  error: string
}>) => {
  return (
    //Todo: add onPress={() => setIsShowable(!isShowable)}
    <View style={style}>
      <View
        style={[
          {
            borderBottomColor: '#C9C9C9',
            borderBottomWidth: 1,
          },
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
      {error && (
        <Text
          style={{
            color: '#FF0000',
            fontFamily: 'Raleway-SemiBold',
            fontSize: 12,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  )
}

export default LoginFormField
