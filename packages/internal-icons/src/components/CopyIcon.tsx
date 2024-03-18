import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/copy.svg';
import { type IconProps } from '../type';

const componentName = 'CopyIcon';
export const CopyIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
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
CopyIcon.displayName = componentName;
