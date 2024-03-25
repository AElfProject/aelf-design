import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/switch.svg';
import { IconProps } from '../../type';

const componentName = 'SwitchOutlined';
export const SwitchOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
SwitchOutlined.displayName = componentName;
