import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DrawerIcon from './icons/DrawerIcon'

const DrawerOpenButton = ({ navigation }: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <DrawerIcon />
    </TouchableOpacity>
  )
}

export default DrawerOpenButton
