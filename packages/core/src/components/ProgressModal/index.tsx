import Modal from 'components/Modal'
import { ReactNode } from 'react'
import { IStepItem, RichProgress } from 'components/RichProgress'
import { ModalProps } from 'antd'
import useStyles from './style'

export interface IProgressModalProps extends ModalProps {
  steps: Array<IStepItem>
  desc?: ReactNode
  strokeColor?: string
  strokeErrorColor?: string
  trailColor?: string
  successIcon?: ReactNode
  errorIcon?: ReactNode
}

export const ProgressModal = (props: IProgressModalProps) => {
  const {
    steps,
    desc,
    successIcon,
    errorIcon,
    strokeColor,
    trailColor,
    strokeErrorColor
  } = props
  const { styles, cx, prefixCls } = useStyles()

  return (
    <Modal
      {...props}
      className={cx(
        styles.progressModalContainer,
        prefixCls + '-progress-modal-container'
      )}
    >
      {desc}
      <div
        className={cx(
          styles.progressBarContainer,
          prefixCls + '-progress-bar-container'
        )}
      >
        <RichProgress
          stepsData={steps}
          strokeColor={strokeColor}
          trailColor={trailColor}
          strokeErrorColor={strokeErrorColor}
          successIcon={successIcon}
          errorIcon={errorIcon}
        />
      </div>
    </Modal>
  )
}
