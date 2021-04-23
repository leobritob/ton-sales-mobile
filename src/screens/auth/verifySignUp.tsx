import React, { Fragment, useCallback } from 'react'
import { Alert, StatusBar } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import * as yup from 'yup'

import { Button, Column, ErrorText, Input, Loading, Text, Title, TonLogoSvg } from '../../components'
import { RootStackParamList } from '../../navigations'
import { useAuth } from '../../hooks'

const schema = yup.object().shape({
  code: yup.string().required('Informe o código de verificação'),
})

export const VerifySignUpScreen = ({ route, navigation }: StackScreenProps<RootStackParamList, 'VerifySignUp'>) => {
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const { isLoading, confirmSignUp, resendConfirmationCode } = useAuth()

  const { email } = route.params

  const handleSubmitButton = useCallback(
    async (value) => {
      try {
        const user = await confirmSignUp(email, value.code)
        if (user) {
          navigation.replace('SignIn')
        }
      } catch (e) {
        Alert.alert('Erro', e.message)
      }
    },
    [email]
  )

  const handleResendConfirmationCode = useCallback(async () => {
    await resendConfirmationCode(email)
  }, [email, resendConfirmationCode])

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="light-content" />

      <Column height="100%" backgroundColor="#fff" justifyContent="flex-start">
        <Column width="100%" backgroundColor={theme.colors.primary} height="150px">
          <TonLogoSvg width={120} color="#fff" />
        </Column>

        <Column width="100%" background="#fff" p="20px">
          <Title mb="10px">Verifique sua conta</Title>
          <Text mb="10px">Enviamos um código de verificação para o seu e-mail, informe o código enviado</Text>

          <Controller
            name="code"
            control={control}
            render={({ field: { onChange } }) => (
              <Input keyboardType="number-pad" placeholder="Código" mb="10px" onChangeText={onChange} />
            )}
          />
          {errors?.code && <ErrorText>{errors.code.message}</ErrorText>}

          {isLoading ? (
            <Loading color="#333" mt="20px" />
          ) : (
            <Fragment>
              <Button variant="transparent" mt="5px" mb="20px" onPress={handleResendConfirmationCode}>
                <Text>Reenviar código para o e-mail</Text>
              </Button>

              <Button width="100%" onPress={handleSubmit(handleSubmitButton)}>
                <Text width="100%" textAlign="center" fontSize="16px" fontWeight="bold" color="#fff">
                  Confirmar Cadastro
                </Text>
              </Button>
            </Fragment>
          )}
        </Column>
      </Column>
    </KeyboardAwareScrollView>
  )
}
