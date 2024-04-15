import React, { forwardRef, ReactNode, Ref } from 'react';
import { CloseFilled, EyeInvisibleOutlined, EyeOutlined, IconProps } from '@aelf-design/icons';
import { Input as AntdInput, InputProps, InputRef } from 'antd';
import { Theme, useTheme } from 'antd-style';
import { OverrideToken } from 'antd/es/theme/interface';
import type { PasswordProps, TextAreaProps } from 'antd/lib/input';

import useStyles from './style';

export type InputSizeType = 'small' | 'middle';

export interface IInputProps extends Omit<InputProps, 'size' | 'onClear'> {
  size?: InputSizeType;
  onClear?: React.MouseEventHandler<HTMLElement>;
  count?: CountConfig;
}

export type InputPasswordProps = Omit<PasswordProps, 'size'> & IInputProps;

export type InputTextAreaProps = Omit<TextAreaProps, 'size'> & IInputProps;

export interface CountConfig {
  max?: number;
  strategy?: (value: string) => number;
  show?: boolean | ((args: { value: string; count: number; maxLength?: number }) => ReactNode);
  exceedFormatter?: (value: string, config: { max: number }) => string;
}

export const getClearIcon = (
  onClear?: React.MouseEventHandler<HTMLElement> | undefined,
  token?: Theme & OverrideToken,
) => {
  return (
    <div
      onClick={(e) => {
        onClear?.(e);
      }}
    >
      <CloseFilled
        color={token?.colorBorder}
        hoverColor={token?.Table?.headerBg}
        activeColor={token?.colorTextDisabled}
      />
    </div>
  );
};

const InternalInput = forwardRef<InputRef, IInputProps>(
  ({ size = 'middle', className, onClear, allowClear, ...rest }: IInputProps, ref) => {
    const { styles: st } = useStyles({ size });
    const token = useTheme();

    return (
      <AntdInput
        {...rest}
        ref={ref}
        size={size}
        className={`${st.aelfdInput} ${className || ''}`}
        allowClear={
          allowClear === false
            ? false
            : allowClear
              ? allowClear
              : {
                  clearIcon: getClearIcon(onClear, token),
                }
        }
      />
    );
  },
);

function InputPassword({
  size = 'middle',
  className,
  onClear,
  allowClear,
  ...rest
}: InputPasswordProps) {
  const { styles: st } = useStyles({ size });
  const token = useTheme();
  const iconProps: IconProps = {
    twoToneColor: [token?.colorBorder, token?.colorBorder],
    hoverTwoToneColor: [token?.colorPrimaryHover, token?.colorPrimaryHover],
    activeTwoToneColor: [token?.colorPrimaryActive, token?.colorPrimaryActive],
  };
  return (
    <AntdInput.Password
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
      allowClear={
        allowClear === false
          ? false
          : allowClear
            ? allowClear
            : {
                clearIcon: getClearIcon(onClear, token),
              }
      }
      iconRender={(visible) =>
        visible ? <EyeInvisibleOutlined {...iconProps} /> : <EyeOutlined {...iconProps} />
      }
    ></AntdInput.Password>
  );
}

function InputTextArea({ size = 'middle', className, ...rest }: InputTextAreaProps) {
  const { styles: st } = useStyles({ size });
  return (
    <AntdInput.TextArea
      {...rest}
      size={size}
      className={`${st.aelfdInput} ${className || ''}`}
    ></AntdInput.TextArea>
  );
}

if (process.env.NODE_ENV !== 'production') {
  InternalInput.displayName = 'Input';
}

type CompoundedInput = typeof InternalInput & {
  Password: typeof InputPassword;
  TextArea: typeof InputTextArea;
};

const Input = InternalInput as CompoundedInput;

Input.Password = InputPassword;
Input.TextArea = InputTextArea;

export default Input;
