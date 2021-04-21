import styled from 'styled-components/native'
import {
  space,
  layout,
  background,
  flex,
  LayoutProps,
  BackgroundProps,
  SpaceProps,
  FlexProps,
  border,
  BorderProps,
} from 'styled-system'

export type ButtonProps = LayoutProps &
  BackgroundProps &
  SpaceProps &
  FlexProps &
  BorderProps & { onPress?: () => void }

export const Button = styled.TouchableOpacity<ButtonProps>`
  border-radius: ${({ theme }) => theme.radii.borderRadius}px;
  ${space}
  ${layout}
  ${background}
  ${border}
  ${flex}
`
