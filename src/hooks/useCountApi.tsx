import { CountApiServices } from '../services'

export const useCountApi = () => {
  const newAppHit = async () => {
    try {
      await CountApiServices.newAppHit()
    } catch (e) {}
  }

  return {
    newAppHit,
  }
}
