import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/clear.svg';
import { IconProps } from '../../type';

const componentName = 'ClearOutlined';
export const ClearOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
ClearOutlined.displayName = componentName;
