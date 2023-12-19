import { DropdownProps } from 'antd'

export type DropdownSizeType = 'small' | 'medium' | 'default' | 'large'
export interface IDropdownProps
  extends Omit<DropdownProps, 'overlayClassName'> {
  overlayClassName?: string
  size?: DropdownSizeType
  offsetX?: number
  offsetY?: number
}
