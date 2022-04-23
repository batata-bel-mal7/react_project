import { StyleSheet, View } from 'react-native'
import React from 'react'
import LargeBottomButton from '../components/LargeBottomButton'
import ErrorButton from '../components/ErrorButton'
import SearchBar from '../components/SearchBar'
import VariantSelectionButton from '../components/VariantSelectionButton'
import ItemCounter from '../components/ItemCounter'

export default function Test() {
  return (
    <View>
      <View style={styles.container}>
        <LargeBottomButton
          text="LargeButton"
          color="#5956E9"
          width={270}
          height={70}
        />
      </View>
      <View style={styles.container}>
        <ErrorButton text="Button" width={214} height={50} />
      </View>
      <View style={styles.container}>
        <SearchBar text="hi there" width={270} height={60} />
      </View>
      <View style={styles.container}>
        <VariantSelectionButton
          text="sky Blue"
          width={104}
          height={40}
          color="#7485C1"
        />
      </View>
      <View>
        <ItemCounter />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
})
