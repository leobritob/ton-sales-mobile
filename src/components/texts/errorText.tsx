import React from 'react'

import { theme } from '../../themes'
import { Text } from './text'

export const ErrorText: React.FC = ({ children }) => (
  <Text width="100%" fontSize="14px" color={theme.colors.danger} mb="15px">
    {children}
  </Text>
)
