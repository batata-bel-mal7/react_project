import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

type search = {
  text: string
}
const searchImage: string = '../images/Search.png'
export default function SearchBar({ text }: search) {
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

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 60,
    borderColor: '#5956E9',
    borderWidth: 2,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  inputStyle: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 16,
  },
})
