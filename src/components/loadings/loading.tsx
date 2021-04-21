import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Column, ColumnProps } from '../columns'

type LoadingProps = ColumnProps & { color?: string }

export const Loading: React.FC<LoadingProps> = ({ color = '#fff', ...props }) => {
  return (
    <Column {...props}>
      <ActivityIndicator color={color} />
    </Column>
  )
}
