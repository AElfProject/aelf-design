import { Button as AntdButton } from 'antd'
import { MouseEvent } from 'react'
import { useThrottleFn } from 'ahooks'
import { IButtonProps } from './Button'
import useStyles from './style'

function Button({
  size = 'large',
  className,
  millisecondOfThrottle = 0,
  ...rest
}: IButtonProps) {
  const { styles: st, cx } = useStyles({ size })

  const { run: buttonClickHandler } = useThrottleFn(
    (e: MouseEvent<HTMLElement>) => {
      rest.onClick && rest.onClick(e)
    },
    { wait: millisecondOfThrottle }
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
