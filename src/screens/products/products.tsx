import React, { useCallback, useEffect, useMemo } from 'react'
import { View, StatusBar } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../navigations'
import { Loading, Products, ProductsHeader } from '../../components'
import { useProducts } from '../../hooks'

export const ProductsScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'Products'>) => {
  const { isLoading, productsFiltered, getAllProducts, handleSelectedProduct } = useProducts()

  const handleOpenShoppingCart = useCallback(() => {
    navigation.push('ShoppingCart')
  }, [])

  useEffect(() => {
    getAllProducts()
  }, [getAllProducts])

  return (
    <View>
      <StatusBar barStyle="light-content" />

      <ProductsHeader onPressShoppingCart={handleOpenShoppingCart} />

      {isLoading ? (
        <Loading my="20px" color="#333" />
      ) : (
        <Products products={productsFiltered} onSelect={handleSelectedProduct} />
      )}
    </View>
  )
}
