import { ThemeConfig } from 'antd'
import { ThemeAppearance, ThemeProvider, ThemeProviderProps } from 'antd-style'

export interface IAelfdThemeProviderProps
  extends Omit<ThemeProviderProps<IAelfdCustomToken>, 'theme' | 'customToken'> {
  theme?: ThemeConfig
  customToken?: IAelfdCustomToken
}

export interface IAelfdCustomToken {
  customPagination?: {
    colorTextSecondary: string
    colorBgHover: string
    colorDownArrow: string
  }
  customTable?: {
    headerBorderRadius: number
  }
  customCollapse?: {
    headerHoverBg: string
    headerClickBg: string
  }
  customAddress?: {
    primaryLinkColor: string
    primaryIconColor: string
    addressHoverColor: string
    addressActiveColor: string
  }
  customUpload: {
    borderColor: string
    containerBg: string
    colorMessageText: string
  }
}

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends IAelfdCustomToken {}
}

const AELFDProvider = (props: IAelfdThemeProviderProps) => {
  return (
    <ThemeProvider<IAelfdCustomToken>
      prefixCls="aelfd"
      {...props}
      customToken={({ isDarkMode }) => {
        return {
          customCollapse: {
            headerHoverBg: isDarkMode ? '#212121' : '#f8f8f8',
            headerClickBg: isDarkMode ? '#212121' : '#f8f8f8',
            ...props.customToken?.customCollapse
          },
          customTable: {
            headerBorderRadius: 6,
            ...props.customToken?.customTable
          },
          customPagination: {
            colorTextSecondary: isDarkMode ? '#8C8C8C' : '#808080',
            colorBgHover: isDarkMode ? '#212121' : '#F8F8F8',
            colorDownArrow: isDarkMode ? '#FFFFFF' : '#101114',
            ...props.customToken?.customPagination
          },
          customAddress: {
            primaryLinkColor: isDarkMode ? '#127FFF' : '#1370DD',
            primaryIconColor: isDarkMode ? '#484848' : '#E0E0E0',
            addressHoverColor: isDarkMode ? '#3689DD' : '#3B9DFF',
            addressActiveColor: isDarkMode ? '#0756BC' : '#0460D9',
            ...props.customToken?.customAddress
          },
          customUpload: {
            borderColor: isDarkMode ? '#484848' : '#E0E0E0',
            containerBg: isDarkMode ? '#212121' : '#F8F8F8',
            colorMessageText: isDarkMode ? '#8C8C8C' : '#808080',
            ...props.customToken?.customUpload
          }
        }
      }}
      theme={(appearance: ThemeAppearance) => {
        const comp = {
          Button: {
            colorPrimary: appearance === 'dark' ? '#1370DD' : '#127FFF'
          },
          Input: {
            paddingBlock: 11,
            paddingBlockSM: 7,
            paddingInline: 11,
            paddingInlineSM: 7,
            addonBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
            ...props.theme?.components?.Input
          },
          Collapse: {
            headerBg: appearance === 'dark' ? '#1A1A1A' : '#fff',
            contentPadding: '16px 24px',
            headerPadding: '16px 24px',
            ...props?.theme?.components?.Collapse
          },
          Dropdown: {
            controlItemBgActiveHover:
              appearance === 'dark' ? '#212121' : '#F8F8F8',
            ...props?.theme?.components?.Dropdown
          },
          Table: {
            headerBg: appearance === 'dark' ? '#353535' : '#F0F0F0',
            rowHoverBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
            headerColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
            fontWeightStrong: 500,
            ...props?.theme?.components?.Table
          },
          Modal: {
            paddingMD: 24,
            paddingContentHorizontalLG: 24,
            fontWeightStrong: 500,
            titleFontSize: 20,
            titleLineHeight: 1.4,
            ...props?.theme?.components?.Modal
          },
          Tooltip: {
            colorBgSpotlight: appearance === 'dark' ? '#282828' : '#FFF',
            colorTextLightSolid: appearance === 'dark' ? '#8C8C8C' : '#808080',
            colorText: appearance === 'dark' ? '#8C8C8C' : '#808080',
            borderRadius: 8,
            fontSize: 12,
            lineHeight: 1.66666666666667,
            boxShadowSecondary: '0px 0px 16px 0px rgba(0, 0, 0, 0.16)',
            ...props?.theme?.components?.Tooltip
          },
          Tabs: {
            horizontalItemPadding: '17px 16px',
            horizontalItemPaddingSM: '13px 10px',
            ...props?.theme?.components?.Tabs
          },
          Radio: {
            buttonBg: appearance === 'dark' ? '#1A1A1A' : '#FFF',
            ...props?.theme?.components?.Radio
          },
          Progress: {
            remainingColor: appearance === 'dark' ? '#282828' : '#F5F5F5',
            colorSuccess: appearance === 'dark' ? '#1370DD' : '#127FFF',
            defaultColor: appearance === 'dark' ? '#1370DD' : '#127FFF',
            ...props?.theme?.components?.Progress
          },
          DatePicker: {
            cellWidth: 44,
            cellHeight: 24,
            ...props?.theme?.components?.DatePicker
          }
        }
        const baseToken = {
          screenXXLMin: 1441,
          screenXLMax: 1440,
          screenLGMax: 1024,
          screenMDMax: 768,
          screenSMMax: 640
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
              colorPrimaryBorder: '#484848',
              colorErrorBg: '#361F1F',
              colorTextDisabled: '#3D3D3D',
              controlItemBgActive: 'transparent',
              controlItemBgHover: '#212121',
              colorBgContainer: '#1A1A1A',
              colorBgElevated: '#282828',
              boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
              colorBgMask: 'rgba(0, 0, 0, 0.6)',
              ...baseToken,
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
            colorPrimaryBorder: '#E0E0E0',
            colorErrorBg: '#FEE8E8',
            colorTextDisabled: '#D6D6D6',
            controlItemBgActive: 'transparent',
            controlItemBgHover: '#F8F8F8',
            colorBgContainer: '#FFFFFF',
            colorBgElevated: '#FFFFFF',
            boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
            colorBgMask: 'rgba(0, 0, 0, 0.6)',
            ...baseToken,
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
