import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/swap.svg';
import { IconProps } from '../../type';

const componentName = 'SwapOutlined';
export const SwapOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
SwapOutlined.displayName = componentName;
