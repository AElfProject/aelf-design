import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/right-arrow.svg';
import { IconProps } from '../../type';

const componentName = 'RightArrowOutlined';
export const RightArrowOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
RightArrowOutlined.displayName = componentName;
