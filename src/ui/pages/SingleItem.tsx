/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react'
import { Dimensions, Text, View, Image } from 'react-native'
import Header from '../components/Header'
import HeaderBackButton from '../components/HeaderBackButton'
import HeartIcon from '../components/icons/HeartIcon'
// import Carousel from 'react-native-reanimated-carousel'
import Carousel from 'react-native-snap-carousel'
import VariantSelectionBar from '../components/VariantSelectionBar'
import Footer from '../components/Footer'
import storage from '@react-native-firebase/storage'

const SingleItem = ({ navigation, route }: any) => {
  const { product } = route.params
  const [carsoulImages, setCarsoulImages] = useState([])
  const [color, setColor] = useState()
  const [jstorage, setStorage] = useState('')

  useEffect(() => {
    setColor(product.varientsComplete[0].color)
    setStorage(product.varientsComplete[0].storage)
    ;(async () => {
      console.log('hell', product.images[0])
      const images = await Promise.all(
        Object.keys(product.images[0]).map(async (key) => {
          const image = await storage()
            .ref(product.images[0][key])
            .getDownloadURL()
          return image
        })
      )
      setCarsoulImages(images as any)
    })()
  }, [])

  useEffect(() => {
    console.log(color, jstorage)
  }, [color, jstorage])
  const window = Dimensions.get('window')
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<HeaderBackButton navigation={navigation} />}
        rightComponent={<HeartIcon stroke={'black'} />}
      />
      <View>
        <Carousel
          width={300}
          height={150}
          data={carsoulImages}
          itemWidth={window.width * 0.8}
          sliderWidth={window.width}
          renderItem={({ item }) => (
            <View
              key={item}
              style={{
                width: window.width * 0.8,
                height: 200,
                backgroundColor: 'white',
              }}
            >
              <Image
                source={{ uri: item }}
                style={{ width: '100%', height: '100%' }}
              />
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Raleway-Bold',
          fontSize: 20,
          margin: 10,
        }}
      >
        {product.name}
      </Text>
      {product.varients.color &&
        Object.keys(product.varients.color).length > 1 && (
          <VariantSelectionBar
            variants={product.varients.color.map((item) => ({
              text: item.name,
              icon: (
                <View
                  style={{
                    padding: 5,
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    backgroundColor: item.color,
                    borderColor: 'black',
                    borderWidth: 1,
                  }}
                />
              ),
            }))}
            onVarientChange={setColor}
            title={'Color'}
          />
        )}
      {product.varients.storage && (
        <VariantSelectionBar
          variants={product.varients.storage.map((item) => ({
            text: item,
          }))}
          onVarientChange={setStorage}
          title={'Storage'}
        />
      )}
      <View style={{ margin: 15 }}>
        <Text
          style={{
            fontFamily: 'Raleway-Bold',
            fontSize: 20,
          }}
        >
          {product.description.slice(0, 100)}...
        </Text>
      </View>
      <Footer price={0} text={''} />
    </View>
  )
}

export default SingleItem
