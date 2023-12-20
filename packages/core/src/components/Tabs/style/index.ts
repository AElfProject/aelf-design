import { createStyles } from 'antd-style'

const useStyles = createStyles(({ css, prefixCls }) => {
  return {
    tabslWrap: css`
      .${prefixCls}-tabs .${prefixCls}-tabs-tab .anticon {
        margin-right: 8px;
      }
    `
  }
})

export default useStyles
