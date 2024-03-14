import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import type { IconColorProps } from '../hooks';
import { useStyles } from '../hooks';

export interface AelfIconProps {
  componentName: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  defaultWidth?: string | number;
  defaultHeight?: string | number;
}
export const AelfIcon = React.forwardRef<
  HTMLSpanElement,
  IconBaseProps & IconColorProps & AelfIconProps
>((props, ref) => {
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
  const iconColor: IconColorProps = {
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
  return (
    <AntdIcon
      {...restedProps}
      ref={ref}
      component={component}
      style={{
        ...style,
      }}
      className={cls}
    />
  );
});

AelfIcon.displayName = 'AelfIcon';
