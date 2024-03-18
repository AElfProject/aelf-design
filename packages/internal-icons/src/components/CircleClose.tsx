import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/circle-close.svg';
import { type IconProps } from '../type';

const componentName = 'CircleCloseIcon';
export const CircleCloseIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon
      component={AelfSVGComponent}
      componentName={componentName}
      defaultWidth={16}
      defaultHeight={16}
      ref={ref}
      {...props}
    />
  );
});
CircleCloseIcon.displayName = componentName;
