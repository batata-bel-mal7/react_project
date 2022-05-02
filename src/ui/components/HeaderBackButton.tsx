import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BackIcon from './icons/BackIcon'

const HeaderBackButton = ({ navigation }: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackIcon />
    </TouchableOpacity>
  )
}

export default HeaderBackButton
