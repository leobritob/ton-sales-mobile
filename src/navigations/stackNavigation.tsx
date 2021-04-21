import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SigInScreen, HomeScreen, SigUpScreen } from '../screens'

const Stack = createStackNavigator()

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Home: undefined
}

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignIn" component={SigInScreen} />
        <Stack.Screen name="SignUp" component={SigUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
