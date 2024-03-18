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
        defaultWidth={18}
        defaultHeight={18}
        ref={ref}
        {...props}
      />
    );
  },
);
EyeInvisibleOutlinedIcon.displayName = componentName;
