import styled from 'styled-components/native'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  border,
  BorderProps,
  variant,
} from 'styled-system'

export type ButtonProps = LayoutProps & ColorProps & SpaceProps & FlexProps & BorderProps & { onPress?: () => void }

export const Button = styled.TouchableOpacity<ButtonProps>`
  min-height: 40px;
  padding: 10px 20px;
  margin: 0 0 10px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.borderRadius}px;
  align-items: center;
  justify-content: center;
  ${variant({
    variants: {
      transparent: {
        minHeight: 'auto',
        padding: 0,
        margin: 0,
        border: 'none',
        backgroundColor: 'transparent',
      },
      white: {
        border: '1px solid #fff',
        backgroundColor: '#fff',
      },
      gray: {
        border: '1px solid #ccc',
        backgroundColor: 'transparent',
      },
    },
  })}
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flex}
`
