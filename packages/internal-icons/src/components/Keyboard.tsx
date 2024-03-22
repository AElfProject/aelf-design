import * as React from 'react';

import { AelfIcon } from '../icon/AelfIcon';
import AelfSVGComponent from '../svgs/key-board.svg';
import { type IconProps } from '../type';

const componentName = 'Keyboard';
export const Keyboard = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
Keyboard.displayName = componentName;
