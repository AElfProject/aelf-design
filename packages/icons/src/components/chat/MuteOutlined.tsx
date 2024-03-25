import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/mute.svg';
import { IconProps } from '../../type';

const componentName = 'MuteOutlined';
export const MuteOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
MuteOutlined.displayName = componentName;
