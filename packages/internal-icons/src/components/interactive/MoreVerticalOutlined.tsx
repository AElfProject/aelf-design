import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/more-vertical.svg';
import { IconProps } from '../../type';

const componentName = 'MoreVerticalOutlined';
export const MoreVerticalOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MoreVerticalOutlined.displayName = componentName;
