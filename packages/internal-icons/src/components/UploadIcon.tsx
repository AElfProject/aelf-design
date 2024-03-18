import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/upload-icon.svg';
import { type IconProps } from '../type';

const componentName = 'UploadIcon';
export const UploadIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
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
});
UploadIcon.displayName = componentName;
