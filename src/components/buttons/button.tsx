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
  variant,
} from 'styled-system'

export type ButtonProps = LayoutProps &
  BackgroundProps &
  SpaceProps &
  FlexProps &
  BorderProps & { onPress?: () => void }

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
      gray: {
        border: '1px solid #ccc',
        backgroundColor: 'transparent',
      },
    },
  })}
  ${space}
  ${layout}
  ${background}
  ${border}
  ${flex}
`
