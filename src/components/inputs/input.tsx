import styled from 'styled-components/native'
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flex,
  FlexProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
} from 'styled-system'

export type InputProps = LayoutProps & SpaceProps & FlexProps & ColorProps & TypographyProps & BorderProps

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  color: #000;
  border-radius: ${({ theme }) => theme.radii.borderRadius}px;
  ${layout}
  ${space}
  ${flex}
  ${color}
  ${typography}
  ${border}
`
