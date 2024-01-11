import { createStyles } from 'antd-style'

const useStyles = createStyles(({ token, css }) => {
  return {
    addressWrap: css`
      display: flex;
      align-items: center;
      cursor: pointer;
    `,
    addressText: css`
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
    copyBtn: css`
      margin-left: 4px;
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
})

export default useStyles
