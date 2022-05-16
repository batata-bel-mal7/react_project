import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import AdminHome from '../ui/pages/AdminHome'
import ProductManagement from '../ui/pages/ProductManagement'
import OrderManagement from '../ui/pages/OrderManagement'
import UserManagement from '../ui/pages/UserManagement'

const Stack = createStackNavigator()

const AdminStack = () => {

  return (
    <Stack.Navigator
        initialRouteName="AdminHome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="ProductManagement" component={ProductManagement} />
        <Stack.Screen name='OrderManagement' component={OrderManagement} />
        <Stack.Screen name='UserManagement' component={UserManagement} />

      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default AdminStack
