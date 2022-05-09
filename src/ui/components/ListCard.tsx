import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Ripple from './Ripple'

type props = {
  title: string
  discreption: string
  price: number
  ontap: () => void
  imageSource: any
}
export default function ListCard({
  title,
  discreption,
  price,
  ontap,
  imageSource,
}: props) {
  return (
    <View style={styles.cardContainer}>
      <Ripple style={styles.container} onTap={ontap}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.textContainer}>
          <Text
            style={{
              fontFamily: 'Raleway',
              fontWeight: '600',
              fontSize: 22,
              lineHeight: 22,
              color: '#000000',
              margin: 5,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Raleway',
              fontWeight: '600',
              fontSize: 16,
              lineHeight: 18,
              color: '#868686',
              margin: 5,
            }}
          >
            {discreption}
          </Text>
          <Text
            style={{
              fontFamily: 'Raleway',
              fontWeight: '700',
              fontSize: 17,
              lineHeight: 19,
              color: '#5956E9',
              margin: 5,
            }}
          >
            {price}$
          </Text>
        </View>
      </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    margin: 10,
  },
  cardContainer: {
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: '20%',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 100,
    width: '35%',
    resizeMode: 'contain',
    height: '80%',
    marginLeft: 10,
  },
})
