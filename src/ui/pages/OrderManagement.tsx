import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import HeaderBackButton from '../components/HeaderBackButton'
import HeaderTitle from '../components/HeaderTitle'

export default function OrderManagement({navigation}:any) {
  return (
    <View>
        <Header leftComponent={<HeaderBackButton navigation={navigation}/>} middleComponent={<HeaderTitle title={'Order Management'}/>}/>
      <Text>OrderManagement</Text>
    </View>
  )
}

const styles = StyleSheet.create({})