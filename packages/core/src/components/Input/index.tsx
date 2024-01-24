import { Input as AntdInput, InputProps } from 'antd'
import CircleClose from 'assets/circle-close.svg?react'
import EyeTwoTone from 'assets/eye.svg?react'
import EyeInvisibleOutlined from 'assets/eye-invisible.svg?react'
import useStyles from './style'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'
import { ReactNode } from 'react'
import { Theme, useTheme } from 'antd-style'
import { OverrideToken } from 'antd/es/theme/interface'

export type InputSizeType = 'small' | 'middle'

export interface IInputProps extends Omit<InputProps, 'size' | 'onClear'> {
  size?: InputSizeType
  onClear?: React.MouseEventHandler<HTMLElement>
  count?: CountConfig
}

export type InputPasswordProps = Omit<PasswordProps, 'size'> & IInputProps

export type InputTextAreaProps = Omit<TextAreaProps, 'size'> & IInputProps

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
  onClear?: React.MouseEventHandler<HTMLElement> | undefined,
  token?: Theme & OverrideToken
) => {
  return (
    <div
      onClick={(e) => {
        onClear && onClear(e)
      }}
    >
      <CircleClose
        color={token?.colorBorder}
        data-hovercolor={token?.Table?.headerBg}
        data-activecolor={token?.colorTextDisabled}
        width="16px"
        height="16px"
      />
    </div>
  )
}

function Input({
  size = 'middle',
  className,
  onClear,
  allowClear,
  ...rest
}: IInputProps) {
  const { styles: st } = useStyles({ size })
  const token = useTheme()

  return (
    <AntdInput
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={
        allowClear
          ? allowClear
          : {
              clearIcon: getClearIcon(onClear, token)
            }
      }
    />
  )
}

function InputPassword({
  size = 'middle',
  className,
  ...rest
}: InputPasswordProps) {
  const { styles: st } = useStyles({ size })
  const token = useTheme()
  const iconProps = {
    'data-twotonecolor': [token?.colorBorder, token?.colorBorder],
    'data-hovertwotonecolor': [
      token?.colorPrimaryHover,
      token?.colorPrimaryHover
    ],
    'data-activetwotonecolor': [
      token?.colorPrimaryActive,
      token?.colorPrimaryActive
    ],
    width: '16px',
    height: '16px'
  }
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
          <EyeTwoTone {...iconProps} />
        ) : (
          <EyeInvisibleOutlined {...iconProps} />
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
