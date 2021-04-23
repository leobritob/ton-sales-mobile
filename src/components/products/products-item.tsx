import React, { useCallback, useEffect, useState } from 'react'

import { Button } from '../buttons'
import { Column } from '../columns'
import { Text } from '../texts'

export type ProductsItemProps = {
  _id: string
  name: string
  price: number
  selected: boolean
  onSelect?: (product: ProductsItemProps) => void
}

export const ProductsItem: React.FC<ProductsItemProps> = ({ _id, name, price, selected = false, onSelect }) => {
  const handleSelectButton = () => {
    const nextStatus = !selected

    const product = { _id, name, price, selected: nextStatus }
    if (onSelect) onSelect(product)
  }

  return (
    <Column flex={1 / 2} m="20px">
      <Column width="100%" height="100px" backgroundColor="#d2d2d2" mb="10px" />

      <Text width="100%" textAlign="center" fontSize="14px" color="#000">
        {name}
      </Text>
      <Text width="100%" textAlign="center" fontSize="21px" color="#000">
        {price}
      </Text>
      <Button
        backgroundColor={selected ? 'danger' : 'primary'}
        minHeight="auto"
        width="100%"
        m="0"
        p="0"
        mt="10px"
        onPress={handleSelectButton}
      >
        <Text fontSize="24px" fontWeight="bold" color="#fff">
          {selected ? '-' : '+'}
        </Text>
      </Button>
    </Column>
  )
}
