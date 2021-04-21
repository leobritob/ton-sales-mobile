import React from 'react'
import { View, SafeAreaView, StatusBar, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from '../../navigations'

export const ProductsScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView>
        <StatusBar barStyle="default" />
      </SafeAreaView>
    </View>
  )
}
