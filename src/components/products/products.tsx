import React from 'react'
import { FlatList } from 'react-native'

import { ProductsItem } from './products-item'

export const Products: React.FC = () => {
  return (
    <FlatList
      style={{ width: '100%' }}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
      horizontal={false}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={() => <ProductsItem name="MacBook Pro" price="R$ 10.000" />}
    />
  )
}
