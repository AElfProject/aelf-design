import {
  DatePicker as AntdDatePicker,
  DatePickerProps as AntdDatePickerProps
} from 'antd'
import {
  DatePicker as AdmDatePicker,
  DatePickerProps as AdmDatePickerProps
} from 'antd-mobile'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import updateLocale from 'dayjs/plugin/updateLocale'
import useStyles from './style'

dayjs.extend(updateLocale)
dayjs.updateLocale('zh-cn', {
  weekStart: 0
})

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
