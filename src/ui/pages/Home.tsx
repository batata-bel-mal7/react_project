import React, { useEffect, useState } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { TabView, TabBar } from 'react-native-tab-view'
import products from '../../services/products'
import DrawerOpenButton from '../components/DrawerOpenButton'
import Header from '../components/Header'
// import HeaderBackButton from '../components/HeaderBackButton'
import BagIcon from '../components/icons/BagIcon'
import SearchBar from '../components/SearchBar'
import storage from '@react-native-firebase/storage'
import ItemCard from '../components/ItemCard'

const ProductsRoutes = ({
  navigation,
  categoryName,
}: {
  categoryName: string
  navigation: any
}) => {
  const [mproducts, setProducts] = useState([])
  const [cimages, setCimages] = useState([])
  useEffect(() => {
    ;(async () => {
      const m = await products.getPoductByCategory(categoryName)
      // load images
      const images = await Promise.all(
        m.map(async (product) => {
          const image = await storage()
            .ref(product.images[0][0])
            .getDownloadURL()
          return image
        })
      )
      setCimages(images as any)
      const aproducts = m.map((product, idx) => {
        return {
          ...product,
          key: product.name,
          image: images[idx],
        }
      })
      setProducts(aproducts as any)
    })()
  }, [categoryName])
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal
        data={mproducts}
        renderItem={({ item, index }: any) => (
          <ItemCard
            key={item.name}
            imageSrc={{ uri: cimages[index] }}
            width={200}
            height={400}
            text={item.name}
            onTap={() => {
              navigation.navigate('Product', {
                product: item,
              })
            }}
          />
        )}
      />
    </View>
  )
}

export default function Home({ navigation }: any) {
  const layout = useWindowDimensions()
  const [query, setQuery] = useState('')

  const [index, setIndex] = React.useState(0)
  const [routes, setRoutes] = React.useState<{ key: string; title: string }[]>(
    []
  )
  useEffect(() => {
    ;(async () => {
      const ma = await products.getCategories()
      const newRoutes = ma.map((item: any) => ({
        key: item.createdAt.toString(),
        title: item.name,
      }))
      setRoutes(newRoutes)
    })()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<DrawerOpenButton navigation={navigation} />}
        middleComponent={<SearchBar text={query} onChangeText={setQuery} />}
        rightComponent={<BagIcon color={'#200E32'} />}
      />
      <View
        style={{
          flex: 1,
          maxHeight: 150,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: 'Raleway-Bold',
            marginHorizontal: 20,
            marginEnd: 40,
            color: '#000',
          }}
        >
          Order online collect in store
        </Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => (
          <ProductsRoutes categoryName={route.title} navigation={navigation} />
        )}
        onIndexChange={setIndex}
        swipeEnabled={false}
        renderTabBar={(props) => (
          <View style={{ marginHorizontal: 5 }}>
            <TabBar
              scrollEnabled={true}
              {...props}
              style={{
                backgroundColor: 'transparent',
              }}
              labelStyle={{
                color: '#000',
                backgroundColor: 'transparent',
              }}
              tabStyle={{
                backgroundColor: 'transparent',
                width: layout.width / 5,
              }}
              contentContainerStyle={{
                backgroundColor: 'transparent',
              }}
              indicatorStyle={{
                backgroundColor: '#5956E9',
              }}
              renderTabBarItem={({ route: _route }) => {
                let focus = index === routes.indexOf(_route)
                return (
                  <View
                    key={_route.key}
                    style={{
                      marginHorizontal: 5,
                      width: layout.width / 5 - 10,
                      marginVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setIndex(routes.indexOf(_route))
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: 'center',
                          color: focus ? '#5956E9' : '#9A9A9D',
                          fontFamily: 'Raleway-SemiBold',
                          fontSize: 14,
                        }}
                      >
                        {_route.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
              layout={layout}
            />
          </View>
        )}
        initialLayout={{ width: layout.width }}
      />
    </View>
  )
}
