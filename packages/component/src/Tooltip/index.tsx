import React from 'react';
import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd';

import useStyles from './style';

export type ITooltipProps = AntdTooltipProps;

export default function Tooltip(props: ITooltipProps) {
  const { styles, cx, prefixCls } = useStyles();
  const { children } = props;
  return (
    <AntdTooltip
      {...props}
      overlayClassName={cx(
        prefixCls + '-custom-tooltip',
        styles.customTooltip,
        props.overlayClassName,
      )}
    >
      {children}
    </AntdTooltip>
  );
}
