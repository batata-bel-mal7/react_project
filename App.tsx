import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/redux/store'
import { StyleSheet } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import MainStack from './src/navigation/MainStack'
import { useAppDispatch } from './src/hooks/useAppDispatch'
import {
  initNetInfo,
  selectNetworkInfo,
  setNetworkInfo,
} from './src/redux/networkInfo/networkInfoSlice'
import { selectUser, updateUser } from './src/redux/user/userSlice'
import auth from '@react-native-firebase/auth'

const App = () => {
  const appDispatch = useAppDispatch()
  const netinfo = useSelector(selectNetworkInfo)
  const user = useSelector(selectUser)
  const [initialized, setInitialized] = useState(true)
  const handleAuthStateChanged = () => {
    appDispatch(updateUser())
    if (initialized) {
      setInitialized(false)
    }
  }
  useEffect(() => {
    appDispatch(initNetInfo())
    const netInfoEventListener = NetInfo.addEventListener((state) => {
      appDispatch(setNetworkInfo(state))
    })
    const authStateEventListener = auth().onAuthStateChanged(
      handleAuthStateChanged
    )
    return () => {
      netInfoEventListener()
      authStateEventListener()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!netinfo.initialized || initialized) {
    return null
  }
  return <MainStack netinfo={netinfo} user={user} />
}

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={StyleSheet.absoluteFill}>
          <NavigationContainer>
            <App />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default Main
