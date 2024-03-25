import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/progress/error.svg';
import { type IconProps } from '../type';

const componentName = 'ProgressErrorIcon';
export const ProgressErrorIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon
      component={AelfSVGComponent}
      style={{
        fontSize: '24px',
      }}
      ref={ref}
      {...props}
    />
  );
});
ProgressErrorIcon.displayName = componentName;
