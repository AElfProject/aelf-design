import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/check.svg';
import { IconProps } from '../../type';

const componentName = 'CheckFilled';
export const CheckFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CheckFilled.displayName = componentName;
