import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/more-circle.svg';
import { IconProps } from '../../type';

const componentName = 'MoreCircleOutlined';
export const MoreCircleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MoreCircleOutlined.displayName = componentName;
