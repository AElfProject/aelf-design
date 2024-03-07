import { createStyles } from 'antd-style';

import { InputSizeType } from '../index';

const useStyles = createStyles(({ css, token, prefixCls }, { size }: { size: InputSizeType }) => {
  return {
    aelfdInput: css`
      font-size: 16px;
      height: ${size === 'middle' ? '48px' : '40px'};
      & .${prefixCls}-input-clear-icon {
        line-height: 1;
      }
      & .${prefixCls}-input-prefix {
        margin-right: 8px;
      }
      & .${prefixCls}-input {
        line-height: 24px;
      }
      & .${prefixCls}-input-prefix {
        color: inherit !important;
        svg {
          color: ${token.colorTextDisabled};
        }
      }
      &.${prefixCls}-input-outlined.${prefixCls}-input-disabled {
        .${prefixCls}-input {
          cursor: not-allowed;
        }
      }
    `,
  };
});

export default useStyles;
