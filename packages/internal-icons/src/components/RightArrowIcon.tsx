import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/right-arrow.svg';
import { type IconProps } from '../type';

const componentName = 'RightArrowIcon';
export const RightArrowIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon
      component={AelfSVGComponent}
      componentName={componentName}
      defaultWidth={12}
      defaultHeight={12}
      ref={ref}
      {...props}
    />
  );
});
RightArrowIcon.displayName = componentName;
