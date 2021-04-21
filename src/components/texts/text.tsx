import styled from 'styled-components/native'
import {
  layout,
  background,
  typography,
  space,
  color,
  LayoutProps,
  BackgroundProps,
  TypographyProps,
  SpaceProps,
  ColorProps,
} from 'styled-system'

export type TextProps = LayoutProps & BackgroundProps & TypographyProps & SpaceProps & ColorProps

export const Text = styled.Text<TextProps>`
  font-size: 14px;
  font-weight: normal;
  color: #333;
  ${layout}
  ${background}
  ${typography}
  ${space}
  ${color}
`
