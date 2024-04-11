import * as React from 'react';
import classnames from 'classnames';

import { useStyles } from '../hooks';
import type { IconProps } from '../type';

export interface AelfIconProps {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const AelfIcon = React.forwardRef<HTMLSpanElement, IconProps & AelfIconProps>(
  (props, ref) => {
    const {
      component,
      color,
      hoverColor,
      activeColor,
      twoToneColor,
      hoverTwoToneColor,
      activeTwoToneColor,
      ...restProps
    } = props;
    const { style, ...restedProps } = restProps;
    const iconColor: IconProps = {
      color,
      hoverColor,
      activeColor,
      twoToneColor,
      hoverTwoToneColor,
      activeTwoToneColor,
    };
    const { styles, prefixCls } = useStyles(iconColor);
    const cls = classnames(`${prefixCls}-icon`, 'icon', props.className, styles.iconWrap);
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
