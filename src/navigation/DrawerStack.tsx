import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../ui/pages/DrawerContent'
import TabStack from './TabStack'

const Drawer = createDrawerNavigator()

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return <DrawerContent {...props} />
      }}
      screenOptions={{
        gestureHandlerProps: {
          enabled: false,
        },
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
      <Drawer.Screen name="HomeStack" component={TabStack} />
    </Drawer.Navigator>
  )
}
