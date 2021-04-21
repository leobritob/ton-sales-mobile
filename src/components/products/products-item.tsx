import React, { useCallback, useState } from 'react'

import { Button } from '../buttons'
import { Column } from '../columns'
import { Text } from '../texts'

type ProductsItemProps = {
  name: string
  price: string
  selected?: boolean
}

export const ProductsItem: React.FC<ProductsItemProps> = ({ name, price, selected }) => {
  const [isSelected, setIsSelected] = useState(selected)

  const handleSelectButton = useCallback(() => {
    setIsSelected((prev) => !prev)
  }, [])

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
        backgroundColor={isSelected ? 'danger' : 'primary'}
        minHeight="auto"
        width="100%"
        m="0"
        p="0"
        mt="10px"
        onPress={handleSelectButton}
      >
        <Text fontSize="24px" fontWeight="bold" color="#fff">
          {isSelected ? '-' : '+'}
        </Text>
      </Button>
    </Column>
  )
}
