import { Progress as AntdProgress, ProgressProps } from 'antd'
import useStyles from './style'

export interface IProgressProps extends ProgressProps {}

function Progress({ showInfo = false, ...rest }: IProgressProps) {
  const { styles: st, cx } = useStyles()

  return (
    <AntdProgress
      {...rest}
      showInfo={showInfo}
      className={cx(st.progressWrap)}
    />
  )
}

export default Progress
