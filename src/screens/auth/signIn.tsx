import React, { useCallback, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Column, ErrorText, Input, Loading, Row, Text, Title, TonLogoSvg } from '../../components'
import { useAuth } from '../../hooks'
import { RootStackParamList } from '../../navigations'

const schema = yup.object().shape({
  email: yup
    .string()
    .max(255, 'O máximo de caracteres foi atingido')
    .email('Informe um e-mail válido')
    .required('Preencha seu e-mail'),
  password: yup
    .string()
    .min(8, 'Sua senha deve ter no mínimo 8 caracteres')
    .max(255, 'O máximo de caracteres foi atingido')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Sua senha deve conter letras maiusculas e minusculas, números e caracteres especiais'
    )
    .required('Preencha sua senha'),
})

export const SigInScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'SignIn'>) => {
  const theme = useTheme()
  const { isLoading, signIn } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleLoginButton = useCallback(
    async (value) => {
      console.log({ value })
      const user = await signIn(value.email, value.password)
      if (user) {
        navigation.replace('Home')
      }
    },
    [signIn]
  )

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
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCompleteType="email"
              placeholder="E-mail"
              autoCapitalize="none"
              mb="10px"
              onChangeText={onChange}
            />
          )}
        />
        {errors?.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              secureTextEntry
              textContentType="password"
              autoCompleteType="password"
              placeholder="Senha"
              mb="10px"
              onChangeText={onChange}
            />
          )}
        />
        {errors?.password && <ErrorText>{errors.password.message}</ErrorText>}
        <Row width="100%" justifyContent="flex-end" alignItems="flex-end" mb="20px">
          <Button variant="transparent" p="5px">
            <Text>Esqueceu sua senha?</Text>
          </Button>
        </Row>

        <Button width="100%" onPress={handleSubmit(handleLoginButton)}>
          {isLoading ? (
            <Loading />
          ) : (
            <Text width="100%" textAlign="center" fontSize="16px" color="#fff">
              Acessar conta
            </Text>
          )}
        </Button>

        <Text mb="10px">ou</Text>

        <Button variant="gray" width="100%" onPress={handleSignUpButton}>
          <Text width="100%" textAlign="center" fontSize="14px" color="#ccc">
            Crie sua conta
          </Text>
        </Button>
      </Column>
    </Column>
  )
}
