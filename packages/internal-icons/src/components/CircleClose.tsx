import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/circle-close.svg';
import { type IconProps } from '../type';

const componentName = 'CircleCloseIconOutlined';
export const CircleCloseIconOutlined = React.forwardRef<HTMLSpanElement, IconProps>(
  (props, ref) => {
    return (
      <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
    );
  },
);
CircleCloseIconOutlined.displayName = componentName;
