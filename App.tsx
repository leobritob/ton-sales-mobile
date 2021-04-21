import React from 'react'
import { ThemeProvider } from 'styled-components'

import Amplify from 'aws-amplify'

import { amplifyConfigure } from 'configs'
import { theme } from './src/themes'
import { StackNavigation } from './src/navigations'

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Home: undefined
}

Amplify.configure(amplifyConfigure)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StackNavigation />
    </ThemeProvider>
  )
}

export default App
