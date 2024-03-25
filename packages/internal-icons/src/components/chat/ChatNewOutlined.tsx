import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/chat-new.svg';
import { IconProps } from '../../type';

const componentName = 'ChatNewOutlined';
export const ChatNewOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ChatNewOutlined.displayName = componentName;
