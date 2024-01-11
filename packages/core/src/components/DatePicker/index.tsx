import {
  DatePicker as AntdDatePicker,
  DatePickerProps as AntdDatePickerProps
} from 'antd'

import useStyles from './style'

export type TDatePickerPropsForPC = AntdDatePickerProps

function DatePickerForPC(props: TDatePickerPropsForPC) {
  return <AntdDatePicker {...props} />
}

// DatePicker.RangePicker = RangePicker

export { DatePickerForPC }
