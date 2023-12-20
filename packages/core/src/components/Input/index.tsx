import { Input as AntdInput } from 'antd'
import CircleClose from 'assets/circle-close.svg?react'
import EyeTwoTone from 'assets/eye.svg?react'
import EyeInvisibleOutlined from 'assets/eye-invisible.svg?react'
import useStyles from './style'
import { IInputProps, InputPasswordProps, InputTextAreaProps } from './Input'

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

function Input({ size = 'middle', className, onClear, ...rest }: IInputProps) {
  const { styles: st } = useStyles({ size })
  return (
    <AntdInput
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={{
        clearIcon: getClearIcon(onClear)
      }}
    />
  )
}

function InputPassword({
  size = 'middle',
  className,
  ...rest
}: InputPasswordProps) {
  const { styles: st } = useStyles({ size })
  return (
    <AntdInput.Password
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
    ></AntdInput.Password>
  )
}

function InputTextArea({
  size = 'middle',
  className,
  ...rest
}: InputTextAreaProps) {
  const { styles: st } = useStyles({ size })
  return (
    <AntdInput.TextArea
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
    ></AntdInput.TextArea>
  )
}

Input.Password = InputPassword
Input.TextArea = InputTextArea

export default Input
