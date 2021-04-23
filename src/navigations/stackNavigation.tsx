import React, { Fragment, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { SigInScreen, ProductsScreen, SigUpScreen, VerifySignUpScreen, ShoppingCartScreen } from '../screens'
import { theme } from '../themes'
import { StorageHelper } from '../helpers/storage'
import { useAuth } from '../hooks'

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
  Products: undefined
  ShoppingCart: undefined
}

export const StackNavigation = () => {
  const { isConnected } = useAuth()

  if (isConnected === undefined) {
    //TODO: Create a screen loading
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isConnected ? 'Products' : 'SignIn'}>
        <Stack.Screen name="Products" component={ProductsScreen} options={{ ...headersStyle, title: 'Produtos' }} />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCartScreen}
          options={{ ...headersStyle, title: 'Carrinho de Compras' }}
        />
        <Stack.Screen name="SignIn" component={SigInScreen} options={{ ...headersStyle, title: 'Acesse sua conta' }} />
        <Stack.Screen name="SignUp" component={SigUpScreen} options={{ ...headersStyle, title: 'Crie sua conta' }} />
        <Stack.Screen
          name="VerifySignUp"
          component={VerifySignUpScreen}
          options={{ ...headersStyle, title: 'Verifique seu cadastro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
