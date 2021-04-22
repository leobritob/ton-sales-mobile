import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Amplify from 'aws-amplify'

import { amplifyConfigure } from './src/configs'
import { theme } from './src/themes'
import { StackNavigation } from './src/navigations'
import { useCountApi } from './src/hooks'

Amplify.configure(amplifyConfigure)

const App: React.FC = () => {
  const { hit } = useCountApi()

  useEffect(() => {
    hit()
  }, [hit])

  return (
    <ThemeProvider theme={theme}>
      <StackNavigation />
    </ThemeProvider>
  )
}

export default App
