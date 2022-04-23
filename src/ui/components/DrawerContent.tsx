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
      <View style={styles.drawerCoverHack}>
        <View style={{ position: 'absolute', top: -70, left: 0 }}>
          <Svg width={121} height={121} fill="none">
            <Circle cx={60.5} cy={60.5} r={60.5} fill="#817EFF" />
          </Svg>
        </View>
        <View style={{ position: 'absolute', top: 70, right: 35 }}>
          <Svg width={23} height={23} fill="none">
            <Circle
              cx={11.5}
              cy={11.5}
              r={9}
              stroke="#817EFF"
              strokeWidth={5}
            />
          </Svg>
        </View>
        <View
          style={{
            position: 'absolute',
            top: '10%',
            right: -60,
            height: '30%',
          }}
        >
          <Svg width={273} height={533} fill="none">
            <Rect opacity={0.1} width={273} height={533} rx={20} fill="#fff" />
          </Svg>
        </View>
        <View
          style={{
            position: 'absolute',
            top: '40%',
            left: '-80%',
          }}
        >
          <Svg width={79} height={79} fill="none">
            <Circle
              cx={39.5}
              cy={39.5}
              r={39.5}
              fill="#817EFF"
              fillOpacity={0.6}
            />
          </Svg>
        </View>
        <View
          style={{
            position: 'absolute',
            top: '40%',
            left: '-10%',
          }}
        >
          <Svg width={23} height={23} fill="none">
            <Circle
              cx={11.5}
              cy={11.5}
              r={9}
              stroke="#817EFF"
              strokeWidth={5}
            />
          </Svg>
        </View>
      </View>
    </View>
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
  drawerCoverHack: {
    position: 'absolute',
    left: '125%',
    top: 0,
    height: '200%',
    width: '140%',
    backgroundColor: '#5956E9',
  },
})
export default DrawerContent
