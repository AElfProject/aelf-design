import { Tooltip, TooltipProps as antdTooltipProps } from 'antd'

export type TooltipProps = antdTooltipProps
import useStyles from './style'

export default function ToolTip(props: TooltipProps) {
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
