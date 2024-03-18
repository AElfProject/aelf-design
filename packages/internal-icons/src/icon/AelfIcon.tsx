import * as React from 'react';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { useStyles } from '../hooks';
import type { IconProps } from '../type';

export interface AelfIconProps {
  componentName: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  defaultWidth?: string | number;
  defaultHeight?: string | number;
}

export const AelfIcon = React.forwardRef<HTMLSpanElement, IconProps & AelfIconProps>(
  (props, ref) => {
    const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('aelf-icon');

    const {
      defaultWidth,
      defaultHeight,
      component,
      componentName,
      color,
      hoverColor,
      activeColor,
      twoToneColor,
      hoverTwoToneColor,
      activeTwoToneColor,

      ...restProps
    } = props;
    const { width = defaultWidth, height = defaultHeight, style, ...restedProps } = restProps;
    const iconColor: IconProps = {
      width,
      height,
      color,
      hoverColor,
      activeColor,
      twoToneColor,
      hoverTwoToneColor,
      activeTwoToneColor,
    };
    const { styles } = useStyles(iconColor);
    const cls = classnames(prefixCls, props.className, styles.iconWrap);
    const Com = component;
    return (
      <span
        {...restedProps}
        ref={ref}
        style={{
          ...style,
        }}
        className={cls}
      >
        <Com />
      </span>
    );
  },
);

AelfIcon.displayName = 'AelfIcon';
