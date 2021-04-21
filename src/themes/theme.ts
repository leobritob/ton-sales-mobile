const breakpoints: any = ['576px', '768px', '992px', '1200px']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export const theme = {
  breakpoints,
  colors: {
    primary: '#00c700',
    danger: '#900',
  },
  radii: {
    borderRadius: 5,
  },
}

export type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
