import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/close.svg';
import { type IconProps } from '../type';

const componentName = 'CloseIcon';
export const CloseIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CloseIcon.displayName = 'CloseIcon';
