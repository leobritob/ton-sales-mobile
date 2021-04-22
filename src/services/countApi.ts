import { Api } from '../providers'

const hit = () => Api.get('https://api.countapi.xyz/hit/tonsales/app')

export const CountApiServices = {
  hit,
}
