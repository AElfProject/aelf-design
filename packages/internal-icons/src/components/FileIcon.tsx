import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/file.svg';
import { type IconProps } from '../type';

const componentName = 'FileIcon';
export const FileIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} style={{ fontSize: '56px' }} ref={ref} {...props} />
  );
});
FileIcon.displayName = componentName;
