import { Button, ButtonProps } from 'antd'
import { createStyles } from 'antd-style'
import { MouseEvent } from 'react'
import { useThrottleFn } from 'ahooks'

type AelfdButtonSizeType = 'mini' | 'small' | 'medium' | 'large' | 'ultra'

const useStyles = createStyles(
  ({ token, css, cx }, { size }: { size: AelfdButtonSizeType }) => {
    return {
      buttonWrap: css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${size === 'mini'
          ? '12px'
          : size === 'small'
          ? '12px'
          : size === 'medium'
          ? '14px'
          : size === 'large'
          ? '16px'
          : '16px'};
        padding: 0
          ${size === 'mini'
            ? '12px'
            : size === 'small'
            ? '16px'
            : size === 'medium'
            ? '20px'
            : size === 'large'
            ? '28px'
            : '32px'};
        height: ${size === 'mini'
          ? '24px'
          : size === 'small'
          ? '32px'
          : size === 'medium'
          ? '40px'
          : size === 'large'
          ? '48px'
          : '56px'};
        min-width: ${size === 'mini'
          ? '40px'
          : size === 'small'
          ? '48px'
          : size === 'medium'
          ? '84px'
          : size === 'large'
          ? '92px'
          : '112px'};
        border-radius: ${size === 'mini'
          ? '4px'
          : size === 'small'
          ? '4px'
          : size === 'medium'
          ? '6px'
          : size === 'large'
          ? '6px'
          : '6px'};

        &.ant-btn-circle {
          min-height: 32px;
          height: 32px;
          font-size: 14px;
        }
      `
    }
  }
)
export interface AelfdButtonProps
  extends Omit<ButtonProps, 'size' | 'onClick'> {
  size?: AelfdButtonSizeType
  onClick?: React.MouseEventHandler<HTMLElement>
  millisecondOfThrottle?: number
}

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
