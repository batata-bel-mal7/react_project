import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { refetchNetworkInfo } from '../../redux/networkInfo/networkInfoSlice'
import ErrorButton from '../components/ErrorButton'

const NoIternet = () => {
  const AppDispatch = useAppDispatch()
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/NoWifi.png')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignSelf: 'center',
        }}
      />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontFamily: 'Raleway-SemiBold',
          fontSize: 28,
        }}
      >
        No internet Connection
      </Text>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontFamily: 'Raleway-Regular',
          fontSize: 17,
          textAlign: 'center',
          marginVertical: 20,
        }}
      >
        Your internet connection is currently not available please check or try
        again.
      </Text>
      <ErrorButton
        onPress={() => {
          AppDispatch(refetchNetworkInfo())
        }}
        text={'Try again'}
        width={'70%'}
        height={50}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    paddingBottom: '30%',
  },
})

export default NoIternet
