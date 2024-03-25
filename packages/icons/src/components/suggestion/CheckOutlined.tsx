import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/check.svg';
import { IconProps } from '../../type';

const componentName = 'CheckOutlined';
export const CheckOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CheckOutlined.displayName = componentName;
