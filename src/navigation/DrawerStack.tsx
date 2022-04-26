import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
<<<<<<< HEAD
import DrawerContent from '../ui/pages/DrawerContent'
import TabStack from './TabStack'
=======
import HomeStack from './HomeStack'
import DrawerContent from '../ui/components/DrawerContent'
>>>>>>> 273b270 (rename MainStack to HomeStack)

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
<<<<<<< HEAD
      <Drawer.Screen name="HomeStack" component={TabStack} />
=======
      <Drawer.Screen name="HomeStack" component={HomeStack} />
>>>>>>> 273b270 (rename MainStack to HomeStack)
    </Drawer.Navigator>
  )
}
