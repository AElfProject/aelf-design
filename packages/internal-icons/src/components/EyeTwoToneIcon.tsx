import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/eye.svg';
import { type IconProps } from '../type';

const componentName = 'EyeTwoToneIcon';
export const EyeTwoToneIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
EyeTwoToneIcon.displayName = 'EyeTwoToneIcon';
