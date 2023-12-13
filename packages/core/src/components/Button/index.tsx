import { Button } from 'antd'
import { MouseEvent } from 'react'
import { useThrottleFn } from 'ahooks'
import { AelfdButtonProps } from './Button'
import useStyles from './style'

const AelfdButton = ({
  size = 'large',
  className,
  millisecondOfThrottle = 0,
  ...rest
}: AelfdButtonProps) => {
  const { styles: st } = useStyles({ size })

  const { run: buttonClickHandler } = useThrottleFn(
    (e: MouseEvent<HTMLElement>) => {
      rest.onClick && rest.onClick(e)
    },
    { wait: millisecondOfThrottle }
  )
  return (
    <Button
      {...rest}
      onClick={buttonClickHandler}
      className={`${st.buttonWrap} ${className || ''}`}
    >
      {rest.children}
    </Button>
  )
}

export default AelfdButton
