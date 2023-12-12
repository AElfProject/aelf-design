import { forwardRef } from 'react'
import { Input, InputProps, InputRef } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'
import { createStyles } from 'antd-style'
import CircleClose from '../assets/circle-close.svg?react'
import EyeTwoTone from '../assets/eye.svg?react'
import EyeInvisibleOutlined from '../assets/eye-invisible.svg?react'

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

const getClearIcon = () => {
  return (
    <CircleClose
      color="#E0E0E0"
      data-hoverColor="#F0F0F0"
      data-activeColor="#D6D6D6"
      width="16px"
      height="16px"
    />
  )
}

export interface AelfdInputProps
  extends Omit<InputProps, 'size' | 'allowClear'> {
  size?: AelfdInputSizeType
  className?: string
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
        clearIcon: getClearIcon()
      }}
    />
  )
}

export type AelfdInputPasswordProps = Omit<
  PasswordProps,
  'size' | 'allowClear'
> &
  AelfdInputProps

const AelfInputPassword = ({
  size = 'middle',
  className,
  ...rest
}: AelfdInputPasswordProps) => {
  const { styles: st } = useStyles({ size })
  return (
    <Input.Password
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: getClearIcon()
      }}
      iconRender={(visible) =>
        visible ? (
          <EyeTwoTone
            data-twoToneColor={['#E0E0E0', '#E0E0E0']}
            data-hoverTwoToneColor={['#3B9DFF', '#3B9DFF']}
            data-activeTwoToneColor={['#127FFF', '#127FFF']}
            width="16px"
            height="16px"
          />
        ) : (
          <EyeInvisibleOutlined
            data-twoToneColor={['#E0E0E0', '#E0E0E0']}
            data-hoverTwoToneColor={['#3B9DFF', '#3B9DFF']}
            data-activeTwoToneColor={['#127FFF', '#127FFF']}
            width="16px"
            height="16px"
          />
        )
      }
    ></Input.Password>
  )
}
AelfdInput.Password = AelfInputPassword

type AelfdInputTextAreaProps = Omit<TextAreaProps, 'size' | 'allowClear'> &
  AelfdInputProps

const AelfInputTextArea = ({
  size = 'middle',
  className,
  ...rest
}: AelfdInputTextAreaProps) => {
  const { styles: st } = useStyles({ size })
  return (
    <Input.TextArea
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: getClearIcon()
      }}
    ></Input.TextArea>
  )
}

AelfdInput.TextArea = AelfInputTextArea

export default AelfdInput
