import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import LargeBottomButton from '../components/LargeBottomButton'

export default function AdminHome() {
    const window = useWindowDimensions()
  return (
    <View>
      <Text
        style={{
          color: 'red',
          alignSelf: 'center',
          margin: 20,
          fontSize: 25,
          fontWeight: '800',
        }}
      >
        Admin
      </Text>
      <View style={styles.buttonContainer}>
        <LargeBottomButton color='#5956E9' height={window.height*.1} width={window.width*.75} text='hi' textColor='white' onPress={()=>{}}/>
      </View>
      <View style={styles.buttonContainer}>
        <LargeBottomButton color='#5956E9' height={window.height*.1} width={window.width*.75} text='hi' textColor='white' onPress={()=>{}}/>
      </View>
      <View style={styles.buttonContainer}>
        <LargeBottomButton color='#5956E9' height={window.height*.1} width={window.width*.75} text='hi' textColor='white' onPress={()=>{}}/>
      </View>
      <View style={styles.buttonContainer}>
        <LargeBottomButton color='#5956E9' height={window.height*.1} width={window.width*.75} text='hi' textColor='white' onPress={()=>{}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        margin:5
    }
})
