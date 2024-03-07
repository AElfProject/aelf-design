import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/next.svg';

const componentName = 'NextButtonIcon';
export const NextButtonIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
    return (
      <AelfIcon
        component={AelfSVGComponent}
        componentName={componentName}
        defaultWidth={16}
        defaultHeight={60}
        ref={ref}
        {...props}
      />
    );
  },
);
NextButtonIcon.displayName = componentName;
