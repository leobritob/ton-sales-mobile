import React from 'react'

import { useShoppingCartContext } from '../../contexts/useShoppingCart'
import { Button } from '../buttons'
import { Row, Column } from '../columns'
import { Input } from '../inputs'
import { ShoppingCartSvg } from '../svgs'

type ProductHeaderProps = {
  onPressShoppingCart: () => void
}

export const ProductsHeader: React.FC<ProductHeaderProps> = ({ onPressShoppingCart }) => {
  const { shoppingCart } = useShoppingCartContext()

  return (
    <Row width="100%" p="10px 20px" backgroundColor="primary" justifyContent="space-between">
      <Input flex={1} placeholder="Buscar produto" backgroundColor="#fff" border="none" />

      <Column flex={1 / 4} alignItems="flex-end">
        <Button variant="transparent" onPress={onPressShoppingCart}>
          <ShoppingCartSvg count={shoppingCart.length} />
        </Button>
      </Column>
    </Row>
  )
}
