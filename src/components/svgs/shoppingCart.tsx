import * as React from 'react'
import Svg, { SvgProps, G, Path, Circle, Text, TSpan } from 'react-native-svg'

type ShoppingCartSvgProps = SvgProps & {
  count: number
}

export const ShoppingCartSvg = ({ count = 0, ...props }: ShoppingCartSvgProps) => {
  return (
    <Svg width={40} height={36} viewBox="0 0 40 36" {...props}>
      <G data-name="Group 23">
        <G data-name="Group 22" fill="#fff">
          <Path
            data-name="Path 6"
            d="M9.833 24.564a3.218 3.218 0 103.218 3.218 3.218 3.218 0 00-3.218-3.218zm0 5.006a1.788 1.788 0 111.788-1.788 1.788 1.788 0 01-1.788 1.788z"
          />
          <Path
            data-name="Path 7"
            d="M23.419 24.564a3.218 3.218 0 103.218 3.218 3.218 3.218 0 00-3.218-3.218zm0 5.006a1.788 1.788 0 111.788-1.788 1.788 1.788 0 01-1.788 1.788z"
          />
          <Path
            data-name="Path 8"
            d="M30.679 5.791a.894.894 0 00-.572-.286L6.83 5.184l-.644-1.967A3.29 3.29 0 003.111 1H.715a.715.715 0 000 1.43h2.4a1.86 1.86 0 011.712 1.252l4.541 13.69-.358.822a3.433 3.433 0 00.322 3.111 3.325 3.325 0 002.682 1.5h13.91a.715.715 0 000-1.43h-13.91a1.824 1.824 0 01-1.5-.858 1.967 1.967 0 01-.179-1.716l.286-.644 15.054-1.573a3.933 3.933 0 003.4-3l1.716-7.187a.608.608 0 00-.112-.606zm-3 7.473a2.431 2.431 0 01-2.181 1.9L10.62 16.697 7.294 6.614l21.919.322z"
          />
        </G>
      </G>
      <G data-name="Group 29" transform="translate(-271.175 -21)">
        <Circle data-name="Ellipse 1" cx={8} cy={8} r={8} transform="translate(291 21)" fill="#f00" />
        <Text data-name={1} transform="translate(296 34)" fill="#fff" fontSize={12} fontWeight={700}>
          <TSpan x={count > 9 ? -3 : -1} y={-1}>
            {count > 9 ? '9+' : count}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}
