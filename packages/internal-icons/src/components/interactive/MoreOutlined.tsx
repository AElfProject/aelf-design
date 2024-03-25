import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/more.svg';
import { IconProps } from '../../type';

const componentName = 'MoreOutlined';
export const MoreOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MoreOutlined.displayName = componentName;
