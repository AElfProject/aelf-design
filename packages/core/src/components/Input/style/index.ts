import { createStyles } from 'antd-style'
import { AelfdInputSizeType } from '../Input'

const useStyles = createStyles(
  ({ css }, { size }: { size: AelfdInputSizeType }) => {
    return {
      aelfdInput: css`
        font-size: 16px;
        height: ${size === 'middle' ? '48px' : '40px'};
        & .ant-input-clear-icon {
          line-height: 1;
        }
        & .ant-input-prefix {
          margin-right: 8px;
        }
      `
    }
  }
)

export default useStyles
