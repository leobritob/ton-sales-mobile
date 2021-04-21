import React from 'react'
import { View, StatusBar } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../navigations'
import { Button, Column, Input, Products, Row, ShoppingCartSvg } from '../../components'

export const ProductsScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'Products'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="light-content" />

      <Row width="100%" p="10px 20px" backgroundColor="primary" justifyContent="space-between">
        <Input flex={1} placeholder="Buscar produto" backgroundColor="#fff" border="none" />

        <Column flex={1 / 4} alignItems="flex-end">
          <Button variant="transparent">
            <ShoppingCartSvg count={5} />
          </Button>
        </Column>
      </Row>

      <Products />
    </View>
  )
}
