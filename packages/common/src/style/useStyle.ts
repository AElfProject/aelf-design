import type React from 'react';
import { useContext } from 'react';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import { useStyleRegister } from '@ant-design/cssinjs';
import { ConfigProvider as AntdConfigProvider, theme as AntTheme } from 'antd';
import type { GlobalToken } from 'antd';

const { useToken } = AntTheme;

export type GenerateStyle<
  ComponentToken extends object = GlobalToken,
  ReturnType = CSSInterpolation,
> = (token: ComponentToken, ...rest: any[]) => ReturnType;

export type UseStyleResult = {
  wrapSSR: (node: React.ReactElement) => React.ReactElement;
  hashId: string;
};

export type Web3AliasToken = GlobalToken & {
  /**
   * classname for web3 compoennts
   * @type {string}
   * @example .ant-pro
   */
  web3ComponentsCls: string;
  /**
   * antd 的 className
   * @type {string}
   * @example .ant
   */
  antCls: string;
};

/**
 * useStyle for css in js
 * @param componentName {string}
 * @param styleFn {GenerateStyle}
 * @returns UseStyleResult
 */
export function useStyle(
  componentName: string,
  styleFn: (token: Web3AliasToken) => CSSInterpolation,
  path?: string[],
) {
  const { theme, token, hashId } = useToken();
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const web3Token = {
    ...token,
    web3ComponentsCls: `.${getPrefixCls('web3')}`,
    antCls: `.${getPrefixCls()}`,
  };

  return {
    wrapSSR: useStyleRegister(
      {
        theme,
        token: web3Token,
        hashId: `${hashId}`,
        path: [componentName, ...(path ?? [])],
      },
      () => styleFn(web3Token as Web3AliasToken),
    ),
    hashId,
  };
}
