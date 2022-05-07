import { Image, StyleSheet, Text, View } from 'react-native'
import React, { JSXElementConstructor } from 'react'

type props = {
  number: number
}
export default function CreditCards({ number }: props): JSX.Element {
  if (number.toString().startsWith('5')) {
    return (
      <View style={styles.container}>
        <Image source={require('../images/master.png')} style={styles.image} />
        <Text style={styles.text}>{number}</Text>
      </View>
    )
  } else if (number.toString().startsWith('4')) {
    return (
      <View style={styles.container}>
        <Image source={require('../images/visa.png')} style={styles.image} />
        <Text style={styles.text}>{number}</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Image source={require('../images/bank.png')} style={styles.image} />
        <Text style={styles.text}>{number}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 17,
    lineHeight: 20,
  },
  image: {
    margin: '5%',
  },
})
