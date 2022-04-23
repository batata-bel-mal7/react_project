import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Svg, { Circle, Rect } from 'react-native-svg'
import Divider from './Divider'
import BagIcon from './icons/BagIcon'
import BuyIcon from './icons/BuyIcon'
import HeartIcon from './icons/HeartIcon'
import LogoutIcon from './icons/LogoutIcon'
import ProfileIcon from './icons/ProfileIcon'
import SettingsIcon from './icons/SettingsIcon'
import Ripple from './Ripple'

const DrawerItemsData = [
  {
    lable: 'Profile',
    icon: <ProfileIcon />,
  },
  {
    divider: true,
  },
  {
    lable: 'My orders',
    icon: <BuyIcon />,
  },
  {
    divider: true,
  },
  {
    lable: 'Favorite',
    icon: <HeartIcon />,
  },
  {
    divider: true,
  },
  {
    lable: 'Delivery',
    icon: <BagIcon />,
  },
  {
    divider: true,
  },
  {
    lable: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    gap: true,
  },
  {
    lable: 'Sign out',
    icon: <LogoutIcon />,
  },
]

const DrawerContent = () => {
  return (
    <View style={styles.drawer}>
      {DrawerItemsData.map((drawerItem, index) => {
        if (drawerItem.divider) {
          return <Divider key={`${drawerItem.lable}-${index}`} />
        }
        if (drawerItem.gap) {
          return (
            <View key={`${drawerItem.lable}-${index}`} style={styles.flex1} />
          )
        }
        return (
          <Ripple
            key={`${drawerItem.lable}-${index}`}
            style={styles.DrawerItem}
            onTap={() => console.log(`${drawerItem.lable}-${index}`)}
          >
            <View>{drawerItem.icon}</View>
            <View>
              <Text style={styles.drawerItemText}>{drawerItem.lable}</Text>
            </View>
          </Ripple>
        )
      })}
    <DrawerContentScrollView scrollEnabled={false}>
      <DrawerItem
        label={'Home'}
        onPress={function (): void {
          console.log('Home')
          }}
            />
      <DrawerItem
        label={'Home'}
        onPress={function (): void {
          console.log('Home')
          }}
            />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  drawer: {
    paddingTop: 80,
    paddingBottom: 50,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
  DrawerItem: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 48,
    width: '100%',
    flex: 1,
  },
  drawerItemText: {
    fontFamily: 'Raleway',
    lineHeight: 20,
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    paddingLeft: 20,
  },
})
export default DrawerContent
