import { createStyles } from 'antd-style'

const useStyles = createStyles(({ token, css, prefixCls }) => {
  return {
    modalWrap: css`
      /* display: flex; */

      .${prefixCls}-modal-close:hover {
        path {
          fill: ${token?.colorPrimaryHover} !important;
        }
      }
      .${prefixCls}-modal-close:hover {
        path {
          fill: ${token?.colorPrimaryActive} !important;
        }
      }
      .${prefixCls}-modal-close {
        top: 26px;
      }
      .${prefixCls}-modal-header {
        padding-right: 16px;
      }
    `
  }
})

export default useStyles
