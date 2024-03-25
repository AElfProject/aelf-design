import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/scan.svg';
import { IconProps } from '../../type';

const componentName = 'ScanOutlined';
export const ScanOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ScanOutlined.displayName = componentName;
