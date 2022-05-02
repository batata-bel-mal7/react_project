import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ErrorButton from '../components/ErrorButton'
import Header from '../components/Header'
import HeaderTitle from '../components/HeaderTitle'
import HeaderBackButton from '../components/HeaderBackButton'

const ScreenHighet = Dimensions.get('window').height
export default function FavouritePage({ navigation }: any) {
  const itemList = []
  if (itemList.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          leftComponent={<HeaderBackButton navigation={navigation} />}
          middleComponent={<HeaderTitle title="Favorites" />}
        />
        <View style={styles.container}>
          <Image source={require('../images/Saly-10.png')} />
          <Image source={require('../images/Sally-4.png')} />
        </View>
        <Text style={styles.largeTextStyle}>No favorites yet</Text>

        <Text style={styles.smallText}>
          Hit the orange button down below to Create an order
        </Text>
        <View
          style={{
            marginTop: '10%',
          }}
        >
          <ErrorButton
            onPress={() => {}}
            height={ScreenHighet * 0.06}
            text={'Start ordering'}
            width={'53%'}
          />
        </View>
      </View>
    )
  } else {
    throw new Error('SplashScreen not implemented yet')
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
  },
  largeTextStyle: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 28,
    alignSelf: 'center',
    lineHeight: 32.87,
    color: '#000000',
    marginBottom: 17,
  },
  smallText: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 17,
    alignSelf: 'center',
    width: '57.5%',
    color: '#000000',
    opacity: 0.57,
    lineHeight: 23.8,
    textAlign: 'center',
  },
  buttonContainer: {},
})
