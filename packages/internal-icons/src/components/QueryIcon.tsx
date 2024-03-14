import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/query.svg';

const componentName = 'QueryIcon';
export const QueryIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
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
QueryIcon.displayName = 'QueryIcon';
