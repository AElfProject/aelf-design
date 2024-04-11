import { createStyles } from 'antd-style';

export default createStyles(({ css, prefixCls }) => {
  return {
    [`${prefixCls}-aelfd-switch`]: css`
      .${prefixCls}-switch-inner
        .${prefixCls}-switch-inner-checked,
        .${prefixCls}-switch-inner
        .${prefixCls}-switch-inner-unchecked {
        display: flex;
        align-items: center;
        height: 100%;
      }
    `,
  };
});
