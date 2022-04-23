import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../ui/pages/Home'
import Test from '../ui/pages/Test'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  )
}

export default MainStack
