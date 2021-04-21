import { AuthService } from '../services'

export const useAuth = () => {
  const signIn = async (email: string, password: string) => {
    try {
      AuthService.signIn(email, password)
    } catch (error) {
      console.log('SignIn Error: ', error)
    }
  }

  const signUp = async (data: any) => {
    try {
      const user = await AuthService.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
          name: `${data.firstName} ${data.lastName}`,
        },
      })

      console.log(user)

      return user
    } catch (error) {
      console.log('SignIn Error: ', error)
    }
  }

  return { signIn, signUp }
}
