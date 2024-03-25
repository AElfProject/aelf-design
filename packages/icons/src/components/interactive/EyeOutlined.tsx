import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/eye.svg';
import { IconProps } from '../../type';

const componentName = 'EyeOutlined';
export const EyeOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
EyeOutlined.displayName = componentName;
