import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/fullscreen.svg';
import { IconProps } from '../../type';

const componentName = 'FullscreenOutlined';
export const FullscreenOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
FullscreenOutlined.displayName = componentName;
