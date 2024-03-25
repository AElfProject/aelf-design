import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/interactive/refresh.svg';
import { IconProps } from '../../type';

const componentName = 'RefreshOutlined';
export const RefreshOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return <AelfIcon component={AelfSVGComponent} ref={ref} {...props} />;
});
RefreshOutlined.displayName = componentName;
