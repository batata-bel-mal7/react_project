import * as React from 'react'
import {
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import Header from '../components/Header'
import BackIcon from '../components/icons/BackIcon'
import HeaderTitle from '../components/HeaderTitle'
// import LargeBottomButton from '../components/LargeBottomButton'
const Basket = () => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<BackIcon />}
        middleComponent={<HeaderTitle title="Basket" />}
        rightComponent={
          <TouchableOpacity>
            <Image source={require('../images/Delete.png')} />
          </TouchableOpacity>
        }
      />

      <View style={{ height: '60%' }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            alignSelf: 'center',
            width: '75%',
            height: '35%',
            borderRadius: 10,
            padding: '2%',
          }}
        >
          <Image source={require('../images/Tab.png')} />
          <View style={{ paddingVertical: '7%', paddingHorizontal: '5%' }}>
            <Text>Name</Text>
            <Text>0000$</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>Quantity</Text>
              <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <Text
                  style={{
                    backgroundColor: '#7DCCEC',
                    paddingHorizontal: '4%',
                    borderRadius: 5,
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text>1</Text>
              <TouchableOpacity style={{ paddingHorizontal: 5 }}>
                <Text
                  style={{
                    backgroundColor: '#7DCCEC',
                    paddingHorizontal: '4%',
                    borderRadius: 5,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', paddingVertical: '5%' }}>
        <Text style={{ position: 'absolute', left: '10%' }}>Total</Text>
        <Text style={{ position: 'absolute', right: '10%' }}>0000$</Text>
      </View>

      <View style={{ minHeight: '20%' }}>
        <TouchableOpacity
          style={{
            width: '80%',
            height: '30%',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: '#5956E9',
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: '#ffffff',
              paddingVertical: 10,
              fontFamily: 'Raleway-SemiBold',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  item: {},
})

export default Basket
