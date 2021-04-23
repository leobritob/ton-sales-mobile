import styled from 'styled-components/native'
import {
  layout,
  flex,
  space,
  LayoutProps,
  FlexProps,
  SpaceProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system'

export type ColumnProps = LayoutProps & FlexProps & SpaceProps & ColorProps & FlexboxProps & PositionProps

export const Column = styled.View<ColumnProps>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${color}
  ${layout}
  ${flex}
  ${space}
  ${flexbox}
  ${position}
`
