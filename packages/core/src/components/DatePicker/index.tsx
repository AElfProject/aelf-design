import {
  DatePicker as AntdDatePicker,
  DatePickerProps as AntdDatePickerProps
} from 'antd'
import {
  DatePicker as AdmDatePicker,
  DatePickerProps as AdmDatePickerProps
} from 'antd-mobile'
import useStyles from './style'

export type TDatePickerPropsForPC = AntdDatePickerProps
export type TDatePickerPropsForMobile = AdmDatePickerProps

function DatePickerForPC(props: TDatePickerPropsForPC) {
  return <AntdDatePicker {...props} />
}

function DatePickerForMobile({
  confirmText = 'Done',
  cancelText = 'Cancel',
  ...rest
}: TDatePickerPropsForMobile) {
  const { styles: st } = useStyles()
  return (
    <AdmDatePicker
      {...rest}
      confirmText={confirmText}
      cancelText={cancelText}
      className={st.datePickerForMobileWrap}
    />
  )
}

// DatePicker.RangePicker = RangePicker

export { DatePickerForPC, DatePickerForMobile }
