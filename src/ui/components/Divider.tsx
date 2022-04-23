/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, ViewProps } from 'react-native'

const Divider = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={{
        width: '100%',
        alignItems: 'flex-end',
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          width: '70%',
          borderBottomColor: '#F4F4F8',
          borderBottomWidth: 0.4,
        }}
      />
    </View>
  )
}

export default Divider
