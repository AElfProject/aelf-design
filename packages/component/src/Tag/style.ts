import { createStyles } from 'antd-style';

export default createStyles(({ css, prefixCls }) => {
  return {
    [`${prefixCls}-aelfd-tag`]: css`
      padding-inline: 8px;

      &.${prefixCls}-tag > .icon + span,
      &.${prefixCls}-tag > span + .icon {
        margin-inline-start: 4px;
      }
    `,
  };
});
