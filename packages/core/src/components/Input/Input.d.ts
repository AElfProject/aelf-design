import { InputProps } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'
import { InputHTMLAttributes } from 'react'

export type AelfdInputSizeType = 'small' | 'middle'

export interface AelfdInputProps
  extends Omit<InputProps, keyof InputHTMLAttributes<HTMLInputElement>> {
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
