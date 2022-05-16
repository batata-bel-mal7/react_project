import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import HeaderBackButton from '../components/HeaderBackButton'
import HeaderTitle from '../components/HeaderTitle'

type props = {
    navigation:any
}
export default function ProductManagement({navigation}:props) {
  return (
    <View>
        <Header leftComponent={<HeaderBackButton navigation={navigation}/>} middleComponent={<HeaderTitle title={'Product Management'}/>}/>

    </View>
  )
}

const styles = StyleSheet.create({})