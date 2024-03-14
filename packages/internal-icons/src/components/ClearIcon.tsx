import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import { type IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/clear-icon.svg';

const componentName = 'ClearIcon';
export const ClearIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
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
ClearIcon.displayName = 'ClearIcon';
