import { CountApiServices } from '../services'

export const useCountApi = () => {
  const newAppHit = async () => {
    try {
      await CountApiServices.newAppHit()
    } catch (e) {
      console.log(JSON.stringify(e))
    }
  }

  return {
    newAppHit,
  }
}
