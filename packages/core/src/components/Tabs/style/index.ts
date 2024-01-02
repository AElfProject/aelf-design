import { createStyles } from 'antd-style'

const useStyles = createStyles(({ css, prefixCls }) => {
  return {
    tabslWrap: css`
      .${prefixCls}-tabs-tab-icon {
        margin-right: 8px !important;
        margin-inline-end: 8px !important;
      }
    `
  }
})

export default useStyles
