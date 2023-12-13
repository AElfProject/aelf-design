import { Input } from 'antd'
import CircleClose from 'assets/circle-close.svg?react'
import EyeTwoTone from 'assets/eye.svg?react'
import EyeInvisibleOutlined from 'assets/eye-invisible.svg?react'
import useStyles from './style'
import {
  AelfdInputProps,
  AelfdInputPasswordProps,
  AelfdInputTextAreaProps
} from './Input'

const getClearIcon = (
  onClear?: React.MouseEventHandler<HTMLElement> | undefined
) => {
  return (
    <div
      onClick={(e) => {
        onClear && onClear(e)
      }}
    >
      <CircleClose
        color="#E0E0E0"
        data-hoverColor="#F0F0F0"
        data-activeColor="#D6D6D6"
        width="16px"
        height="16px"
      />
    </div>
  )
}

const AelfdInput = ({
  size = 'middle',
  className,
  onClear,
  ...rest
}: AelfdInputProps) => {
  const { styles: st } = useStyles({ size })
  return (
    <Input
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: getClearIcon(onClear)
      }}
    />
  )
}

const AelfdInputPassword = ({
  size = 'middle',
  className,
  ...rest
}: AelfdInputPasswordProps) => {
  const { styles: st } = useStyles({ size })
  return (
    <Input.Password
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: getClearIcon()
      }}
      iconRender={(visible) =>
        visible ? (
          <EyeTwoTone
            data-twoToneColor={['#E0E0E0', '#E0E0E0']}
            data-hoverTwoToneColor={['#3B9DFF', '#3B9DFF']}
            data-activeTwoToneColor={['#127FFF', '#127FFF']}
            width="16px"
            height="16px"
          />
        ) : (
          <EyeInvisibleOutlined
            data-twoToneColor={['#E0E0E0', '#E0E0E0']}
            data-hoverTwoToneColor={['#3B9DFF', '#3B9DFF']}
            data-activeTwoToneColor={['#127FFF', '#127FFF']}
            width="16px"
            height="16px"
          />
        )
      }
    ></Input.Password>
  )
}

const AelfdInputTextArea = ({
  size = 'middle',
  className,
  ...rest
}: AelfdInputTextAreaProps) => {
  const { styles: st } = useStyles({ size })
  return (
    <Input.TextArea
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
    ></Input.TextArea>
  )
}

AelfdInput.Password = AelfdInputPassword
AelfdInput.TextArea = AelfdInputTextArea

export default AelfdInput
