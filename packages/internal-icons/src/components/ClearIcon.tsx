import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/clear-icon.svg';
import { type IconProps } from '../type';

const componentName = 'ClearIcon';
export const ClearIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
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
ClearIcon.displayName = 'ClearIcon';
