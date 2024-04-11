import React from 'react';
import { Switch as AntdSwitch, SwitchProps as AntdSwitchProps } from 'antd';

import useStyles from './style';

export interface SwitchProps extends AntdSwitchProps {}

export default function Switch(props: SwitchProps) {
  const { cx, prefixCls, styles } = useStyles();
  return (
    <AntdSwitch {...props} className={cx(styles[`${prefixCls}-aelfd-switch`], props.className)} />
  );
}
