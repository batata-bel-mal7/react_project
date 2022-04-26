import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStack from './HomeStack'
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
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerStyle: {
          flex: 1,
          width: '50%',
          backgroundColor: '#5956E9',
        },
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      backBehavior="none"
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  )
}
