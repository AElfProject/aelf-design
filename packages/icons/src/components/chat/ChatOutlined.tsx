import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/chat.svg';
import { IconProps } from '../../type';

const componentName = 'ChatOutlined';
export const ChatOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ChatOutlined.displayName = componentName;
