import { InputProps } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'
import { ReactNode } from 'react'

export type InputSizeType = 'small' | 'middle'

// export interface IInputProps
//   extends Omit<
//     React.ComponentProps<typeof Input>,
//     | keyof Omit<
//         InputHTMLAttributes<HTMLInputElement>,
//         | 'maxLength'
//         | 'onChange'
//         | 'defaultValue'
//         | 'id'
//         | 'disabled'
//         | 'prefix'
//         | 'type'
//         | 'value'
//       >
//     | 'ref'
//     | 'key'
//     | 'rootClassName'
//     | 'htmlSize'
//     | 'prefixCls'
//     | 'allowClear'
//   > {
//   size?: InputSizeType
//   onClear?: React.MouseEventHandler<HTMLElement>
//   count?: CountConfig
// }

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
