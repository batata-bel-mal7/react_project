/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Image,
} from 'react-native'
import useLogin from '../../hooks/useLogin'
import EmailIcon from '../components/icons/EmailIcon'
import LockIcon from '../components/icons/LockIcon'
import LargeBottomButton from '../components/LargeBottomButton'
import LoginFormField from '../components/LoginFormField'
const Login = () => {
  const { loginWithEmailAndPassword } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //Todo: form validation using react form hook
  useEffect(() => {
    //TODO: animate height of form
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log('keyboardDidShow')
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('keyboardDidHide')
      }
    )
    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])
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
        <Text style={styles.header}>Welcome back</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>Login</Text>
        <LoginFormField
          icon={<EmailIcon />}
          label={'Email'}
          placeHolder="ex: hello@world.com"
          style={{
            marginVertical: 10,
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <LoginFormField
          icon={<LockIcon />}
          label={'Password'}
          isShowable
          secureTextEntry
          placeHolder="* * * * * *"
          style={{
            marginVertical: 10,
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text style={{ color: '#5956E9' }}>Forgot passcode?</Text>
        </TouchableOpacity>

        <View style={{ marginVertical: 5 }}>
          <LargeBottomButton
            text={'Login'}
            color={'#5956E9'}
            width={'100%'}
            height={70}
            textColor={'#FFFFFF'}
            onPress={() => loginWithEmailAndPassword(email, password)}
          />
        </View>
        <TouchableOpacity style={{ paddingVertical: 10 }}>
          <Text style={{ color: '#5956E9', alignSelf: 'center' }}>
            Create Account
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
    paddingTop: '5%',
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
    marginVertical: 15,
  },
})
export default Login
