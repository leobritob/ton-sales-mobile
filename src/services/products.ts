import { IProduct } from '../interfaces'
import { Api } from '../providers'

const getAll = () => Api.get<IProduct[]>('/api/v1/products')

export const ProductsServices = {
  getAll,
}
