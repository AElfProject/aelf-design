import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/prev.svg';
import { type IconProps } from '../type';

const componentName = 'PrevButtonIcon';
export const PrevButtonIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
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
PrevButtonIcon.displayName = componentName;
