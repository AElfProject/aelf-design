import { createStyles } from 'antd-style';

import { ButtonSizeType } from '../index';

const useStyles = createStyles(({ css, prefixCls, token }, { size }: { size: ButtonSizeType }) => {
  const dynamicWidth =
    size === 'mini'
      ? '24px'
      : size === 'small'
        ? '32px'
        : size === 'medium'
          ? '40px'
          : size === 'large'
            ? '48px'
            : '56px';

  return {
    buttonWrap: css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      flex-shrink: 0;
      font-size: ${size === 'mini'
        ? '12px'
        : size === 'small'
          ? '12px'
          : size === 'medium'
            ? '14px'
            : size === 'large'
              ? '16px'
              : '16px'};
      padding: 0
        ${size === 'mini'
          ? '12px'
          : size === 'small'
            ? '16px'
            : size === 'medium'
              ? '20px'
              : size === 'large'
                ? '28px'
                : '32px'};
      height: ${dynamicWidth};
      min-width: ${size === 'mini'
        ? '40px'
        : size === 'small'
          ? '48px'
          : size === 'medium'
            ? '84px'
            : size === 'large'
              ? '92px'
              : '112px'};
      border-radius: ${size === 'mini'
        ? token.customButton?.borderRadiusDefault || '4px'
        : size === 'small'
          ? token.customButton?.borderRadiusDefault || '4px'
          : size === 'medium'
            ? token.customButton?.borderRadiusLarge || '6px'
            : size === 'large'
              ? token.customButton?.borderRadiusLarge || '6px'
              : token.customButton?.borderRadiusLarge || '6px'};

      &.${prefixCls}-btn-circle {
        min-height: ${dynamicWidth};
        height: ${dynamicWidth};
        font-size: 14px;
      }
      &.${prefixCls}-btn-icon-only {
        min-width: auto;
        width: ${dynamicWidth};
      }

      &:disabled {
        color: rgba(0, 0, 0, 0.25);
        border-width: 0;
      }
      &.${prefixCls}-btn-dashed:disabled {
        border-width: 1px;
      }
      &.${prefixCls}-btn-background-ghost:disabled {
        border-width: 1px;
        color: rgba(0, 0, 0, 0.25);
      }
      &.${prefixCls}-btn-dangerous:disabled {
        color: rgba(0, 0, 0, 0.25);
      }
    `,
  };
});

export default useStyles;
