import { Modal as AntdModal } from 'antd'
import { IModalProps } from './Modal'
import useStyles from './style'

const Modal = ({
  wrapClassName,
  width = 438,
  children,
  ...props
}: IModalProps) => {
  const { styles, cx } = useStyles()
  return (
    <AntdModal
      {...props}
      width={width}
      wrapClassName={cx(styles.modalWrap, wrapClassName)}
    >
      {children}
    </AntdModal>
  )
}

export default Modal
