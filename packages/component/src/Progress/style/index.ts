import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, prefixCls }) => {
  return {
    progressWrap: css`
      display: flex;
      align-items: center;
      &.${prefixCls}-progress-line {
        margin-inline-end: 0;
        margin-bottom: 0;
      }
      &.${prefixCls}-progress {
        line-height: 1;
      }
      &.${prefixCls}-progress .${prefixCls}-progress-outer {
        display: flex;
      }
    `,
  };
});

export default useStyles;
