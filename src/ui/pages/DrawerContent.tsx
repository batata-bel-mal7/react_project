import React from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Circle, Rect } from 'react-native-svg'
import useLogin from '../../hooks/useLogin'
import Divider from '../components/Divider'
import DrawerItem from '../components/DrawerItem'
import BagIcon from '../components/icons/BagIcon'
import BuyIcon from '../components/icons/BuyIcon'
import HeartIcon from '../components/icons/HeartIcon'
import LogoutIcon from '../components/icons/LogoutIcon'
import ProfileIcon from '../components/icons/ProfileIcon'
import SettingsIcon from '../components/icons/SettingsIcon'

const DrawerContent = () => {
  const { logout } = useLogin()
  return (
    <View style={styles.drawer}>
      <DrawerItem onPress={() => {}} text="Profile" icon={<ProfileIcon />} />
      <Divider />
      <DrawerItem onPress={() => {}} text="My orders" icon={<BuyIcon />} />
      <Divider />
      <DrawerItem onPress={() => {}} text="Favorite" icon={<HeartIcon />} />
      <Divider />
      <DrawerItem onPress={() => {}} text="Delivery" icon={<BagIcon />} />
      <Divider />
      <DrawerItem onPress={() => {}} text="Settings" icon={<SettingsIcon />} />
      <View style={styles.flex1} />
      <DrawerItem
        onPress={() => {
          logout()
        }}
        text="Sign out"
        icon={<LogoutIcon />}
      />
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
    left: '120%',
    top: 0,
    height: '200%',
    width: '140%',
    backgroundColor: '#5956E9',
  },
})
export default DrawerContent
