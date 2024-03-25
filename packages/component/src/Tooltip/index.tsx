import React, { forwardRef } from 'react';
import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd';
import { TooltipRef } from 'antd/es/tooltip';

import useStyles from './style';

export type ITooltipProps = AntdTooltipProps;

const Tooltip = forwardRef<TooltipRef, ITooltipProps>((props: ITooltipProps, ref) => {
  const { styles, cx, prefixCls } = useStyles();
  const { children } = props;
  return (
    <AntdTooltip
      {...props}
      ref={ref}
      overlayClassName={cx(
        prefixCls + '-custom-tooltip',
        styles.customTooltip,
        props.overlayClassName,
      )}
    >
      {children}
    </AntdTooltip>
  );
});
Tooltip.displayName = 'Tooltip';
export default Tooltip;
