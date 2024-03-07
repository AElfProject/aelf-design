import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/right-arrow.svg';

const componentName = 'RightArrowIcon';
export const RightArrowIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
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
RightArrowIcon.displayName = componentName;
