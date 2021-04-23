import { ProductsItemProps } from '../components'
import { IProduct } from '../interfaces'

const formatItem = (item: IProduct): ProductsItemProps => {
  const itemCopy: ProductsItemProps = { ...item, selected: false }

  itemCopy.price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(Number(itemCopy.price))
    .toString()
  return itemCopy
}

export const ProductsHelper = {
  formatItem,
}
