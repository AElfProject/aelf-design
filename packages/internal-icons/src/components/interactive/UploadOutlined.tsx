import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/upload.svg';
import { IconProps } from '../../type';

const componentName = 'UploadOutlined';
export const UploadOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UploadOutlined.displayName = componentName;
