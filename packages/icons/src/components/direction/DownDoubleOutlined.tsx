import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/down-double.svg';
import { IconProps } from '../../type';

const componentName = 'DownDoubleOutlined';
export const DownDoubleOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
DownDoubleOutlined.displayName = componentName;
