import { Dropdown as AntdDropdown, DropdownProps } from 'antd'
import useStyles from './style'

export type DropdownSizeType = 'small' | 'medium' | 'default' | 'large'
export interface IDropdownProps
  extends Omit<DropdownProps, 'overlayClassName'> {
  overlayClassName?: string
  size?: DropdownSizeType
  offsetX?: number
  offsetY?: number
}

function Dropdown({
  children,
  size = 'default',
  offsetX = 0,
  offsetY = 0,
  ...props
}: IDropdownProps) {
  const { styles, cx } = useStyles({ size, offsetX, offsetY })
  return (
    <AntdDropdown
      overlayClassName={cx(styles.dropDownWrap, props.overlayClassName)}
      {...props}
    >
      {children}
    </AntdDropdown>
  )
}

export default Dropdown
