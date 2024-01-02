import { Tabs as AntdTabs, TabsProps } from 'antd'
import useStyles from './style'

export type TabsSizeType = 'middle' | 'small'

export interface ITabsProps
  extends Omit<TabsProps, 'size' | 'tabBarGutter' | 'rootClassName'> {
  size?: TabsSizeType
  rootClassName?: string
}

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
