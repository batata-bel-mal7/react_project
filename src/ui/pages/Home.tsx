// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import { GestureDetector, Gesture } from 'react-native-gesture-handler'
// import Animated, {
//   runOnJS,
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from 'react-native-reanimated'
// import { useSelector } from 'react-redux'
// import { useAppDispatch } from '../../hooks/useAppDispatch'
// import { increment, selectCounter } from '../../redux/counter/counterSlice'

import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import Header from '../components/Header'
import HeaderBackButton from '../components/HeaderBackButton'
import BagIcon from '../components/icons/BagIcon'
import SearchBar from '../components/SearchBar'

const FirstRoute = () => {
  return <View style={{ flex: 1, backgroundColor: 'red' }} />
}

const SecondRoute = () => <View style={{ flex: 1, backgroundColor: 'blue' }} />

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
  fourth: SecondRoute,
  fifth: FirstRoute,
  sixth: SecondRoute,
  seventh: FirstRoute,
})

export default function Home() {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'third' },
    { key: 'fourth', title: 'fourth' },
    { key: 'fifth', title: 'fifth' },
    { key: 'sixth', title: 'sixth' },
    { key: 'seventh', title: 'seventh' },
  ])

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<HeaderBackButton />}
        middleComponent={
          <SearchBar
            text={''}
            onChangeText={function (text: string): void {
              throw new Error('Function not implemented.')
            }}
          />
        }
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
        renderScene={renderScene}
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
                          fontSize: 17,
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

// const Home = ({ navigation }: any) => {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
//       <Header
//         leftComponent={<DrawerOpenButton navigation={navigation} />}
//         middleComponent={<SearchBar text={''} onChangeText={() => {}} />}
//         disableRightComponent
//       />
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     </View>
//   )
// }

// export default Home
