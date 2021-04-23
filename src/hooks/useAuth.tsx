import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'

import { StorageHelper } from '../helpers/storage'
import { RootStackParamList } from '../navigations'
import { AuthService } from '../services'

export const useAuth = () => {
  const [isConnected, setIsConnected] = useState<Boolean | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async (
    email: string,
    password: string,
    navigation: StackNavigationProp<RootStackParamList, 'SignIn'>
  ) => {
    try {
      setIsLoading(true)

      const user = await AuthService.signIn(email, password)
      if (user) {
        await StorageHelper.setItem('auth', user)
        setIsConnected(true)
        return user
      }
    } catch (error) {
      console.log('signIn error: ', error)

      switch (error.code) {
        case 'UserNotFoundException':
        case 'NotAuthorizedException':
          throw new Error('E-mail e/ou senha estão incorretos')
        case 'UserNotConfirmedException':
          navigation.push('VerifySignUp', { email })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (data: any) => {
    try {
      setIsLoading(true)

      return await AuthService.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
          name: `${data.firstName} ${data.lastName}`,
        },
      })
    } catch (error) {
      switch (error.code) {
        case 'UsernameExistsException':
          throw new Error('Esse e-mail já está em uso')
      }

      console.log('signUp error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const confirmSignUp = async (email: string, code: string) => {
    try {
      setIsLoading(true)

      return await AuthService.confirmSignUp(email, code)
    } catch (error) {
      console.log('confirmSignUp error: ', error)

      switch (error?.code) {
        case 'CodeMismatchException':
          throw new Error('Código de verificação inválido')
        case 'LimitExceededException':
          throw new Error('Número de tentativas excedido. Por favor, tente mais tarde!')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const resendConfirmationCode = async (email: string) => {
    try {
      setIsLoading(true)

      return await AuthService.resendConfirmationCode(email)
    } catch (error) {
      console.log('resendConfirmationCode error: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const getAuth = async () => {
      const user = await StorageHelper.getItem('auth')
      setIsConnected(user != null)
    }

    getAuth()
  }, [])

  return { isLoading, isConnected, signIn, signUp, confirmSignUp, resendConfirmationCode }
}
