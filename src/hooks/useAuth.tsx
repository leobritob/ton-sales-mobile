import { useState } from 'react'
import { AuthService } from '../services'

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true)

      return await AuthService.signIn(email, password)
    } catch (error) {
      console.log('signIn error: ', error)
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
      let message

      if (error.code === 'UsernameExistsException') {
        message = 'Esse e-mail já está em uso'
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
      if (error?.code === 'CodeMismatchException') {
        throw new Error('Código de verificação inválido')
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

  return { isLoading, signIn, signUp, confirmSignUp, resendConfirmationCode }
}
