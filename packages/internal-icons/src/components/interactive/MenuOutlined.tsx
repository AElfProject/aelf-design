import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/menu.svg';
import { IconProps } from '../../type';

const componentName = 'MenuOutlined';
export const MenuOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MenuOutlined.displayName = componentName;
