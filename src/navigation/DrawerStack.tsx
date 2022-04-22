import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainStack from './MainStack'
import DrawerContent from '../ui/components/DrawerContent'

const Drawer = createDrawerNavigator()

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={() => {
        return <DrawerContent />
      }}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          flex: 1,
          width: '50%',
          backgroundColor: 'transparent',
        },
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      backBehavior="none"
    >
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  )
}
