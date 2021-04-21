import { AuthService } from '../services'

export const useAuth = () => {
  const signIn = async (email: string, password: string) => {
    try {
      AuthService.signIn(email, password)
    } catch (error) {
      console.log('SignIn Error: ', error)
    }
  }

  return { signIn }
}
