import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/upload-icon.svg';

const componentName = 'UploadIcon';
export const UploadIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
    return (
      <AelfIcon
        component={AelfSVGComponent}
        componentName={componentName}
        defaultWidth={41}
        defaultHeight={40}
        ref={ref}
        {...props}
      />
    );
  },
);
UploadIcon.displayName = componentName;
