import React, { useCallback, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

import { Button, Column, Input, Text, Title, TonLogoSvg } from 'components'
import { useAuth } from 'hooks'
import { RootStackParamList } from 'App'

export const SigInScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'SignIn'>) => {
  const theme = useTheme()
  const { signIn } = useAuth()

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLoginButton = useCallback(() => {
    if (email && password) {
      signIn(email, password)
    }
  }, [signIn, email, password])

  const handleSignUpButton = useCallback(() => {
    navigation.push('SignUp')
  }, [])

  return (
    <Column height="100%" backgroundColor="#fff" justifyContent="flex-start">
      <Column width="100%" backgroundColor={theme.colors.primary} height="200px">
        <TonLogoSvg width={120} color="#fff" />
      </Column>

      <Column width="100%" background="#fff" p="20px">
        <Title py="20px">Acesse sua conta</Title>
        <Input
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="E-mail"
          mb="10px"
          onChangeText={setEmail}
        />
        <Input
          secureTextEntry
          textContentType="password"
          autoCompleteType="password"
          placeholder="Senha"
          mb="10px"
          onChangeText={setPassword}
        />
        <Text mb="10px">Esqueceu sua senha?</Text>

        <Button width="100%" p="10px 20px" mb="10px" background={theme.colors.primary} onPress={handleLoginButton}>
          <Text width="100%" textAlign="center" fontSize="18px" fontWeight="bold" color="#fff">
            Conectar
          </Text>
        </Button>

        <Text mb="10px">ou</Text>

        <Button width="100%" p="10px 20px" mb="10px" background={theme.colors.primary} onPress={handleSignUpButton}>
          <Text width="100%" textAlign="center" fontSize="18px" fontWeight="bold" color="#fff">
            Cadastre-se
          </Text>
        </Button>
      </Column>
    </Column>
  )
}
