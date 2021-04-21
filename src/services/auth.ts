import { Auth } from 'aws-amplify'

const signIn = (email: string, password: string) => Auth.signIn({ username: email, password })

const signUp = (data: any) => Auth.signUp(data)

export const AuthService = {
  signIn,
  signUp,
}
