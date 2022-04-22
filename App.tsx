import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { StyleSheet } from 'react-native'
import DrawerStack from './src/navigation/DrawerStack'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={StyleSheet.absoluteFill}>
          <NavigationContainer>
            <DrawerStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
