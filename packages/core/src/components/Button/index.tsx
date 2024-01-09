import { Button as AntdButton, ButtonProps } from 'antd'
import { MouseEvent } from 'react'
import { debounce } from 'lodash'
import useStyles from './style'

export type ButtonSizeType = 'mini' | 'small' | 'medium' | 'large' | 'ultra'
export interface IButtonProps extends Omit<ButtonProps, 'size' | 'onClick'> {
  size?: ButtonSizeType
  onClick?: React.MouseEventHandler<HTMLElement>
  millisecondOfThrottle?: number
}

function Button({
  size = 'large',
  className,
  millisecondOfThrottle = 0,
  ...rest
}: IButtonProps) {
  const { styles: st, cx } = useStyles({ size })

  const buttonClickHandler = debounce(
    (e: MouseEvent<HTMLElement>) => {
      rest.onClick && rest.onClick(e)
    },
    millisecondOfThrottle,
    {
      leading: true,
      trailing: false
    }
  )
  return (
    <AntdButton
      {...rest}
      onClick={buttonClickHandler}
      className={cx(st.buttonWrap, className)}
    >
      {rest.children}
    </AntdButton>
  )
}

export default Button
