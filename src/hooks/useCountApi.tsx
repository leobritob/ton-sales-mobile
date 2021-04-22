import { CountApiServices } from '../services'

export const useCountApi = () => {
  const hit = async () => {
    await CountApiServices.hit()
  }

  return {
    hit,
  }
}
