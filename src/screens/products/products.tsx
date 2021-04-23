import React, { useCallback, useEffect, useMemo } from 'react'
import { View, StatusBar } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../navigations'
import { Button, Column, Input, Loading, Products, ProductsItemProps, Row, ShoppingCartSvg } from '../../components'
import { useShoppingCartContext } from '../../contexts/useShoppingCart'
import { useProducts } from '../../hooks'

export const ProductsScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'Products'>) => {
  const { shoppingCart } = useShoppingCartContext()
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

      <Row width="100%" p="10px 20px" backgroundColor="primary" justifyContent="space-between">
        <Input flex={1} placeholder="Buscar produto" backgroundColor="#fff" border="none" />

        <Column flex={1 / 4} alignItems="flex-end">
          <Button variant="transparent" onPress={handleOpenShoppingCart}>
            <ShoppingCartSvg count={shoppingCart.length} />
          </Button>
        </Column>
      </Row>

      {isLoading ? (
        <Loading my="20px" color="#333" />
      ) : (
        <Products products={productsFiltered} onSelect={handleSelectedProduct} />
      )}
    </View>
  )
}
