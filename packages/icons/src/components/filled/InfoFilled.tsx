import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/info.svg';
import { IconProps } from '../../type';

const componentName = 'InfoFilled';
export const InfoFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
InfoFilled.displayName = componentName;
