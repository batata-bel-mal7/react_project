import * as React from 'react'
import { StyleSheet } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeFilldIcon from '../ui/components/icons/HomeFilldIcon'
import HomeIcon from '../ui/components/icons/HomeIcon'
import HeartFilledIcon from '../ui/components/icons/HeartFilledIcon'
import HeartIcon from '../ui/components/icons/HeartIcon'
import ProfileFilledIcon from '../ui/components/icons/ProfileFilledIcon'
import ProfileIcon from '../ui/components/icons/ProfileIcon'
import BuyFilledIcon from '../ui/components/icons/BuyFilledIcon'
import BuyIcon from '../ui/components/icons/BuyIcon'
import Home from '../ui/pages/Home'
import FavouritePage from '../ui/pages/Favorites'
import Profile from '../ui/pages/Profile'
import { useDrawerProgress } from '@react-navigation/drawer'
import HistoryPage from '../ui/pages/OrderHistory'

const Tab = createBottomTabNavigator()

export default function App() {
  const progress = useDrawerProgress()
  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: 'green',
      borderRadius: interpolate(
        (progress as Animated.SharedValue<number>).value,
        [0, 1],
        [0, 30]
      ),
      transform: [
        {
          scale: interpolate(
            (progress as Animated.SharedValue<number>).value,
            [0, 1],
            [1, 0.7]
          ),
        },
      ],
    }
  })
  return (
    <Animated.View style={[styles.flex1, animatedStyles]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarItemStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === 'Home') {
              return focused ? <HomeFilldIcon /> : <HomeIcon />
            } else if (route.name === 'Favorite') {
              return focused ? <HeartFilledIcon /> : <HeartIcon stroke="#000" />
            } else if (route.name === 'Profile') {
              return focused ? (
                <ProfileFilledIcon />
              ) : (
                <ProfileIcon color="#000" />
              )
            }
            return focused ? <BuyFilledIcon /> : <BuyIcon color="#000" />
          },
          tabBarLabel: () => {
            return null
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#E5E5E5',
            elevation: 0,
          },
          style: {
            backgroundColor: 'blue',
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorite" component={FavouritePage} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Orders" component={HistoryPage} />
      </Tab.Navigator>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    overflow: 'hidden',
  },
})
