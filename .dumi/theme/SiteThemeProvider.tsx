import React, { useEffect } from 'react';
import { AELFDProvider } from 'aelf-design';
import { theme as antdTheme, type ThemeConfig } from 'antd';
import { ThemeProvider, useTheme, type ThemeProviderProps } from 'antd-style';

interface NewToken {
  bannerHeight: number;
  headerHeight: number;
  anchorTop: number;
}

// 通过给 antd-style 扩展 CustomToken 对象类型定义，可以为 useTheme 中增加相应的 token 对象
declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends NewToken {}
}

const headerHeight = 64;
const bannerHeight = 38;

const SiteThemeProvider: React.FC<ThemeProviderProps<any>> = ({
  children,
  appearance = 'light',
  ...rest
}) => {
  return (
    <AELFDProvider
      prefixCls="aelf-design-doc"
      appearance={appearance}
      customToken={{
        customAddress: {
          primaryLinkColor: appearance == 'dark' ? '#c713af' : '#266cd3',
          primaryIconColor: appearance == 'dark' ? '#ea1818' : '#7f7777',
          addressHoverColor: appearance == 'dark' ? '#38b117' : '#149434',
          addressActiveColor: appearance == 'dark' ? '#0756BC' : '#0460D9',
        },
      }}
      theme={{
        token: {
          colorPrimary: appearance == 'dark' ? '#1370DD' : '#764DF1',
          colorPrimaryHover: appearance == 'dark' ? '#3689DD' : '#7F58F5',
          colorPrimaryActive: appearance == 'dark' ? '#0756BC' : '#6F45EF',
          colorTextDisabled: appearance == 'dark' ? '#96C4FB' : '#ACD2FF',
        },
      }}
    >
      {children}
    </AELFDProvider>
  );
};

export default SiteThemeProvider;
