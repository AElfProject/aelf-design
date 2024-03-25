import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/progress/success.svg';
import { type IconProps } from '../type';

const componentName = 'ProgressSuccessIcon';
export const ProgressSuccessIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
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
ProgressSuccessIcon.displayName = componentName;
