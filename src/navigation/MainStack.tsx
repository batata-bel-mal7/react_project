import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../ui/pages/Home'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default MainStack
