import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/downArrow.svg';
import { type IconProps } from '../type';

const componentName = 'DownArrowIcon';
export const DownArrowIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
DownArrowIcon.displayName = 'DownArrowIcon';
