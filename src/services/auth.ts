import { Auth } from 'aws-amplify'

const signIn = (email: string, password: string) => Auth.signIn({ username: email, password })

export const AuthService = {
  signIn,
}
