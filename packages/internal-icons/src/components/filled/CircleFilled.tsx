import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/circle.svg';
import { IconProps } from '../../type';

const componentName = 'CircleFilled';
export const CircleFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CircleFilled.displayName = componentName;
