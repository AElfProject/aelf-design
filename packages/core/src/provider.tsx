import { ThemeProvider, ThemeProviderProps } from 'antd-style'

const AELFDProvider = <T, S>(props: ThemeProviderProps<T, S>) => {
  return (
    <ThemeProvider
      theme={(appearance) => {
        const comp = {
          Input: {
            paddingBlock: 11,
            paddingBlockSM: 7,
            paddingInline: 11,
            paddingInlineSM: 7,
            addonBg: appearance === 'dark' ? '#141414' : '#F8F8F8',
            ...props?.theme?.components?.Input
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
            ...props?.theme?.token
          },
          components: comp
        }
      }}
      {...props}
    >
      {props.children}
    </ThemeProvider>
  )
}

export default AELFDProvider
