import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'

const DrawerContent = () => {
  return (
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

export default DrawerContent
