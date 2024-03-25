import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/camera.svg';
import { IconProps } from '../../type';

const componentName = 'CameraFilled';
export const CameraFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CameraFilled.displayName = componentName;
