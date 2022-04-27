import React from 'react'
import { Text } from 'react-native'

const HeaderTitle = ({ title }: { title: String }) => {
  return (
    <Text
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        textTransform: 'capitalize',
      }}
    >
      {title}
    </Text>
  )
}

export default HeaderTitle
