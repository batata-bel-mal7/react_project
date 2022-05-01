import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LargeBottomButton from './LargeBottomButton'

type props = {
  price: number
  text: string
}
const ScreenHighet = Dimensions.get('window').height
export default function Footer({ price, text }: props) {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <LargeBottomButton
        color="#5956E9"
        height={ScreenHighet * 0.1}
        width={'80%'}
        text={text}
        textColor={'white'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    minHeight: ScreenHighet * 0.2,
    marginTop: 'auto',
  },
  container: {
    margin: '10%',
    marginTop: 0,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 20,
    color: 'black',
    flex: 1,
  },
  price: {
    fontFamily: 'Raleway',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 25.83,
    color: '#5956E9',
  },
})
