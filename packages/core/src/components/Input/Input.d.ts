import { InputProps } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'

export type AelfdInputSizeType = 'small' | 'middle'

export interface AelfdInputProps
  extends Omit<InputProps, 'size' | 'allowClear'> {
  size?: AelfdInputSizeType
  onClear?: React.MouseEventHandler<HTMLElement>
}

export type AelfdInputPasswordProps = Omit<
  PasswordProps,
  'size' | 'allowClear'
> &
  AelfdInputProps

export type AelfdInputTextAreaProps = Omit<
  TextAreaProps,
  'size' | 'allowClear'
> &
  AelfdInputProps
