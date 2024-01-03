import { createStyles } from 'antd-style'

const useStyles = createStyles(({ css, token, prefixCls }) => {
  const { Collapse: collapseTokens } = token
  const { headerClickBg = '', headerHoverBg = '' } = collapseTokens
  return {
    aelfdCollapse: css`
      overflow: hidden;
      .${prefixCls}-collapse-header-text {
        line-height: 24px;
      }
      .${prefixCls}-collapse-content-box {
        line-height: 22px;
      }
      .${prefixCls}-collapse-header {
        &:hover {
          background-color: ${headerHoverBg};
        }
        &:active {
          color: #127fff;
          background-color: ${headerClickBg};
        }
      }
      svg {
        transition-duration: 300ms;
      }
    `,
    collapseIcon: css`
      transform: rotate(180deg);
    `
  }
})

export default useStyles
