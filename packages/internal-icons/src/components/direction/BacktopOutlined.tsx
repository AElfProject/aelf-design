import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/backtop.svg';
import { IconProps } from '../../type';

const componentName = 'BacktopOutlined';
export const BacktopOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
BacktopOutlined.displayName = componentName;
