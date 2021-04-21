import { Auth } from 'aws-amplify'

const signIn = (email: string, password: string) => Auth.signIn({ username: email, password })

const signUp = (data: any) => Auth.signUp(data)

const confirmSignUp = (email: string, code: string) => Auth.confirmSignUp(email, code)

const resendConfirmationCode = (email: string) => Auth.resendSignUp(email)

export const AuthService = {
  signIn,
  signUp,
  confirmSignUp,
  resendConfirmationCode,
}
