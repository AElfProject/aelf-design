import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/menu-unfold.svg';
import { IconProps } from '../../type';

const componentName = 'MenuUnfoldOutlined';
export const MenuUnfoldOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MenuUnfoldOutlined.displayName = componentName;
