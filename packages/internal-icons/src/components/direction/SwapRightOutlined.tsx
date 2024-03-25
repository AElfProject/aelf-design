import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/swap-right.svg';
import { IconProps } from '../../type';

const componentName = 'SwapRightOutlined';
export const SwapRightOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
SwapRightOutlined.displayName = componentName;
