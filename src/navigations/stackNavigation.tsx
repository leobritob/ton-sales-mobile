import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SigInScreen, HomeScreen, SigUpScreen, VerifySignUpScreen } from '../screens'
import { theme } from '../themes'

const headersStyle = {
  headerStyle: { backgroundColor: theme.colors.primary },
  headerTintColor: '#fff',
  headerBackTitle: 'Voltar',
}

const Stack = createStackNavigator()

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  VerifySignUp: { email: string }
  Home: undefined
}

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SigInScreen} options={{ ...headersStyle, title: 'Acesse sua conta' }} />
        <Stack.Screen name="SignUp" component={SigUpScreen} options={{ ...headersStyle, title: 'Crie sua conta' }} />
        <Stack.Screen
          name="VerifySignUp"
          component={VerifySignUpScreen}
          options={{ ...headersStyle, title: 'Verifique seu cadastro' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ ...headersStyle, title: 'Início' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
