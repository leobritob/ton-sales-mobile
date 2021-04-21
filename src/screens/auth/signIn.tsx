import React, { useCallback, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components'

import { Button, Column, Input, Row, Text, Title, TonLogoSvg } from '../../components'
import { useAuth } from '../../hooks'
import { RootStackParamList } from '../../navigations'

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
        <Title mb="10px">Acesse sua conta</Title>
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
        <Row width="100%" justifyContent="flex-end" alignItems="flex-end" mb="20px">
          <Button variant="transparent" p="5px">
            <Text>Esqueceu sua senha?</Text>
          </Button>
        </Row>

        <Button width="100%" onPress={handleLoginButton}>
          <Text width="100%" textAlign="center" fontSize="16px" color="#fff">
            Acessar conta
          </Text>
        </Button>

        <Text mb="10px">ou</Text>

        <Button variant="gray" width="100%" onPress={handleSignUpButton}>
          <Text width="100%" textAlign="center" fontSize="14px" color="#ccc">
            Criar sua conta
          </Text>
        </Button>
      </Column>
    </Column>
  )
}
