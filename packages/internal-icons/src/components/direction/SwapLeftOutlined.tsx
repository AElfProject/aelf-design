import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/swap-left.svg';
import { IconProps } from '../../type';

const componentName = 'SwapLeftOutlined';
export const SwapLeftOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
SwapLeftOutlined.displayName = componentName;
