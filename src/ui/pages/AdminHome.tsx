import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import LargeBottomButton from '../components/LargeBottomButton'
import Header from '../components/Header'
import HeaderTitle from '../components/HeaderTitle'

export default function AdminHome({ navigation }: any) {
  const window = useWindowDimensions()
  return (
    <View>
      <Header
        middleComponent={<HeaderTitle title={'Admin'} />}
      />
        <View style={{ marginVertical: window.height * 0.2 }}>
          <View style={styles.buttonContainer}>
            <LargeBottomButton
              color="#5956E9"
              height={window.height * 0.1}
              width={window.width * 0.75}
              text="Manage Products"
              textColor="white"
              onPress={() => {navigation.navigate('ProductManagement')}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <LargeBottomButton
              color="#5956E9"
              height={window.height * 0.1}
              width={window.width * 0.75}
              text="Manage Orders"
              textColor="white"
              onPress={() => {navigation.navigate('OrderManagement')}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <LargeBottomButton
              color="#5956E9"
              height={window.height * 0.1}
              width={window.width * 0.75}
              text="Manage Users"
              textColor="white"
              onPress={() => {navigation.navigate('UserManagement')}}
            />
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
})
