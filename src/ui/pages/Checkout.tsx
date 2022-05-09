import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ProfileIcon from '../components/icons/ProfileIcon'
import Location from '../components/icons/Location'
import Phone from '../components/icons/Phone'
import CreditCards from '../components/CreditCards'
import Checkbox from '../components/Checkbox'
import Ripple from '../components/Ripple'
import Footer from '../components/Footer'

type props = {
  name: string
  address: string
  number: string
  creditCards: number[]
}

export default function Checkout({
  name,
  address,
  number,
  creditCards,
}: props) {
  const [selected, setSelected] = useState(0)
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
        <View style={styles.box2}>
          {creditCards.map((number, index) => (
            <Ripple
              onTap={() => {
                setSelected(index)
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: '3%',
                marginBottom: '1%',
              }}
            >
              <Checkbox index={index} selected={selected} />
              <CreditCards number={number} />
            </Ripple>
          ))}
        </View>
      </ScrollView>
      <Footer price={123123} text="dsfajf" />
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
  box2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: '5%',
  },
})
