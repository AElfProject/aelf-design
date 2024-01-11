import { createStyles } from 'antd-style'
export default createStyles(({ token, css, prefixCls }) => {
  return {
    tablePaginationContainer: css`
      padding: 16px 0;
    `,
    TableContainer: css`
      .${prefixCls}-table-wrapper
        .${prefixCls}-table-container
        table
        > thead
        > tr:first-child
        > *:first-child {
        border-bottom-left-radius: ${token.customTable?.headerBorderRadius}px;
        border-start-start-radius: ${token.customTable?.headerBorderRadius}px;
      }
      .${prefixCls}-table-wrapper
        .${prefixCls}-table-container
        table
        > thead
        > tr:first-child
        > *:last-child {
        border-bottom-right-radius: ${token.customTable?.headerBorderRadius}px;
        border-start-end-radius: ${token.customTable?.headerBorderRadius}px;
      }
    `
  }
})
