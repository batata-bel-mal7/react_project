import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'
import ProfileButton from '../components/ProfileButton'
import { useState } from 'react'
import { TapGestureHandler } from 'react-native-gesture-handler'
const Setting = () => {
  const [themeShown, setThemeShown] = useState(false)
  const [selected, setSelected] = useState(0)
  type props = {
    index: any
    creditCards: number[]
  }
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<BackIcon />}
        middleComponent={<HeaderTitle title="Setting" />}
      />
      <ProfileButton
        text={'Thems'}
        onPress={function (): void {
            console.log("hello")
          setThemeShown(!themeShown)
        }}
      />
      {themeShown && (
          <View
            style={{
              height: 100,
              backgroundColor: 'red',
              borderRadius: 20,
              padding: 10,
            }}
          />
        ) &&
        ['dark', 'light'].map((i, _) => {
          return (
            <TapGestureHandler
              key={_}
              onGestureEvent={() => {
                setSelected(_)
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Checkbox index={_} selected={selected} />
                <Text>{i}</Text>
              </View>
            </TapGestureHandler>
          )
        })}
      <ProfileButton
        text={'Language'}
        onPress={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E5E5E5',
  },
})

export default Setting
