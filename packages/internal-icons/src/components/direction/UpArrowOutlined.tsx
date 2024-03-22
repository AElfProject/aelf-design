import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/up-arrow.svg';
import { IconProps } from '../../type';

const componentName = 'UpArrowOutlined';
export const UpArrowOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
UpArrowOutlined.displayName = componentName;
