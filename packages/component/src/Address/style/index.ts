import { createStyles } from 'antd-style';

import { AddressSize } from '../index';

const useStyles = createStyles(
  (
    { token, css },
    {
      size,
      ignoreEvent,
      primaryLinkColor,
      primaryIconColor,
      addressHoverColor,
      addressActiveColor,
    }: {
      size: AddressSize;
      ignoreEvent: boolean;
      primaryLinkColor?: string;
      primaryIconColor?: string;
      addressHoverColor?: string;
      addressActiveColor?: string;
    },
  ) => {
    return {
      addressWrap: css`
        font-weight: 500;
        display: flex;
        align-items: flex-start;
        cursor: ${ignoreEvent ? 'default' : 'pointer'};
      `,
      addressText: css`
        font-size: ${size === 'small'
          ? '12px'
          : size === 'default'
            ? '14px'
            : size === 'large'
              ? '16px'
              : '20px'};
        line-height: ${size === 'small'
          ? '20px'
          : size === 'default'
            ? '22px'
            : size === 'large'
              ? '24px'
              : '28px'};
        color: ${primaryLinkColor || token.customAddress?.primaryLinkColor};
        word-break: break-all;
        /* flex: 1; */
        &:hover {
          color: ${addressHoverColor || token.customAddress?.addressHoverColor};
        }
        &:active {
          color: ${addressActiveColor || token.customAddress?.addressActiveColor};
        }
      `,
      copyBtnWrap: css`
        height: ${size === 'small'
          ? '20px'
          : size === 'default'
            ? '22px'
            : size === 'large'
              ? '24px'
              : '28px'};
        font-size: ${size === 'small'
          ? '12px'
          : size === 'default'
            ? '14px'
            : size === 'large'
              ? '16px'
              : '20px'};
        display: flex;
        flex-shrink: 0;
        margin-left: ${size === 'small' ? '4px' : '8px'};
        align-items: center;
        cursor: pointer;
      `,
      copyBtn: css`
        path {
          fill: ${primaryIconColor || token.customAddress?.primaryIconColor};
        }
        &:hover {
          path {
            fill: ${addressHoverColor || token.customAddress?.addressHoverColor};
          }
        }
        &:active {
          path {
            fill: ${addressActiveColor || token.customAddress?.addressActiveColor};
          }
        }
      `,
    };
  },
);

export default useStyles;
