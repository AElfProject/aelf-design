import { ModalProps } from 'antd'

export interface IModalProps extends Omit<ModalProps, 'wrapClassName'> {
  wrapClassName?: string
}
