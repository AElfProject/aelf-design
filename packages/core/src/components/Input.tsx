import { forwardRef } from 'react'
import { Input, InputProps } from 'antd'
import { createStyles } from 'antd-style'
import CircleClose from '../assets/circle-close.svg?react'

type AelfdInputSizeType = 'small' | 'middle'
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

export interface AelfdInputProps
  extends Omit<InputProps, 'size' | 'allowClear'> {
  size?: AelfdInputSizeType
}

const AelfdInput = ({
  size = 'middle',
  className,
  ...rest
}: AelfdInputProps) => {
  const { styles: st } = useStyles({ size })
  return (
    <Input
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: (
          <CircleClose
            color="#E0E0E0"
            data-hoverColor="#F0F0F0"
            data-activeColor="#D6D6D6"
            width="16px"
            height="16px"
          />
        )
      }}
    />
  )
}

export default forwardRef(AelfdInput)
