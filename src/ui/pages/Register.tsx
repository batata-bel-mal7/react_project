import * as React from 'react'
import {
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'
import LargeBottomButton from '../components/LargeBottomButton'
import LoginFormField from '../components/LoginFormField'
import EmailIcon from '../components/icons/EmailIcon'
import LockIcon from '../components/icons/LockIcon'
const Register = () => {
  return (
    <View style={styles.container}>

      <View
        style={[
          {
            flex: 1,
            maxHeight: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Image
          source={require('../images/Welcom.png')}
          resizeMode={'cover'}
          style={{ position: 'absolute', top: 0, width: '100%' }}
        />
        <Text style={styles.header}>Welcome!</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Create account</Text>
        <LoginFormField
          icon={<EmailIcon />}
          label={'Email'}
          placeHolder="ex: hello@world.com"
          style={{
            marginVertical: 0,
          }}
        />

      <LoginFormField
        icon={<LockIcon />}
        label={'Password'}
        placeHolder="************"
        style={{
          marginVertical: 5,
        }}
      />
      <LoginFormField
        icon={<LockIcon />}
        label={'Confirm Password'}
        placeHolder="************"
        style={{
          marginVertical: 5,
        }}
      />
      <LargeBottomButton
            text={'Create account'}
            color={'#5956E9'}
            width={'100%'}
            height={50}
            textColor={'#FFFFFF'}
          />
        <TouchableOpacity style={{ paddingVertical: 5 }}>
          <Text style={{ fontFamily: 'Raleway-SemiBold',
                        fontSize: 18,fontWeight: 'bold',
                        color: '#5956E9', alignSelf: 'center' }}>
            Login
          </Text>
        </TouchableOpacity>
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
    fontSize: 65,
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

export default Register
