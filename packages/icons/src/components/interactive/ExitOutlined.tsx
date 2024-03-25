import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/exit.svg';
import { IconProps } from '../../type';

const componentName = 'ExitOutlined';
export const ExitOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ExitOutlined.displayName = componentName;
