import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ProfileIcon from '../components/icons/ProfileIcon'
import Location from '../components/icons/Location'
import Phone from '../components/icons/Phone'

type props = {
  name: string
  address: string
  number: string
  creditCards: number[]
}

const masterCard: number[] = []
const Visa: number[] = []
const others: number[] = []
export default function Checkout({
  name,
  address,
  number,
  creditCards,
}: props) {
  return (
    <View>
      <Header
        leftComponent={<BackIcon />}
        middleComponent={<HeaderTitle title={'Checkout'} />}
        disableRightComponent
      />
      <ScrollView style={{ margin: '10%' }}>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Shipping information</Text>
          <TouchableOpacity>
            <Text style={styles.text}>Change</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginVertical: '5%',
          }}
        >
          <View style={styles.containers}>
            <ProfileIcon />
            <Text style={styles.box1Text}>{name}</Text>
          </View>
          <View style={styles.containers}>
            <Location />
            <Text style={styles.box1Text}>{address}</Text>
          </View>
          <View style={[styles.containers, { marginBottom: '5%' }]}>
            <Phone />
            <Text style={styles.box1Text}>{number}</Text>
          </View>
        </View>
        <Text style={styles.infoText}>Payment Method</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 20,
    color: 'black',
  },
  text: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 17.61,
    color: '#5956E9',
  },
  containers: {
    flexDirection: 'row',
    margin: '5%',
    marginBottom: '2%',
  },
  box1Text: {
    marginHorizontal: '5%',
    color: 'black',
  },
})
