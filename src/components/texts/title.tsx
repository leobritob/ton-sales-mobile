import styled from 'styled-components/native'

import { Text } from './text'

export const Title = styled(Text)`
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`
