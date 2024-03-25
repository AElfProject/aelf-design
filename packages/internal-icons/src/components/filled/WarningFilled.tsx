import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/warning.svg';
import { IconProps } from '../../type';

const componentName = 'WarningFilled';
export const WarningFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
WarningFilled.displayName = componentName;
