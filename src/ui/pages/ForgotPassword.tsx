import * as React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import EmailIcon from '../components/icons/EmailIcon'
import LargeBottomButton from '../components/LargeBottomButton'
import LoginFormField from '../components/LoginFormField'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'
const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            flex: 1,
            maxHeight: '25%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Image
          source={require('../images/Welcom.png')}
          resizeMode={'cover'}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ position: 'absolute', top: 0, width: '100%' }}
        />
        <View style={{ position: 'absolute', top: 0, width: '100%' }}>
          <Header
            leftComponent={<BackIcon />}
            middleComponent={<HeaderTitle title="Forgot password" />}
          />
        </View>
        <Text style={styles.header}>Enter your registered email</Text>
      </View>
      <View style={styles.box}>
        <Image
          source={require('../images/ForgotPassword.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ alignSelf: 'center', height: '35%', width: '70%' }}
        />
        <LoginFormField
          icon={<EmailIcon />}
          label={'Email'}
          placeHolder="ex: hello@world.com"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginVertical: 0,
          }}
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            padding: 30,
            alignItems: 'center',
          }}
        >
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#000000',
            }}
          >
            Remember password?
          </Text>
          <TouchableOpacity>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontFamily: 'Raleway-SemiBold',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#5956E9',
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <LargeBottomButton
          text={'Create account'}
          color={'#5956E9'}
          width={'100%'}
          height={50}
          textColor={'#FFFFFF'}
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
  header: {
    paddingTop: '15%',
    fontSize: 24,
    fontFamily: 'Raleway-ExtraBold',
    color: '#FFFFFF',
  },
  design: {
    flex: 1,
    height: '30%',
  },
  box: {
    flex: 1,
    paddingTop: '0%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 50,
    backgroundColor: '#ffffff',
  },
  boxTitle: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
  },
  text: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: '4%',
    borderWidth: 1,
  },
})
export default ForgotPassword
