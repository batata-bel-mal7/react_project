import React, { useEffect } from 'react'
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

const App = () => {
  const appDispatch = useAppDispatch()
  const netinfo = useSelector(selectNetworkInfo)
  useEffect(() => {
    appDispatch(initNetInfo())
    const removeEventListener = NetInfo.addEventListener((state) => {
      appDispatch(setNetworkInfo(state))
    })
    return () => {
      removeEventListener()
    }
  }, [appDispatch])
  if (!netinfo.initialized) {
    return null
  }
  return <MainStack netinfo={netinfo} />
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
