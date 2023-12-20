import { TabsProps } from 'antd'

export type TabsSizeType = 'middle' | 'small'

export interface ITabsProps
  extends Omit<TabsProps, 'size' | 'tabBarGutter' | 'rootClassName'> {
  size?: TabsSizeType
  rootClassName?: string
}
