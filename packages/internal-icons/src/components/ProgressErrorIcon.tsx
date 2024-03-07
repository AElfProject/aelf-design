import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/progress/error.svg';

const componentName = 'ProgressErrorIcon';
export const ProgressErrorIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
    return (
      <AelfIcon
        component={AelfSVGComponent}
        componentName={componentName}
        defaultWidth={24}
        defaultHeight={24}
        ref={ref}
        {...props}
      />
    );
  },
);
ProgressErrorIcon.displayName = componentName;
