import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd'

export type ITooltipProps = AntdTooltipProps
import useStyles from './style'

export default function Tooltip(props: ITooltipProps) {
  const { styles, cx } = useStyles()
  const { children } = props
  return (
    <AntdTooltip
      {...props}
      overlayClassName={cx(
        'custom-tooltip',
        styles.customTooltip,
        props.overlayClassName
      )}
    >
      {children}
    </AntdTooltip>
  )
}
