import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/time-circle.svg';
import { IconProps } from '../../type';

const componentName = 'TimeCircleOutlined';
export const TimeCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
TimeCircleOutlined.displayName = componentName;
