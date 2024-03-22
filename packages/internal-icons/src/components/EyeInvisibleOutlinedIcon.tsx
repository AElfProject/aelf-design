import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/eye-invisible.svg';
import { type IconProps } from '../type';

const componentName = 'EyeInvisibleOutlinedIcon';
export const EyeInvisibleOutlinedIcon = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    return (
      <AelfIcon
        component={AelfSVGComponent}
        componentName={componentName}
        style={{ fontSize: '18px' }}
        ref={ref}
        {...props}
      />
    );
  },
);
EyeInvisibleOutlinedIcon.displayName = componentName;
