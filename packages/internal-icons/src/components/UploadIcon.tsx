import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/upload-icon.svg';
import { type IconProps } from '../type';

const componentName = 'UploadIcon';
export const UploadIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} style={{ fontSize: '40px' }} ref={ref} {...props} />
  );
});
UploadIcon.displayName = componentName;
