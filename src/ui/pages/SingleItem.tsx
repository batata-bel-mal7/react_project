/* eslint-disable react/self-closing-comp */
import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Header from '../components/Header'
import HeaderBackButton from '../components/HeaderBackButton'
import HeartIcon from '../components/icons/HeartIcon'
// import Carousel from 'react-native-reanimated-carousel'
import Carousel from 'react-native-snap-carousel'
import VariantSelectionBar from '../components/VariantSelectionBar'
import Footer from '../components/Footer'

const SingleItem = () => {
  const window = Dimensions.get('window')
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<HeaderBackButton />}
        rightComponent={<HeartIcon stroke={'black'} />}
      />
      <View>
        <Carousel
          width={300}
          height={150}
          data={[1, 2, 3]}
          itemWidth={window.width * 0.8}
          sliderWidth={window.width}
          renderItem={({ item }) => (
            <View
              key={item}
              style={{
                width: window.width * 0.8,
                height: 200,
                backgroundColor: 'red',
              }}
            >
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
      <VariantSelectionBar
        variants={[
          {
            text: 'S',
            icon: <Text>S</Text>,
          },
          {
            text: 'M',
            icon: <Text>M</Text>,
          },
        ]}
        onVarientChange={() => {}}
        title={'Color'}
      />
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nisi sed consectetur aliquam, nisl nisi consectetur nisi,
          euismod euismod nisi nisi sed nisi.
        </Text>
      </View>
      <Footer price={0} text={''} />
    </View>
  )
}

export default SingleItem
