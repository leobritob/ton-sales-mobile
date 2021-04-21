import React from 'react'
import { ActivityIndicator } from 'react-native'

type LoadingProps = {
  color?: string
}

export const Loading: React.FC<LoadingProps> = ({ color = '#fff' }) => {
  return <ActivityIndicator color={color} />
}
