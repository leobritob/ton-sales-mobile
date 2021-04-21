import React, { useCallback, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

import { Button, Column, Input, Text, Title, TonLogoSvg } from '../../components'
import { RootStackParamList } from '../../navigations'

export const SigUpScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'SignUp'>) => {
  const theme = useTheme()

  const handleRegisterButton = useCallback(() => {}, [])

  const handleLoginButton = useCallback(() => {}, [])

  return (
    <Column height="100%" backgroundColor="#fff" justifyContent="flex-start">
      <Column width="100%" backgroundColor={theme.colors.primary} height="200px">
        <TonLogoSvg width={120} color="#fff" />
      </Column>

      <Column width="100%" background="#fff" p="20px">
        <Title py="20px">Crie sua conta</Title>
        <Input
          placeholder="Nome"
          mb="10px"
          // onChangeText={setEmail}
        />
        <Input
          placeholder="Sobre nome"
          mb="10px"
          // onChangeText={setEmail}
        />
        <Input
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="E-mail"
          mb="10px"
          // onChangeText={setEmail}
        />
        <Input
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
          placeholder="Senha"
          mb="10px"
          // onChangeText={setPassword}
        />

        <Button width="100%" p="10px 20px" mb="10px" background={theme.colors.primary} onPress={handleRegisterButton}>
          <Text width="100%" textAlign="center" fontSize="18px" fontWeight="bold" color="#fff">
            Cadastrar
          </Text>
        </Button>

        <Text mb="10px">ou</Text>

        <Button width="100%" p="10px 20px" mb="10px" onPress={handleLoginButton}>
          <Text width="100%" textAlign="center" fontSize="14px" color="#000">
            Faça seu login
          </Text>
        </Button>
      </Column>
    </Column>
  )
}
