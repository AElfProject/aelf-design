import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/rotate-left.svg';
import { IconProps } from '../../type';

const componentName = 'RotateLeftOutlined';
export const RotateLeftOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
RotateLeftOutlined.displayName = componentName;
