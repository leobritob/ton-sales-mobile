import React, { useCallback } from 'react'
import { View, StatusBar } from 'react-native'

import { Products, ProductsItemProps } from '../../components'
import { useShoppingCartContext } from '../../contexts/useShoppingCart'
import { useProducts } from '../../hooks'

export const ShoppingCartScreen = () => {
  const { shoppingCart } = useShoppingCartContext()
  const { handleSelectedProduct } = useProducts()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" />

      <Products products={shoppingCart} onSelect={handleSelectedProduct} />
    </View>
  )
}
