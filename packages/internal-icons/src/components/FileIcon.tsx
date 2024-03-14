import * as React from 'react';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';

import type { IconColorProps } from '../hooks';
import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/file.svg';

const componentName = 'FileIcon';
export const FileIcon = React.forwardRef<HTMLSpanElement, IconBaseProps & IconColorProps>(
  (props, ref) => {
    return (
      <AelfIcon
        component={AelfSVGComponent}
        componentName={componentName}
        defaultWidth={56}
        defaultHeight={56}
        ref={ref}
        {...props}
      />
    );
  },
);
FileIcon.displayName = componentName;
