import React from 'react';
import { ThemeConfig } from 'antd';
import { ThemeAppearance, ThemeProvider, ThemeProviderProps } from 'antd-style';

export interface IAelfdThemeProviderProps
  extends Omit<ThemeProviderProps<IAelfdCustomToken>, 'theme' | 'customToken'> {
  theme?: ThemeConfig;
  customToken?: IAelfdCustomToken;
}

export interface IAelfdCustomToken {
  customButton?: {
    borderRadiusDefault?: string;
    borderRadiusLarge?: string;
  };
  customPagination?: {
    colorTextSecondary?: string;
    colorBgHover?: string;
    colorDownArrow?: string;
  };
  customTable?: {
    headerBorderRadius?: number;
  };
  customCollapse?: {
    headerHoverBg?: string;
    headerClickBg?: string;
  };
  customAddress?: {
    primaryLinkColor?: string;
    primaryIconColor?: string;
    addressHoverColor?: string;
    addressActiveColor?: string;
  };
  customUpload?: {
    borderColor?: string;
    containerBg?: string;
    colorFileText?: string;
    colorMessageText?: string;
  };
  customRichProgress?: {
    colorText?: string;
    colorTextSecondary?: string;
    progressLineColor?: string;
    progressLineErrorColor?: string;
    progressLineBg?: string;
  };
  customRadio?: {
    dotColor?: string;
  };
  customCarousel?: {
    colorNavigation?: string;
    colorNavigationHover?: string;
    colorNavigationActive?: string;
    colorMask?: string;
  };
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
          customButton: {
            ...props.customToken?.customButton,
          },
          customCollapse: {
            headerHoverBg: isDarkMode ? '#212121' : '#f8f8f8',
            headerClickBg: isDarkMode ? '#212121' : '#f8f8f8',
            ...props.customToken?.customCollapse,
          },
          customTable: {
            headerBorderRadius: 6,
            ...props.customToken?.customTable,
          },
          customPagination: {
            colorTextSecondary: isDarkMode ? '#8C8C8C' : '#808080',
            colorBgHover: isDarkMode ? '#212121' : '#F8F8F8',
            colorDownArrow: isDarkMode ? '#FFFFFF' : '#101114',
            ...props.customToken?.customPagination,
          },
          customAddress: {
            primaryLinkColor: isDarkMode ? '#127FFF' : '#1370DD',
            primaryIconColor: isDarkMode ? '#484848' : '#E0E0E0',
            addressHoverColor: isDarkMode ? '#3689DD' : '#3B9DFF',
            addressActiveColor: isDarkMode ? '#0756BC' : '#0460D9',
            ...props.customToken?.customAddress,
          },
          customUpload: {
            borderColor: isDarkMode ? '#484848' : '#E0E0E0',
            containerBg: isDarkMode ? '#212121' : '#F8F8F8',
            colorFileText: isDarkMode ? '#fff' : '#070A26',
            colorMessageText: isDarkMode ? '#8C8C8C' : '#808080',
            ...props.customToken?.customUpload,
          },
          customRichProgress: {
            colorText: isDarkMode ? '#e8e8e8' : '#1a1a1a',
            colorTextSecondary: isDarkMode ? '#808080' : '#8C8C8C',
            progressLineColor: isDarkMode ? '#1370DD' : '#127FFF',
            progressLineBg: isDarkMode ? '#353535' : '#F0f0f0',
            progressLineErrorColor: isDarkMode ? '#D43939' : '#F53F3F',
            ...props.customToken?.customRichProgress,
          },
          customRadio: {
            dotColor: isDarkMode ? '#d07171' : '#FFFFFF',
            ...props.customToken?.customRadio,
          },
          customCarousel: {
            colorNavigation: isDarkMode ? '#E8E8E8' : '#070A26',
            colorNavigationHover: isDarkMode ? '#fff' : '#22253E',
            colorNavigationActive: isDarkMode ? '#8C8C8C' : '#131631',
            colorMask: isDarkMode ? '#000000cc' : '#ffffffcc',
            ...props.customToken?.customCarousel,
          },
        };
      }}
      theme={(appearance: ThemeAppearance) => {
        const comp = {
          ...props.theme?.components,
          Button: {
            colorPrimary: appearance === 'dark' ? '#1370DD' : '#127FFF',
            ...props.theme?.components?.Button,
          },
          Input: {
            paddingBlock: 11,
            paddingBlockSM: 7,
            paddingInline: 11,
            paddingInlineSM: 7,
            addonBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
            ...props.theme?.components?.Input,
          },
          Collapse: {
            headerBg: appearance === 'dark' ? '#1A1A1A' : '#fff',
            contentPadding: '16px 24px',
            headerPadding: '16px 24px',
            ...props?.theme?.components?.Collapse,
          },
          Dropdown: {
            controlItemBgActiveHover: appearance === 'dark' ? '#212121' : '#F8F8F8',
            ...props?.theme?.components?.Dropdown,
          },
          Table: {
            headerBg: appearance === 'dark' ? '#353535' : '#F0F0F0',
            rowHoverBg: appearance === 'dark' ? '#212121' : '#F8F8F8',
            headerColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
            fontWeightStrong: 500,
            ...props?.theme?.components?.Table,
          },
          Modal: {
            paddingMD: 24,
            paddingContentHorizontalLG: 24,
            fontWeightStrong: 500,
            titleFontSize: 20,
            titleLineHeight: 1.4,
            ...props?.theme?.components?.Modal,
          },
          Tooltip: {
            colorBgSpotlight: appearance === 'dark' ? '#FFF' : '#282828',
            colorTextLightSolid: appearance === 'dark' ? '#808080' : '#8C8C8C',
            colorText: appearance === 'dark' ? '#808080' : '#8C8C8C',
            borderRadius: 8,
            fontSize: 12,
            lineHeight: 1.66666666666667,
            boxShadowSecondary: '0px 0px 16px 0px rgba(0, 0, 0, 0.16)',
            ...props?.theme?.components?.Tooltip,
          },
          Tabs: {
            horizontalItemPadding: '17px 16px',
            horizontalItemPaddingSM: '13px 10px',
            ...props?.theme?.components?.Tabs,
          },
          Radio: {
            dotSize: 8,
            ...props?.theme?.components?.Radio,
          },
          Progress: {
            remainingColor: appearance === 'dark' ? '#282828' : '#F5F5F5',
            colorSuccess: appearance === 'dark' ? '#1370DD' : '#127FFF',
            defaultColor: appearance === 'dark' ? '#1370DD' : '#127FFF',
            ...props?.theme?.components?.Progress,
          },
          DatePicker: {
            cellWidth: 44,
            cellHeight: 24,
            ...props?.theme?.components?.DatePicker,
          },
          Tag: {
            defaultBg: appearance === 'dark' ? '#1370DD' : '#127FFF',
            defaultColor: appearance === 'dark' ? '#1A1A1A' : '#ffffff',
            ...props?.theme?.components?.Tag,
          },
          Alert: {
            defaultPadding: '9px 12px',
            withDescriptionPadding: '24px 24px',
            colorIcon: appearance === 'dark' ? '#FFFFFF' : '#101114',
            colorError: appearance === 'dark' ? '#D43939' : '#F53F3F',
            colorErrorBg: appearance === 'dark' ? '#361F1F' : '#FEE8E8',
            colorErrorBorder: appearance === 'dark' ? '#952626' : '#FFBFBF',
            colorInfo: appearance === 'dark' ? '#1370DD' : '#127FFF',
            colorInfoBg: appearance === 'dark' ? '#192737' : '#E2F0FF',
            colorInfoBorder: appearance === 'dark' ? '#0A4D9C' : '#ACD2FF',
            colorSuccess: appearance === 'dark' ? '#04A039' : '#00B73E',
            colorSuccessBg: appearance === 'dark' ? '#172E1F' : '#E6F8EC',
            colorSuccessBorder: appearance === 'dark' ? '#007026' : '#96E2B0',
            colorWarning: appearance === 'dark' ? '#DD8604' : '#FF9900',
            colorWarningBg: appearance === 'dark' ? '#372A17' : '#FFF3E0',
            colorWarningBorder: appearance === 'dark' ? '#9C5D00' : '#FFD596',
            ...props?.theme?.components?.Alert,
          },
          Breadcrumb: {
            itemColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
            lastItemColor: appearance === 'dark' ? '#FFFFFF' : '#1A1A1A',
            linkColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
            linkHoverColor: appearance === 'dark' ? '#FFFFFF' : '#1A1A1A',
            separatorColor: appearance === 'dark' ? '#8C8C8C' : '#808080',
            ...props?.theme?.components?.Breadcrumb,
          },
          Slider: {
            handleLineWidth: 1,
            handleLineWidthHover: 2,
            handleSize: 10, // 1 + 10 + 1 = 12
            handleSizeHover: 12, // 2 + 12 + 2 = 16
            ...props?.theme?.components?.Slider,
          },
        };
        const baseToken = {
          screenXXLMin: 1441,
          screenXLMax: 1440,
          screenLGMax: 1024,
          screenLGMin: 769,
          screenLG: 769,
          screenMDMax: 768,
          screenMDMin: 641,
          screenMD: 641,
          screenSMMax: 640,
          fontFamily: 'RobotoRegular,sans-serif',
        };
        if (appearance === 'dark') {
          return {
            token: {
              colorPrimary: '#1370DD',
              colorPrimaryHover: '#3689DD',
              colorPrimaryActive: '#0756BC',
              colorError: '#D43939',
              colorErrorHover: '#E86262',
              colorErrorActive: '#B72C2C',
              colorErrorBorder: '#952626',
              colorInfo: '#1370DD',
              colorInfoBg: '#192737',
              colorInfoBorder: '#0A4D9C',
              colorSuccess: '#04A039',
              colorSuccessBg: '#172E1F',
              colorSuccessBorder: '#007026',
              colorWarning: '#DD8604',
              colorWarningBg: '#372A17',
              colorWarningBorder: '#9C5D00',
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
              ...props?.theme?.token,
            },
            components: comp,
          };
        }
        return {
          token: {
            colorPrimary: '#127FFF',
            colorPrimaryHover: '#3B9DFF',
            colorPrimaryActive: '#0460D9',
            colorError: '#F53F3F',
            colorErrorHover: '#FC7373',
            colorErrorActive: '#CF3737',
            colorErrorBorder: '#FBB0B0',
            colorInfo: '#127FFF',
            colorInfoBg: '#E7F2FF',
            colorInfoBorder: '#9DCBFF',
            colorSuccess: '#00B73E',
            colorSuccessBg: '#E6F8EC',
            colorSuccessBorder: '#96E2B0',
            colorWarning: '#FF9900',
            colorWarningBg: '#FFF5E6',
            colorWarningBorder: '#FFD596',
            colorLink: '#127FFF',
            colorLinkHover: '#3B9DFF',
            colorLinkActive: '#0460D9',
            colorTextBase: '#1A1A1A',
            colorBorder: '#E0E0E0',
            colorErrorBg: '#FEE8E8',
            colorTextDisabled: '#010101',
            controlItemBgActive: 'transparent',
            controlItemBgHover: '#F8F8F8',
            colorBgContainer: '#FFFFFF',
            colorBgElevated: '#FFFFFF',
            boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.16)',
            colorBgMask: 'rgba(0, 0, 0, 0.6)',
            ...baseToken,
            ...props?.theme?.token,
          },
          components: comp,
        };
      }}
    >
      {props.children}
    </ThemeProvider>
  );
};

export default AELFDProvider;
