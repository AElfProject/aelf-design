import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/left-arrow.svg';
import { IconProps } from '../../type';

const componentName = 'LeftArrowOutlined';
export const LeftArrowOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
LeftArrowOutlined.displayName = componentName;
