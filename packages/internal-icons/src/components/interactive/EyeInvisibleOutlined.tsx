import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/eye-invisible.svg';
import { IconProps } from '../../type';

const componentName = 'EyeInvisibleOutlined';
export const EyeInvisibleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
EyeInvisibleOutlined.displayName = componentName;
