import styled from 'styled-components/native'
import {
  layout,
  space,
  flex,
  background,
  typography,
  LayoutProps,
  SpaceProps,
  FlexProps,
  BackgroundProps,
  TypographyProps,
} from 'styled-system'

export type InputProps = LayoutProps & SpaceProps & FlexProps & BackgroundProps & TypographyProps

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  color: #000;
  border-radius: ${({ theme }) => theme.radii.borderRadius}px;
  ${layout}
  ${space}
  ${flex}
  ${background}
  ${typography}
`
