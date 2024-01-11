import { createStyles } from 'antd-style'

export default createStyles(({ css, prefixCls }) => {
  return {
    customTooltip: css`
      .${prefixCls}-tooltip-inner {
        padding: 4px 8px;
      }
      .${prefixCls}-tooltip-arrow::after {
        box-shadow: none;
        width: 11.313708498984761px;
        height: 11.313708498984761px;
      }
      .${prefixCls}-tooltip-arrow::before {
        clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
      }
    `
  }
})
