import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerStack from './DrawerStack'
import NoIternet from '../ui/pages/NoInternet'
import { NetworkInfoState } from '../redux/networkInfo/networkInfoSlice'

const Stack = createStackNavigator()

const MainStack = ({ netinfo }: { netinfo: NetworkInfoState }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'skyblue',
        },
      }}
    >
      {netinfo.isInternetReachable ? (
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      ) : (
        <Stack.Screen name="NoIternet" component={NoIternet} />
      )}
    </Stack.Navigator>
  )
}
export default MainStack
