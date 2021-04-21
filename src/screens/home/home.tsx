import React from 'react'
import { View, SafeAreaView, StatusBar, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { Button } from '../../components'
import { RootStackParamList } from '../../navigations'

export const HomeScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView>
        <StatusBar barStyle="default" />
        <Button onPress={() => navigation.push('SignIn')}>
          <Text>Login</Text>
        </Button>
      </SafeAreaView>
    </View>
  )
}
