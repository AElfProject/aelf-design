import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/camera.svg';
import { IconProps } from '../../type';

const componentName = 'CameraOutlined';
export const CameraOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CameraOutlined.displayName = componentName;
