import React, { useCallback } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import * as yup from 'yup'

import { Button, Column, ErrorText, Input, Text, Title, TonLogoSvg } from '../../components'
import { RootStackParamList } from '../../navigations'

const schema = yup.object().shape({
  firstName: yup.string().max(255, 'O máximo de caracteres foi atingido').required('Preencha seu nome'),
  lastName: yup.string().max(255, 'O máximo de caracteres foi atingido').required('Preencha seu sobrenome'),
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

export const SigUpScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'SignUp'>) => {
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleRegisterButton = useCallback((value) => {
    console.log({ value })
  }, [])

  const handleLoginButton = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Column height="100%" backgroundColor="#fff" justifyContent="flex-start">
        <Column width="100%" backgroundColor={theme.colors.primary} height="150px">
          <TonLogoSvg width={120} color="#fff" />
        </Column>

        <Column width="100%" background="#fff" p="20px">
          <Title mb="10px">Crie sua conta</Title>

          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange } }) => <Input placeholder="Nome" mb="10px" onChangeText={onChange} />}
          />
          {errors?.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}

          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange } }) => <Input placeholder="Sobrenome" mb="10px" onChangeText={onChange} />}
          />
          {errors?.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}

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

          <Button width="100%" onPress={handleSubmit(handleRegisterButton)}>
            <Text width="100%" textAlign="center" fontSize="16px" fontWeight="bold" color="#fff">
              Criar conta
            </Text>
          </Button>

          <Text mb="10px">ou</Text>

          <Button variant="gray" width="100%" onPress={handleLoginButton}>
            <Text width="100%" textAlign="center" fontSize="14px" color="#ccc">
              Acesse sua conta
            </Text>
          </Button>
        </Column>
      </Column>
    </KeyboardAwareScrollView>
  )
}
