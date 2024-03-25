import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/lock.svg';
import { IconProps } from '../../type';

const componentName = 'LockOutlined';
export const LockOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
LockOutlined.displayName = componentName;
