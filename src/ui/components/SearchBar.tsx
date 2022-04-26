import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

type search = {
  text: string
  width: number
  height: number
}
const searchImage: string = '../images/Search.png'
export default function SearchBar({ text, width, height }: search) {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      borderColor: '#5956E9',
      borderWidth: 2,
      borderRadius: 30,
      display: 'flex',
      flexDirection: 'row',
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
      <Image
        source={require(searchImage)}
        style={{
          alignSelf: 'center',
          marginLeft: 19,
          marginRight: 11,
          width: 24,
          height: 24,
        }}
      />
      <TextInput placeholder="input text" style={styles.inputStyle} />
    </View>
  )
}
