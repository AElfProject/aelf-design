import React, { MouseEvent } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import { debounce } from 'lodash';

import useStyles from './style';

export type ButtonSizeType = 'mini' | 'small' | 'medium' | 'large' | 'ultra';
export interface IButtonProps extends Omit<ButtonProps, 'size' | 'onClick'> {
  size?: ButtonSizeType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  millisecondOfDebounce?: number;
}

function Button({ size = 'large', className, millisecondOfDebounce = 0, ...rest }: IButtonProps) {
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
    <AntdButton {...rest} onClick={buttonClickHandler} className={cx(st.buttonWrap, className)}>
      {rest.children}
    </AntdButton>
  );
}

export default Button;
