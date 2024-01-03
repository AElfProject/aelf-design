import { Input as AntdInput, InputProps } from 'antd'
import CircleClose from 'assets/circle-close.svg?react'
import EyeTwoTone from 'assets/eye.svg?react'
import EyeInvisibleOutlined from 'assets/eye-invisible.svg?react'
import useStyles from './style'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'
import { ReactNode } from 'react'

export type InputSizeType = 'small' | 'middle'

export interface IInputProps
  extends Omit<InputProps, 'size' | 'onClear' | 'allowClear'> {
  size?: InputSizeType
  onClear?: React.MouseEventHandler<HTMLElement>
  count?: CountConfig
}

export type InputPasswordProps = Omit<PasswordProps, 'size' | 'allowClear'> &
  IInputProps

export type InputTextAreaProps = Omit<TextAreaProps, 'size' | 'allowClear'> &
  IInputProps

export interface CountConfig {
  max?: number
  strategy?: (value: string) => number
  show?:
    | boolean
    | ((args: {
        value: string
        count: number
        maxLength?: number
      }) => ReactNode)
  exceedFormatter?: (value: string, config: { max: number }) => string
}

const getClearIcon = (
  onClear?: React.MouseEventHandler<HTMLElement> | undefined
) => {
  return (
    <div
      onClick={(e) => {
        onClear && onClear(e)
      }}
    >
      <CircleClose
        color="#E0E0E0"
        data-hoverColor="#F0F0F0"
        data-activeColor="#D6D6D6"
        width="16px"
        height="16px"
      />
    </div>
  )
}

function Input({ size = 'middle', className, onClear, ...rest }: IInputProps) {
  const { styles: st } = useStyles({ size })
  return (
    <AntdInput
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: getClearIcon(onClear)
      }}
    />
  )
}

function InputPassword({
  size = 'middle',
  className,
  ...rest
}: InputPasswordProps) {
  const { styles: st } = useStyles({ size })
  return (
    <AntdInput.Password
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
    ></AntdInput.Password>
  )
}

function InputTextArea({
  size = 'middle',
  className,
  ...rest
}: InputTextAreaProps) {
  const { styles: st } = useStyles({ size })
  return (
    <AntdInput.TextArea
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
    ></AntdInput.TextArea>
  )
}

Input.Password = InputPassword
Input.TextArea = InputTextArea

export default Input
