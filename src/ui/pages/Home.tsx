/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { increment, selectCounter } from '../../redux/counter/counterSlice'

const Home = () => {
  const count = useSelector(selectCounter)
  const dispatch = useAppDispatch()
  const isPressed = useSharedValue(false)
  const offset = useSharedValue({ x: 0, y: 0 })
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    }
  })
  const increase = () => {
    dispatch(increment())
  }
  const start = useSharedValue({ x: 0, y: 0 })
  const gesture = Gesture.Pan()
    .onBegin(() => {
      runOnJS(increase)()
      isPressed.value = true
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      }
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      }
    })
    .onFinalize(() => {
      isPressed.value = false
    })
  return (
    <View style={StyleSheet.absoluteFill}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              backgroundColor: 'blue',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedStyles,
          ]}
        >
          <Text
            style={{
              fontSize: 40,
            }}
          >
            {count}
          </Text>
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

export default Home
