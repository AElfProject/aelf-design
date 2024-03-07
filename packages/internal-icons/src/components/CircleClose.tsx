import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/circle-close.svg';

const componentName = 'CircleCloseIcon';
export const CircleCloseIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
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
  },
);
CircleCloseIcon.displayName = componentName;
