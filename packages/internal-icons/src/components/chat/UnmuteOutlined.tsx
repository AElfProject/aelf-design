import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/unmute.svg';
import { IconProps } from '../../type';

const componentName = 'UnmuteOutlined';
export const UnmuteOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
UnmuteOutlined.displayName = componentName;
