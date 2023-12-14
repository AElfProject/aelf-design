import { ButtonProps } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'

export type AelfdButtonSizeType =
  | 'mini'
  | 'small'
  | 'medium'
  | 'large'
  | 'ultra'
export interface AelfdButtonProps
  extends Omit<ButtonProps, 'size' | 'onClick'> {
  size?: AelfdButtonSizeType
  onClick?: React.MouseEventHandler<HTMLElement>
  millisecondOfThrottle?: number
}
