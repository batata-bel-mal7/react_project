import { Image, Keyboard, StyleSheet, View, ViewStyle } from 'react-native'
import React, { createRef } from 'react'
import { TapGestureHandler, TextInput } from 'react-native-gesture-handler'

type search = {
  text: string
  onChangeText: (text: string) => void
  width: ViewStyle['width']
  height: ViewStyle['height']
}
const searchImage: string = '../images/Search.png'
export default function SearchBar({ text, onChangeText }: search) {
  const textRef = createRef<TextInput>()
  const styles = StyleSheet.create({
    container: {
      minHeight: 60,
      borderColor: '#5956E9',
      borderWidth: 2,
      borderRadius: 30,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    inputStyle: {
      flex: 1,
      fontFamily: 'Raleway',
      fontWeight: '600',
      fontSize: 16,
    },
  })

  return (
    <View style={styles.container}>
      <TapGestureHandler
        onEnded={() => {
          Keyboard.dismiss()
          textRef.current?.focus()
        }}
      >
        <Image
          source={require(searchImage)}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            alignSelf: 'center',
            marginLeft: 19,
            marginRight: 11,
            width: 24,
            height: 24,
          }}
        />
      </TapGestureHandler>
      <TextInput
        ref={textRef}
        value={text}
        onChangeText={onChangeText}
        placeholder="input text"
        style={styles.inputStyle}
      />
    </View>
  )
}
