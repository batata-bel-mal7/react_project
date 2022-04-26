import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import LargeBottomButton from '../components/LargeBottomButton'

const ScreenHighet = Dimensions.get('window').height
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'Raleway-ExtraBold',
          fontSize: 65,
          color: '#fff',
          alignSelf: 'center',
          marginVertical: 30,
        }}
      >
        Find your Gadget
      </Text>

      <Image
        source={require('../images/splash.png')}
        resizeMethod="resize"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignSelf: 'center',
          height: ScreenHighet * 0.5,
          width: ScreenHighet * 0.4,
        }}
      />
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <LargeBottomButton
          text={'Get started'}
          color={'white'}
          width={'100%'}
          height={70}
          textColor={'#5956E9'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
  },
})

export default SplashScreen
