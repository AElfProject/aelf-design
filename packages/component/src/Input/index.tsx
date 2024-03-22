import React, { ReactNode } from 'react';
import {
  CircleCloseIconOutlined,
  EyeInvisibleOutlinedIcon,
  EyeTwoToneIcon,
  IconProps,
} from '@aelf-design/internal-icons';
import { Input as AntdInput, InputProps } from 'antd';
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

const getClearIcon = (
  onClear?: React.MouseEventHandler<HTMLElement> | undefined,
  token?: Theme & OverrideToken,
) => {
  return (
    <div
      onClick={(e) => {
        onClear?.(e);
      }}
    >
      <CircleCloseIconOutlined
        color={token?.colorBorder}
        hoverColor={token?.Table?.headerBg}
        activeColor={token?.colorTextDisabled}
      />
    </div>
  );
};

function Input({ size = 'middle', className, onClear, allowClear, ...rest }: IInputProps) {
  const { styles: st } = useStyles({ size });
  const token = useTheme();

  return (
    <AntdInput
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
    />
  );
}

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
        visible ? <EyeTwoToneIcon {...iconProps} /> : <EyeInvisibleOutlinedIcon {...iconProps} />
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

Input.Password = InputPassword;
Input.TextArea = InputTextArea;

// function TestIcon() {
//   const token = useTheme();
//   return (
//     <ClearIcon
//       color={token.colorPrimary}
//       hoverColor={token.colorPrimaryHover}
//       activeColor={token.colorPrimaryActive}
//       width={36}
//       height={36}
//     />
//   );
// }
// Input.TestIcon = TestIcon;
export default Input;
