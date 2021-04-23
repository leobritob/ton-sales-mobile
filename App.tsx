import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Amplify from 'aws-amplify'

import { amplifyConfigure } from './src/configs'
import { theme } from './src/themes'
import { StackNavigation } from './src/navigations'
import { useCountApi } from './src/hooks'
import { AppProvider } from './src/contexts'

Amplify.configure(amplifyConfigure)

const App: React.FC = () => {
  const { newAppHit } = useCountApi()

  useEffect(() => {
    newAppHit()
  }, [newAppHit])

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StackNavigation />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
