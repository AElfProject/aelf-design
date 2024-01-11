import { Modal as AntdModal, ModalProps } from 'antd'
import Close from 'assets/close.svg?react'
import useStyles from './style'
import { useTheme } from 'antd-style'

export interface IModalProps
  extends Omit<ModalProps, 'wrapClassName' | 'closeIcon'> {
  wrapClassName?: string
}

function Modal({
  wrapClassName,
  width = 438,
  children,
  ...props
}: IModalProps) {
  const { styles, cx } = useStyles()
  const token = useTheme()
  return (
    <AntdModal
      {...props}
      width={width}
      wrapClassName={cx(styles.modalWrap, wrapClassName)}
      closeIcon={
        <div className={styles.modalWrap}>
          <Close color={token?.colorTextBase} width="16" height="16" />
        </div>
      }
    >
      {children}
    </AntdModal>
  )
}

export default Modal
