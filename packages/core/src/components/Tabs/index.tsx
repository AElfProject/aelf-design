import { Tabs as AntdTabs } from 'antd'
import { ITabsProps } from './Tabs'
import useStyles from './style'

function Tabs({ size = 'middle', rootClassName, ...props }: ITabsProps) {
  const { styles, cx } = useStyles()
  return (
    <AntdTabs
      {...props}
      size={size}
      tabBarGutter={0}
      rootClassName={cx(styles.tabslWrap, rootClassName)}
    />
  )
}

export default Tabs
