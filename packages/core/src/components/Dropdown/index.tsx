import { Dropdown as AntdDropdown } from 'antd'
import { IDropdownProps } from './Dropdown'
import useStyles from './style'

const Dropdown = ({
  children,
  size = 'default',
  offsetX = 0,
  offsetY = 0,
  ...props
}: IDropdownProps) => {
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
