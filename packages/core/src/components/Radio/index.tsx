import { Radio as AntdRadio } from 'antd'
import { RadioProps } from 'antd/lib'
import useStyles from './style'

function Radio(props: RadioProps) {
  const { styles, cx } = useStyles()
  return (
    <AntdRadio
      {...props}
      className={cx('aelf-design-radio', styles.aelfDesignRadio)}
    />
  )
}

Radio.Button = AntdRadio.Button
Radio.Group = AntdRadio.Group

export default Radio
