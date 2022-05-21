import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import useLogin from '../../hooks/useLogin'
import { MainStackParamList } from '../../navigation/MainStack'
import EmailIcon from '../components/icons/EmailIcon'
import LockIcon from '../components/icons/LockIcon'
import LargeBottomButton from '../components/LargeBottomButton'
import LoginFormField from '../components/LoginFormField'

type FormValues = {
  email: string
  password: string
}
const Login = ({
  navigation,
}: StackScreenProps<MainStackParamList, 'Login'>) => {
  const {
    loginWithEmailAndPassword,
    loading,
    error: loginError,
    ignoreError,
  } = useLogin()
  const { handleSubmit, control } = useForm<FormValues>()
  useEffect(() => {
    ignoreError()
    //TODO: animate height of form
    // const keyboardDidShowListener = Keyboard.addListener(
    //   'keyboardDidShow',
    //   () => {
    //     console.log('keyboardDidShow')
    //   }
    // )
    // const keyboardDidHideListener = Keyboard.addListener(
    //   'keyboardDidHide',
    //   () => {
    //     console.log('keyboardDidHide')
    //   }
    // )
    // return () => {
    //   keyboardDidShowListener.remove()
    //   keyboardDidHideListener.remove()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [show, setshow] = React.useState(true)

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
        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <LoginFormField
                icon={<EmailIcon />}
                label={'Email'}
                placeHolder="ex: hello@world.com"
                style={{
                  marginVertical: 10,
                }}
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )
          }}
          rules={{
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'invalid Email',
            },
          }}
          name={'email'}
        />

        <Controller
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <LoginFormField
                icon={<LockIcon />}
                label={'Password'}
                placeHolder="* * * * * * *"
                style={{
                  marginVertical: 10,
                }}
                isShowable
                secureTextEntry={show}
                value={value}
                onChangeText={onChange}
                error={error?.message}
                show={() => setshow(!show)}
              />
            )
          }}
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          name={'password'}
        />
        {loginError ? <Text style={styles.error}>{loginError}</Text> : null}

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
            onPress={handleSubmit(({ email, password }) =>
              loginWithEmailAndPassword(email, password)
            )}
            loading={loading}
          />
        </View>
        <TouchableOpacity
          style={{ paddingVertical: 10 }}
          onPress={() => {
            navigation.navigate('Regiter')
          }}
        >
          <Text style={{ color: '#5956E9', alignSelf: 'center' }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  error: {
    color: '#FF0000',
    fontSize: 12,
    marginVertical: 5,
  },
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
