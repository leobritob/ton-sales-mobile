import { Api } from 'providers'

const login = (email: string, password: string) => Api.post('/login', { email, password })

export const AuthService = {
  login,
}
