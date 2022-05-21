import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

type props = {
  imageSrc: any
  width: ViewStyle['width']
  height: ViewStyle['height']
  text: string
}
export default function ItemCard({ imageSrc, height, width, text }: props) {
  const styles = StyleSheet.create({
    container: {
      height: height,
      width: width,
      marginTop: 20,
      elevation: 5,
    },
    image: {
      alignSelf: 'center',
      zIndex: 1,
      position: 'absolute',
    },
    infoBox: {
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 10,
      width: '90%',
      height: '90%',
      marginTop: '20%',
      paddingTop: '60%',
      justifyContent: 'flex-end',
      paddingBottom: '20%',
    },
    text: {
      fontFamily: 'Raleway',
      fontSize: 22,
      lineHeight: 25.83,
      color: '#000000',
      fontWeight: '600',
      textAlign: 'center',
      width: '60%',
      alignSelf: 'center',
    },
    price: {
      fontFamily: 'Raleway',
      fontSize: 17,
      lineHeight: 19.96,
      color: '#5956E9',
      fontWeight: '700',
      textAlign: 'center',
      width: '80%',
      alignSelf: 'center',
    },
  })

  return (
    <View style={styles.container}>
      <Image
        source={imageSrc}
        resizeMode={'stretch'}
        style={[
          styles.image,
          {
            height: 150,
            width: 150,
            borderRadius: 100,
            // margin: 10,
            alignSelf: 'center',
            backgroundColor: 'red',
          },
        ]}
      />
      <View style={styles.infoBox}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.price}>From £579</Text>
      </View>
    </View>
  )
}
