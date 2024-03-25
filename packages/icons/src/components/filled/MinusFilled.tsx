import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/minus.svg';
import { IconProps } from '../../type';

const componentName = 'MinusFilled';
export const MinusFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MinusFilled.displayName = componentName;
