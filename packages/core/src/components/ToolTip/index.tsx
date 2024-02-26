import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd'

export type ITooltipProps = AntdTooltipProps
import useStyles from './style'

export default function ToolTip(props: ITooltipProps) {
  const { styles, cx, prefixCls } = useStyles()
  const { children } = props
  return (
    <AntdTooltip
      {...props}
      overlayClassName={cx(
        prefixCls + '-custom-tooltip',
        styles.customTooltip,
        props.overlayClassName
      )}
    >
      {children}
    </AntdTooltip>
  )
}
