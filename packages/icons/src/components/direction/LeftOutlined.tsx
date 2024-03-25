import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/left.svg';
import { IconProps } from '../../type';

const componentName = 'LeftOutlined';
export const LeftOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
LeftOutlined.displayName = componentName;
