import { Modal as AntdModal, ModalProps } from 'antd'
import Close from 'assets/close.svg?react'
import useStyles from './style'
import { useTheme } from 'antd-style'
import { memo } from 'react'

export interface IModalProps extends Omit<ModalProps, 'wrapClassName'> {
  wrapClassName?: string
}

function Modal({
  wrapClassName,
  width = 438,
  closeIcon = true,
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
        closeIcon ? (
          <div className={styles.closeIconWrap}>
            <Close color={token?.colorTextBase} width="16" height="16" />
          </div>
        ) : null
      }
    >
      {children}
    </AntdModal>
  )
}

export default memo(Modal)
