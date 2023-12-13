import { Dropdown } from 'antd'
import { AelfdDropdownProps } from './Dropdown'
import useStyles from './style'

const AelfdDropdown = ({
  children,
  size = 'default',
  offsetX = 0,
  offsetY = 0,
  ...props
}: AelfdDropdownProps) => {
  const { styles, cx } = useStyles({ size, offsetX, offsetY })
  return (
    <Dropdown
      overlayClassName={cx(styles.dropDownWrap, props.overlayClassName)}
      {...props}
    >
      {children}
    </Dropdown>
  )
}

export default AelfdDropdown
