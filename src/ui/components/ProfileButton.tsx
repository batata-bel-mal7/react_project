import React from 'react'
import { Text, View } from 'react-native'
import ChevronRightIcon from './icons/ChevronRightIcon'
import Ripple from './Ripple'

const ProfileButton = ({
  text,
  onPress,
}: {
  text: string
  onPress: () => void
}) => {
  return (
    <Ripple
      onTap={onPress}
      style={{
        flexDirection: 'row',
        flex: 1,
        maxHeight: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 20,
      }}
    >
      <View
        style={{
          paddingHorizontal: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Text
          style={{
            color: '#000000',
            fontFamily: 'Railway-SemiBold',
            fontSize: 18,
          }}
        >
          {text}
        </Text>
        <ChevronRightIcon />
      </View>
    </Ripple>
  )
}

export default ProfileButton
