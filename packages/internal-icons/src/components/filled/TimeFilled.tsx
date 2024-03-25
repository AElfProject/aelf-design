import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/time.svg';
import { IconProps } from '../../type';

const componentName = 'TimeFilled';
export const TimeFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
TimeFilled.displayName = componentName;
