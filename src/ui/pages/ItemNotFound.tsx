import {
  Image,
  ImageBackgroundBase,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BackIcon from '../components/icons/BackIcon'
export default function ItemNotFound({ itemList }: { itemList: any[] }) {
  if (itemList.length == 0) {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton}>
            <BackIcon />
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <SearchBar
              onChangeText={() => {}}
              text={''}
              height={'10%'}
              width={'100%'}
            />
          </View>
        </View>
        <Image source={require('../images/Saly-17.png')} style={styles.image} />
        <Text style={styles.largeTextStyle}>Item not found</Text>

        <Text style={styles.smallText}>
          Try a more generic search term or try looking for alternative
          products.
        </Text>
      </View>
    )
  } else {
    throw new Error('page not implemented yet')
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: '10%',
  },
  searchBar: {
    width: '80%',
    margin: 10,
  },
  backButton: {
    marginLeft: 10,
  },
  image: {
    width: '95%',
    marginRight: '5%',
    resizeMode: 'contain',
  },
  largeTextStyle: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 28,
    alignSelf: 'center',
    lineHeight: 32.87,
    color: '#000000',
    marginBottom: 17,
  },
  smallText: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    fontSize: 17,
    alignSelf: 'center',
    width: '78%',
    color: '#000000',
    opacity: 0.57,
    lineHeight: 23.8,
    textAlign: 'center',
  },
})
