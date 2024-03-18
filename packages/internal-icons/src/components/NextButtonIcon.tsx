import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/next.svg';
import { type IconProps } from '../type';

const componentName = 'NextButtonIcon';
export const NextButtonIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon
      component={AelfSVGComponent}
      componentName={componentName}
      defaultWidth={16}
      defaultHeight={60}
      ref={ref}
      {...props}
    />
  );
});
NextButtonIcon.displayName = componentName;
