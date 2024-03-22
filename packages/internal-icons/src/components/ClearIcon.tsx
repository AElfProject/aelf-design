import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/clear-icon.svg';
import { type IconProps } from '../type';

const componentName = 'ClearIconFilled';
export const ClearIconFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
ClearIconFilled.displayName = componentName;
