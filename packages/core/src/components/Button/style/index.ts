import { createStyles } from 'antd-style'
import { ButtonSizeType } from '../index'

const useStyles = createStyles(
  ({ css, prefixCls }, { size }: { size: ButtonSizeType }) => {
    const dynamicWidth =
      size === 'mini'
        ? '24px'
        : size === 'small'
        ? '32px'
        : size === 'medium'
        ? '40px'
        : size === 'large'
        ? '48px'
        : '56px'

    return {
      buttonWrap: css`
        display: flex;
        align-items: center;
        justify-content: center;
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
          ? '4px'
          : size === 'small'
          ? '4px'
          : size === 'medium'
          ? '6px'
          : size === 'large'
          ? '6px'
          : '6px'};

        &.${prefixCls}-btn-circle {
          min-height: ${dynamicWidth};
          height: ${dynamicWidth};
          font-size: 14px;
        }
        &.${prefixCls}-btn-icon-only {
          min-width: auto;
          width: ${dynamicWidth};
        }
      `
    }
  }
)

export default useStyles
