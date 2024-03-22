import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/menu-fold.svg';
import { IconProps } from '../../type';

const componentName = 'MenuFoldOutlined';
export const MenuFoldOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
MenuFoldOutlined.displayName = componentName;
