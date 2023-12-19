import { ButtonProps } from 'antd'
import type { TextAreaProps, PasswordProps } from 'antd/lib/input'

export type ButtonSizeType = 'mini' | 'small' | 'medium' | 'large' | 'ultra'
export interface IButtonProps extends Omit<ButtonProps, 'size' | 'onClick'> {
  size?: ButtonSizeType
  onClick?: React.MouseEventHandler<HTMLElement>
  millisecondOfThrottle?: number
}
