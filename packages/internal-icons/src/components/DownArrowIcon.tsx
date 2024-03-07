import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/downArrow.svg';

const componentName = 'DownArrowIcon';
export const DownArrowIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
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
  },
);
DownArrowIcon.displayName = 'DownArrowIcon';
