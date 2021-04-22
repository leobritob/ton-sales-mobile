import { Api } from '../providers'

const newAppHit = () => Api.post('/api/v1/count-api/app')

export const CountApiServices = {
  newAppHit,
}
