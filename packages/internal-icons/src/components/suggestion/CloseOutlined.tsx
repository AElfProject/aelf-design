import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/suggestion/close.svg';
import { IconProps } from '../../type';

const componentName = 'CloseOutlined';
export const CloseOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
CloseOutlined.displayName = componentName;
