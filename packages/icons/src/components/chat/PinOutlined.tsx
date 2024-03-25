import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/pin.svg';
import { IconProps } from '../../type';

const componentName = 'PinOutlined';
export const PinOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
PinOutlined.displayName = componentName;
