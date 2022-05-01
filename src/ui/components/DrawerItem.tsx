import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ripple from './Ripple'

const DrawerItem = ({
  onPress,
  text,
  icon,
}: {
  onPress: () => void
  text: string
  icon: JSX.Element
}) => {
  return (
    <Ripple style={styles.DrawerItem} onTap={onPress}>
      <View>{icon}</View>
      <View>
        <Text style={styles.drawerItemText}>{text}</Text>
      </View>
    </Ripple>
  )
}

const styles = StyleSheet.create({
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

export default DrawerItem
