import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/chat/keyboard.svg';
import { IconProps } from '../../type';

const componentName = 'KeyboardOutlined';
export const KeyboardOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
KeyboardOutlined.displayName = componentName;
