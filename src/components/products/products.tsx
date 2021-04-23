import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { ProductsItem, ProductsItemProps } from './products-item'

export type ProductsProps = {
  products: ProductsItemProps[]
  onSelect: (product: ProductsItemProps) => void
}

export const Products: React.FC<ProductsProps> = ({ products, onSelect }) => {
  return (
    <FlatList
      style={{ width: '100%' }}
      data={products}
      horizontal={false}
      numColumns={2}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <ProductsItem {...item} onSelect={onSelect} />}
    />
  )
}
