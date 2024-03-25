import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/finger-print.svg';
import { IconProps } from '../../type';

const componentName = 'FingerPrintOutlined';
export const FingerPrintOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
FingerPrintOutlined.displayName = componentName;
