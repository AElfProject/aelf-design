import { createStyles } from 'antd-style'
import { AddressSize } from '../index'

const useStyles = createStyles(
  (
    { token, css },
    { size, ignoreEvent }: { size: AddressSize; ignoreEvent: boolean }
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
        color: ${token.customAddress?.primaryLinkColor};
        word-break: break-all;
        /* flex: 1; */
        &:hover {
          color: ${token.customAddress?.addressHoverColor};
        }
        &:active {
          color: ${token.customAddress?.addressActiveColor};
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
        display: flex;
        flex-shrink: 0;
        margin-left: ${size === 'small' ? '4px' : '8px'};
        align-items: center;
        cursor: pointer;
      `,
      copyBtn: css`
        width: ${size === 'small'
          ? '12px'
          : size === 'default'
          ? '16px'
          : size === 'large'
          ? '18px'
          : '20px'};
        height: ${size === 'small'
          ? '12px'
          : size === 'default'
          ? '16px'
          : size === 'large'
          ? '18px'
          : '20px'};
        path {
          fill: ${token.customAddress?.primaryIconColor};
        }
        &:hover {
          path {
            fill: ${token.customAddress?.addressHoverColor};
          }
        }
        &:active {
          path {
            fill: ${token.customAddress?.addressActiveColor};
          }
        }
      `
    }
  }
)

export default useStyles
