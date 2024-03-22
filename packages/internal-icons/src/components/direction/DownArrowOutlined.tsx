import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/down-arrow.svg';
import { IconProps } from '../../type';

const componentName = 'DownArrowOutlined';
export const DownArrowOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
DownArrowOutlined.displayName = componentName;
