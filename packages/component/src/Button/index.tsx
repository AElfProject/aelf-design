import React, { forwardRef, MouseEvent } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import { debounce } from 'lodash-es';

import useStyles from './style';

export type ButtonSizeType = 'mini' | 'small' | 'medium' | 'large' | 'ultra';
export interface IButtonProps extends Omit<ButtonProps, 'size' | 'onClick'> {
  size?: ButtonSizeType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  millisecondOfDebounce?: number;
}

const Button = forwardRef<HTMLElement, IButtonProps>(
  ({ size = 'large', className, millisecondOfDebounce = 0, ...rest }: IButtonProps, ref) => {
    const { styles: st, cx } = useStyles({ size });

    const buttonClickHandler = debounce(
      (e: MouseEvent<HTMLElement>) => {
        if (rest.onClick) {
          rest.onClick(e);
        }
      },
      millisecondOfDebounce,
      {
        leading: false,
        trailing: true,
      },
    );
    return (
      <AntdButton
        ref={ref}
        {...rest}
        onClick={buttonClickHandler}
        className={cx(st.buttonWrap, className)}
      >
        {rest.children}
      </AntdButton>
    );
  },
);

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;
