import { Input } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'
import { InputHTMLAttributes, ReactNode } from 'react'

export type AelfdInputSizeType = 'small' | 'middle'

export interface AelfdInputProps
  extends Omit<
    React.ComponentProps<typeof Input>,
    | keyof Omit<
        InputHTMLAttributes<HTMLInputElement>,
        | 'maxLength'
        | 'onChange'
        | 'defaultValue'
        | 'id'
        | 'disabled'
        | 'prefix'
        | 'type'
        | 'value'
      >
    | 'ref'
    | 'key'
    | 'rootClassName'
    | 'htmlSize'
    | 'prefixCls'
    | 'allowClear'
  > {
  size?: AelfdInputSizeType
  onClear?: React.MouseEventHandler<HTMLElement>
  count?: CountConfig
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
