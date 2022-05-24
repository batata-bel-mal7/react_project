import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../ui/pages/Home'
import SingleItem from '../ui/pages/SingleItem'

const Stack = createStackNavigator()

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#E5E5E5',
        },
      }}
    >
      <Stack.Screen name="AllProducts" component={Home} />
      <Stack.Screen name="Product" component={SingleItem} />
    </Stack.Navigator>
  )
}

export default ProductStack
