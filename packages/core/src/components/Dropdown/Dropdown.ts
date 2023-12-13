import { DropdownProps } from 'antd'

export type AelfdDropdownSizeType = 'small' | 'medium' | 'default' | 'large'
export interface AelfdDropdownProps
  extends Omit<DropdownProps, 'overlayClassName'> {
  overlayClassName?: string
  size?: AelfdDropdownSizeType
  offsetX?: number
  offsetY?: number
}
