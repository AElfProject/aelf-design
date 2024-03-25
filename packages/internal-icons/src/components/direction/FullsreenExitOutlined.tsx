import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/fullsreen-exit.svg';
import { IconProps } from '../../type';

const componentName = 'FullsreenExitOutlined';
export const FullsreenExitOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
FullsreenExitOutlined.displayName = componentName;
