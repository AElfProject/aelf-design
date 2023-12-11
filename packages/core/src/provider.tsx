import { ThemeConfig } from 'antd'
import { ThemeAppearance, ThemeProvider, ThemeProviderProps } from 'antd-style'

interface IAelfdThemeProviderProps
  extends Omit<ThemeProviderProps<IAelfdCustomToken>, 'theme'> {
  theme?: ThemeConfig
  customToken?: IAelfdCustomToken
}

interface IAelfdCustomToken {
  colorTextSecondary: string
  colorBgHover: string
  colorDownArrow: string
  colorBgPage: string
}

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends IAelfdCustomToken {}
}

const AELFDProvider = (props: IAelfdThemeProviderProps) => {
  return (
    <ThemeProvider<IAelfdCustomToken>
      {...props}
      // customToken={({ token, isDarkMode }) => ({
      //   customColor: '#F8F8F8',
      //   headerHeight: 64
      // })}
      customToken={({ appearance }) => {
        if (appearance === 'dark') {
          return {
            colorTextSecondary: '#8C8C8C',
            colorBgHover: '#212121',
            colorDownArrow: '#fff',
            colorBgPage: '#1A1A1A'
          }
        } else {
          return {
            colorTextSecondary: '#808080',
            colorBgHover: '#F8F8F8',
            colorDownArrow: '#101114',
            colorBgPage: '#FFF'
          }
        }
      }}
      theme={(appearance: ThemeAppearance) => {
        const comp = {
          Input: {
            paddingBlock: 11,
            paddingBlockSM: 7,
            paddingInline: 11,
            paddingInlineSM: 7,
            addonBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
            ...props.theme?.components?.Input
          }
        }
        if (appearance === 'dark') {
          return {
            token: {
              colorPrimary: '#1370DD',
              colorPrimaryHover: '#3689DD',
              colorPrimaryActive: '#0756BC',
              colorError: '#D43939',
              colorErrorHover: '#E86262',
              colorErrorActive: '#B72C2C',
              colorLink: '#1370DD',
              colorLinkHover: '#3689DD',
              colorLinkActive: '#0756BC',
              colorTextBase: '#E8E8E8',
              colorBorder: '#484848',
              colorTextDisabled: '#3D3D3D',
              ...props?.theme?.token
            },
            components: comp
          }
        }
        return {
          token: {
            colorPrimary: '#127FFF',
            colorPrimaryHover: '#3B9DFF',
            colorPrimaryActive: '#0460D9',
            colorError: '#F53F3F',
            colorErrorHover: '#FC7373',
            colorErrorActive: '#CF3737',
            colorLink: '#127FFF',
            colorLinkHover: '#3B9DFF',
            colorLinkActive: '#0460D9',
            colorTextBase: '#1A1A1A',
            colorBorder: '#E0E0E0',
            colorErrorBg: '#FEE8E8',
            colorTextDisabled: '#D6D6D6',
            ...props?.theme?.token
          },
          components: comp
        }
      }}
    >
      {props.children}
    </ThemeProvider>
  )
}

export default AELFDProvider
