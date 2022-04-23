import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../ui/pages/Home'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { StyleSheet } from 'react-native'

const Stack = createStackNavigator()

const MainStack = () => {
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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'skyblue',
          },
        }}
      >
        <Stack.Screen name="OnBoarding" component={Home} />
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="ResetPassword" component={Home} />
        <Stack.Screen name="SignUp" component={Home} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default MainStack
