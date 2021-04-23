import React from 'react'
import { SafeAreaView } from 'react-native'

import { Column, Row } from '../columns'
import { Text } from '../texts'
import { Button } from '../buttons'

type ShoppingCartFooterProps = {
  amount: string | number
}

export const ShoppingCartFooter: React.FC<ShoppingCartFooterProps> = ({ amount }) => {
  return (
    <Column width="100%" py="20px" position="absolute" left={0} bottom={0} bg="primary">
      <SafeAreaView style={{ width: '100%' }}>
        <Column flex={1} p="0 20px">
          <Row width="100%">
            <Column flex={1} alignItems="flex-start">
              <Text color="#fff" fontSize="16px">
                Valor total
              </Text>
            </Column>
            <Column flex={1 / 2}>
              <Text color="#fff" fontSize="22px" fontWeight="bold">
                {amount}
              </Text>
            </Column>
          </Row>
          <Button variant="white" width="100%" my="20px">
            <Text fontSize="16px">Concluir compra</Text>
          </Button>
        </Column>
      </SafeAreaView>
    </Column>
  )
}
