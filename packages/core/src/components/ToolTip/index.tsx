import { Tooltip, TooltipProps as antdTooltipProps } from 'antd'

export type ITooltipProps = antdTooltipProps
import useStyles from './style'

export default function ToolTip(props: ITooltipProps) {
  const { styles, cx } = useStyles()
  const { children } = props
  return (
    <Tooltip
      {...props}
      overlayClassName={cx(
        'custom-tooltip',
        styles.customTooltip,
        props.overlayClassName
      )}
    >
      {children}
    </Tooltip>
  )
}
