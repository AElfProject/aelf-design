import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/filled/chat.svg';
import { IconProps } from '../../type';

const componentName = 'ChatFilled';
export const ChatFilled = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ChatFilled.displayName = componentName;
