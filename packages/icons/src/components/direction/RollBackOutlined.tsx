import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/roll-back.svg';
import { IconProps } from '../../type';

const componentName = 'RollBackOutlined';
export const RollBackOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
RollBackOutlined.displayName = componentName;
